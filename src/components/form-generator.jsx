import { Button, Grid } from "@mui/material";
import React from "react";
import ButtonPanel from "./button-panel";
import Form from "./form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BackToHome from "./back";

function FormGenerator() {
  const navigate = useNavigate();
  const formFields = useSelector((state) => state.form.formData);

  return (
    <>
      <BackToHome />
      <Grid container direction="row" margin={3}>
        <ButtonPanel />
        <Form />

        <Grid item xs={2} />
        {formFields.length !== 0 && (
          <Button
            sx={{ marginTop: "16px" }}
            variant="outlined"
            onClick={() => navigate("/")}
          >
            Save Form
          </Button>
        )}
      </Grid>
    </>
  );
}

export default FormGenerator;
