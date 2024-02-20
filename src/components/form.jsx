import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const FormSelect = ({ label, options }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={handleChange}
        variant="standard"
      >
        {options.map((val) => (
          <MenuItem value={val}>{val}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const FormTextField = ({ label }) => {
  return <TextField label={label} fullWidth variant="standard" />;
};

const FormTextArea = ({ label }) => {
  return <TextField multiline fullWidth label={label} variant="standard" />;
};

const FormCheckBox = ({ label }) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      label={label}
      control={<Checkbox checked={checked} onChange={handleChange} />}
    />
  );
};

const FormRadioButton = ({ label, options }) => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row value={value} onChange={handleChange}>
        {options.map((val) => (
          <FormControlLabel value={val} control={<Radio />} label={val} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

const RenderField = ({ fieldType, label, options }) => {
  switch (fieldType) {
    case "textfield":
      return <FormTextField label={label} />;
    case "textarea":
      return <FormTextArea label={label} />;
    case "dropdown":
      return <FormSelect label={label} options={options} />;
    case "checkbox":
      return <FormCheckBox label={label} />;
    case "radio-button":
      return <FormRadioButton label={label} options={options} />;

    default:
      return null;
  }
};

function Form() {
  const formFields = useSelector((state) => state.form.formData);

  console.log(formFields);

  return (
    <Grid item xs={10}>
      <Grid container gap={3}>
        {formFields.map((val) => (
          <Grid item xs={val.fieldType === "textarea" ? 10 : 4}>
            <RenderField
              fieldType={val.fieldType}
              label={val.label}
              options={val.options ? val.options : null}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Form;
