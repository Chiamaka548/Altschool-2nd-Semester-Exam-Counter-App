import { useState } from "react";
import ErrorFallback from "../Pages/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";

export default function ErrorTest() {
  const [name, setName] = useState("");
  const NameError = ({ name }) => {
    if (name === "Jerry Uke") {
      throw new Error("Bombastic Side eye");
    } else {
      return <p className="Hi"> My best friend's name is {name};</p>;
    }
  };
  return (
    <>
      <input
        value={name}
        type="text"
        placeholder="Avoid typing Jerry Uke"
        onChange={(e) => setName(e.target.value)}
      />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setName("")}
        resetKeys={[name]}
      >
        <NameError name={name} />
      </ErrorBoundary>
    </>
  );
}
