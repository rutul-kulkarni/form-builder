import React from "react";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Link to="/create-form">Create Form</Link>
      <Link to="/view-form">View Form</Link>
    </div>
  );
}

export default Layout;
