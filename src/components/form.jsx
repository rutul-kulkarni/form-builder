import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteField } from "../store/formSlice";

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

const RenderField = ({ fieldType, label, options, idx }) => {
  const dispatch = useDispatch();
  const formFields = useSelector((state) => state.form.formData);

  const handleDelete = () => {
    let newFormFields = formFields.filter((val, crr_idx) => crr_idx !== idx);
    dispatch(deleteField(newFormFields));
  };

  switch (fieldType) {
    case "textfield":
      return (
        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <FormTextField label={label} />
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      );
    case "textarea":
      return (
        <Grid
          item
          xs={10}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <FormTextArea label={label} />
          <IconButton
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      );
    case "dropdown":
      return (
        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <FormSelect label={label} options={options} />
          <IconButton
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      );
    case "checkbox":
      return (
        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <FormCheckBox label={label} />
          <IconButton
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      );
    case "radio-button":
      return (
        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <FormRadioButton label={label} options={options} />
          <IconButton
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      );

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
        {formFields.map((val, idx) => (
          <RenderField
            fieldType={val.fieldType}
            label={val.label}
            options={val.options ? val.options : null}
            idx={idx}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default Form;
