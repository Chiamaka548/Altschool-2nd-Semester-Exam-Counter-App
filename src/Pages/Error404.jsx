import React from "react";

function error404() {
  return (
    <div className="error-container">
      <h1 className="message"> 404 - Not Found </h1>
      <p> OOPS!!!! That which you findeth is missing.</p>
      <a href="/"> Home </a>
    </div>
  );
}
export default error404;
