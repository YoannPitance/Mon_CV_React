import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Intro,
  Skills,
  Home,
  Contact,
  Notfound,
  Portfolio,
  Layout,
} from "./exports";

const Router = () => {
  return (
    <Routes>
      <Route path="/intro" element={<Intro />}></Route>
      <Route index element={<Intro />} />

      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>

      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default Router;
