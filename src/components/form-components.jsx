import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFieldValue } from "../store/formSlice";

export const FormSelect = ({ label, options, idx, error }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch(updateFieldValue({ idx, value: event.target.value }));
  };
  return (
    <>
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
      {!!error ? (
        <div
          style={{
            color: "#d32f2f",
            fontSize: "0.75rem",
            margin: "3px 0px 0px",
          }}
        >
          {error}
        </div>
      ) : null}
    </>
  );
};

export const FormTextField = ({ label, idx, error }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    dispatch(updateFieldValue({ idx, value: e.target.value }));
  };

  return (
    <TextField
      label={label}
      value={text}
      onChange={handleChange}
      fullWidth
      variant="standard"
      error={!!error}
      helperText={!!error ? error : ""}
    />
  );
};

export const FormTextArea = ({ label, idx, error }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    dispatch(updateFieldValue({ idx, value: e.target.value }));
  };
  return (
    <TextField
      multiline
      fullWidth
      label={label}
      variant="standard"
      value={text}
      onChange={handleChange}
      error={!!error}
      helperText={!!error ? error : ""}
    />
  );
};

export const FormCheckBox = ({ label, idx, error }) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    dispatch(updateFieldValue({ idx, value: event.target.checked }));
  };

  return (
    <>
      <FormControlLabel
        label={label}
        control={<Checkbox checked={checked} onChange={handleChange} />}
      />
      {!!error ? (
        <div
          style={{
            color: "#d32f2f",
            fontSize: "0.75rem",
            margin: "3px 0px 0px",
          }}
        >
          {error}
        </div>
      ) : null}
    </>
  );
};

export const FormRadioButton = ({ label, options, idx, error }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch(updateFieldValue({ idx, value: event.target.value }));
  };

  return (
    <>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <RadioGroup row value={value} onChange={handleChange}>
          {options.map((val) => (
            <FormControlLabel value={val} control={<Radio />} label={val} />
          ))}
        </RadioGroup>
      </FormControl>
      {!!error ? (
        <div
          style={{
            color: "#d32f2f",
            fontSize: "0.75rem",
            margin: "3px 0px 0px",
          }}
        >
          {error}
        </div>
      ) : null}
    </>
  );
};
