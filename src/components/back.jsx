import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function BackToHome() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate("/")}>Back</Button>;
}

export default BackToHome;
