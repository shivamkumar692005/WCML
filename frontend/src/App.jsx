import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SkeletonAuth from "./components/Auth/SkeletonAuth";

const Auth = lazy(() => import("./pages/Auth"));
const Chat = lazy(() => import("./pages/Chat"));

function App() {
  return (
    <Router>
      <Suspense fallback={<SkeletonAuth />}>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;