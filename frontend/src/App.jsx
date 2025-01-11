import React, { useEffect, useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes";

const App = () => {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes((prevRoutes) => [...prevRoutes, routes]);
  }, []);
  console.log(allRoutes);

  return <Router allRoutes={allRoutes} />;
};

export default App;
