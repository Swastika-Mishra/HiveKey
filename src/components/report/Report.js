import React from "react";

const Report = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "85vh",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src="https://lookerstudio.google.com/embed/reporting/2073783c-ac60-4151-8939-b3f51e657617/page/Lc58E"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    </div>
  );
};

export default Report;