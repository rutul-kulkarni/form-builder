import { Grid } from "@mui/material";
import React from "react";
import ButtonPanel from "./button-panel";
import Form from "./form";

function FormGenerator() {
  return (
    <Grid container direction="row">
      <ButtonPanel />
      <Form />
    </Grid>
  );
}

export default FormGenerator;
