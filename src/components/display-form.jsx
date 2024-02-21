import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import RenderField from "./render-field";
import BackToHome from "./back";

const DisplayForm = () => {
  const formFields = useSelector((state) => state.form.formData);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};

    formFields.forEach((field) => {
      if (field.isRequired && !field.value)
        errors[field.label] = `${field.label} is required.`;
    });

    setFormErrors(errors);
    console.log("errors", errors);

    if (Object.keys(errors).length === 0) {
      const formData = {};
      formFields.forEach((field) => {
        formData[field.label] = field.value;
      });
      console.log("Form submitted:", formData);
    }
  };

  return (
    <>
      <BackToHome />
      <form onSubmit={handleSubmit}>
        <Grid container gap={3} margin={3}>
          {formFields.map((val, idx) => (
            <Grid item xs={val.fieldType === "textarea" ? 10 : 4}>
              <RenderField
                fieldType={val.fieldType}
                label={val.label}
                options={val.options ? val.options : null}
                idx={idx}
                error={formErrors[val.label]}
              />
            </Grid>
          ))}
          {formFields.length === 0 ? (
            <Typography>No Form Available</Typography>
          ) : (
            <Grid item xs={12}>
              <Button variant="outlined" type="submit">
                Submit
              </Button>
            </Grid>
          )}
        </Grid>
      </form>
    </>
  );
};

export default DisplayForm;
