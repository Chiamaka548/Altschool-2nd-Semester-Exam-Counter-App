import React from "react";

export default function ErrorFallBack({ error, resetErrorBoundary }) {
  return (
    <>
      <p>See, You have triggered an error now! Big head</p>
      <pre> {error.message} </pre>
      <button onClick={resetErrorBoundary}> RESET </button>
    </>
  );
}
