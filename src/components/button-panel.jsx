import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BUTTON_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addFormData } from "../store/formSlice";
import FieldInfoPopUp from "./field-info-pop-up";

function ButtonPanel() {
  const [open, setOpen] = useState(false);
  const [hasOptions, setHasOptions] = useState(false);
  const [fieldType, setFieldType] = useState();
  const [fielddata, setFieldData] = useState(null);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setHasOptions(false);
    setOpen(false);
  };

  const handleButtonClick = (field_type) => {
    if (field_type === "dropdown" || field_type === "radio-button")
      setHasOptions(true);
    setFieldType(field_type);
    handleClickOpen();
  };

  useEffect(() => {
    if (!!fielddata) dispatch(addFormData({ ...fielddata, fieldType }));
    setHasOptions(false);
  }, [fielddata]);

  return (
    <Grid item xs={2}>
      <FieldInfoPopUp
        open={open}
        handleClose={handleClose}
        setFieldData={setFieldData}
        hasOptions={hasOptions}
      />
      {BUTTON_OPTIONS.map((val) => (
        <Button onClick={() => handleButtonClick(val.value)}>
          {val.label}
        </Button>
      ))}
    </Grid>
  );
}

export default ButtonPanel;
