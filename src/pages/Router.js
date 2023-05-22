import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Knowledges,
  Home,
  Contact,
  Notfound,
  Portfolio,
  Layout,
} from "./exports";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/knowledges" element={<Knowledges />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
};

export default Router;