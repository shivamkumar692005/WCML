import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SkeletonAuth from "./components/Auth/SkeletonAuth";
import Layout from "./components/Layout";

const Auth = lazy(() => import("./pages/Auth"));

function App() {
  return (
    <Router>
        <Suspense fallback={<SkeletonAuth />}>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={ <Layout />} />
          </Routes>
        </Suspense>
    </Router>
  );
}

export default App;