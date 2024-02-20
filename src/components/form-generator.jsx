import { Button, Grid } from "@mui/material";
import React from "react";
import ButtonPanel from "./button-panel";
import Form from "./form";
import { useNavigate } from "react-router-dom";

function FormGenerator() {
  const navigate = useNavigate();

  return (
    <Grid container direction="row" margin={3}>
      <ButtonPanel />
      <Form />

      <Grid item xs={2} />
      <Button
        sx={{ marginTop: "16px" }}
        variant="outlined"
        onClick={() => navigate("/")}
      >
        Save
      </Button>
    </Grid>
  );
}

export default FormGenerator;
