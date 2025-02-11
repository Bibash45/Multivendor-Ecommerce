const adminModel = require("../models/adminModel");
const sellerModel = require("../models/sellerModel");
const sellerCustomerModel = require("../models/chat/sellerCustomerModel");
const { responseReturn } = require("../utils/response");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/tokenCreate");
class authControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const admin = await adminModel.findOne({ email });

      if (admin) {
        const match = await bcrypt.compare(password, admin.password);
        if (match) {
          const token = await createToken({
            id: admin._id,
            role: admin.role,
          });
          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });
          responseReturn(res, 200, {
            token,
            message: "Login Success",
          });
        } else {
          responseReturn(res, 404, { error: "Password Wrong" });
        }
      } else {
        responseReturn(res, 404, { error: "Email Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, {
        error: error.message,
      });
    }
  };
  // End admin_login method

  seller_register = async (req, res) => {
    const { email, name, password } = req.body;
    try {
      const getUser = await sellerModel.find({ email });
      if (getUser.length > 0) {
        responseReturn(res, 404, { error: "Email Already Exist" });
      } else {
        const seller = await sellerModel.create({
          email,
          name,
          password: await bcrypt.hash(password, 10),
          method: "manually",
          shopInfo: {},
        });

        await sellerCustomerModel.create({
          myId: seller._id,
        });

        const token = await createToken({
          id: seller._id,
          role: seller.role,
        });
        res.cookie("accessToken", token, {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });

        responseReturn(res, 201, {
          token,
          message: "Seller Registered Successfully",
        });
      }
    } catch (error) {
      console.log(error);
      responseReturn(res, 500, { error: "Internal Server Error" });
    }
  };

  // end seller_register method
  seller_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const seller = await sellerModel.findOne({ email }).select("+password");

      if (seller) {
        const match = await bcrypt.compare(password, seller.password);

        if (match) {
          const token = await createToken({
            id: seller._id,
            role: seller.role,
          });
          res.cookie("accessToken", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          });
          responseReturn(res, 200, {
            token,
            message: "Seller Login Success",
          });
        } else {
          responseReturn(res, 404, { error: "Password Wrong" });
        }
      } else {
        responseReturn(res, 404, { error: "Email Not Found" });
      }
    } catch (error) {
      responseReturn(res, 500, {
        error: error.message,
      });
    }
  };

  getUser = async (req, res) => {
    const { id, role } = req;
    try {
      if (role === "admin") {
        const user = await adminModel.findById(id);
        responseReturn(res, 200, {
          userInfo: user,
        });
      } else {
        console.log("Seller Info");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  // end getUser Method
}

module.exports = new authControllers();
