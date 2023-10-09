import React from "react";
// import { IMyButtonProps } from "../../interfaces";
import { Button } from "react-bootstrap";
interface IMyButtonProps {
  onClick: any;
  disabled?: boolean;
  btnText: string;
  type: string;
}
const MyButton = (props: any) => {
  return (
    <div>
      {/* <Button variant={variant ?? "primary"}>{text}</Button> */}
      <button
        onClick={(e) => {
          props.onClick && props.onClick();
        }}
        disabled={props.disabled}
        type={props.type ? props.type : "button"}
      >
        <span className="d-inline-flex align-items-center">
          {props?.btnText}
        </span>
      </button>
    </div>
  );
};

export default MyButton;
