import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Error404 from "../src/Pages/Error404";
import ErrorFallback from "../src/Pages/ErrorFallback";
import ErrorTest from "../src/Pages/ErrorTest";
import NavBar from "../src/Components/NavBar";
import Counter from "../src/Components/Counter";
import LandingPage from "../src/Components/LandingPage";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Counter" element={<Counter />} />
            <Route path="Error" element={<Error404 />} />
            <Route path="ErrorTest" element={<ErrorTest />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
}
export default App;
