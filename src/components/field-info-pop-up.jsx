import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function FieldInfoPopUp({ open, handleClose, setFieldData, hasOptions }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          let data = { label: formJson.label, value: "" };
          if (hasOptions)
            data = { ...data, options: formJson.options.split(",") };
          setFieldData(data);
          handleClose();
        },
      }}
    >
      <DialogTitle>Field Information</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          name="label"
          label="Label"
          fullWidth
          variant="standard"
        />
        {hasOptions && (
          <TextField
            autoFocus
            required
            margin="dense"
            name="options"
            label="Options"
            helperText="Enter comma seperated options"
            fullWidth
            variant="standard"
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button type="submit">Add</Button>
      </DialogActions>
    </Dialog>
  );
}

export default FieldInfoPopUp;
