import { useState } from "react";

export const withSidebar = (Component, Component1) => {
  return () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    return (
      <div>
        {loading ? (
          <p
            style={{
              width: "100%",
              height: "100vh",
              color: "#252525",
              fontSize: "100px",
              display: "flex ",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Loading ...
          </p>
        ) : (
          <Component /> || <Component1 />
        )}
      </div>
    );
  };
};

export default withSidebar;
