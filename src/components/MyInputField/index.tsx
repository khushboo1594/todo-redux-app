// import React, { ChangeEvent } from "react";
// import { IMyInputFieldProps } from "../../interfaces";

// const MyInputField = (props: IMyInputFieldProps) => {
//   const { type, value, maxlength, min, max, pattern, placeholder, required,onChange } =
//     props;

//   return (
//     <div>
//       <input
//         type={type}
//         className="form-control"
//         id="exampleInputEmail1"
//         aria-describedby="emailHelp"
//         placeholder={placeholder}
//         value={value}
//       />
//     </div>
//   );
// };

// export default MyInputField;

import React from "react";
import { Form } from "react-bootstrap";

interface IMyInputFieldProps {
  label: string;
  className?: string;
  required?: boolean;
  hasAddon?: boolean;
  requiredField?: boolean;
  type: string;
  name?: string;
  id?: string;
  placeholder?: string;
  setValue: any;
  value: string;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  pattern?: string;
  errorMsg?: string;
  errorText?: string;
  focused?: any;
}
const MyInputField = (props: IMyInputFieldProps) => {
  return (
    <Form.Group>
      <Form.Label>{props?.label}</Form.Label>
      <Form.Control
        required={props.requiredField}
        type={props.type}
        className="form-control"
        autoComplete="off"
        autoFocus={props.focused}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => {
          props.setValue(e.target.value);
        }}
        minLength={props.minLength}
        maxLength={props.maxLength}
        disabled={props.disabled && props.disabled}
        pattern={props.pattern}
      />
    </Form.Group>
  );
};

export default MyInputField;
