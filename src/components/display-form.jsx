import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  FormCheckBox,
  FormRadioButton,
  FormSelect,
  FormTextArea,
  FormTextField,
} from "./form-components";

const RenderField = ({ fieldType, label, options, idx }) => {
  switch (fieldType) {
    case "textfield":
      return <FormTextField label={label} idx={idx} />;
    case "textarea":
      return <FormTextArea label={label} idx={idx} />;
    case "dropdown":
      return <FormSelect label={label} idx={idx} options={options} />;
    case "checkbox":
      return <FormCheckBox label={label} idx={idx} />;
    case "radio-button":
      return <FormRadioButton label={label} idx={idx} options={options} />;

    default:
      return null;
  }
};

const DisplayForm = () => {
  const formFields = useSelector((state) => state.form.formData);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("event", formFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container gap={3} margin={3}>
        {formFields.map((val, idx) => (
          <Grid item xs={val.fieldType === "textarea" ? 10 : 4}>
            <RenderField
              fieldType={val.fieldType}
              label={val.label}
              options={val.options ? val.options : null}
              idx={idx}
            />
          </Grid>
        ))}

        <Grid item xs={12}>
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default DisplayForm;
