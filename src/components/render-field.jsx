import {
  FormCheckBox,
  FormRadioButton,
  FormSelect,
  FormTextArea,
  FormTextField,
} from "./form-components";

const RenderField = ({ fieldType, label, options, idx, error }) => {
  switch (fieldType) {
    case "textfield":
      return <FormTextField label={label} idx={idx} error={error} />;
    case "textarea":
      return <FormTextArea label={label} idx={idx} error={error} />;
    case "dropdown":
      return (
        <FormSelect label={label} idx={idx} options={options} error={error} />
      );
    case "checkbox":
      return <FormCheckBox label={label} idx={idx} error={error} />;
    case "radio-button":
      return (
        <FormRadioButton
          label={label}
          idx={idx}
          options={options}
          error={error}
        />
      );

    default:
      return null;
  }
};

export default RenderField;
