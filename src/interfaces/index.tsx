export interface IMyInputFieldProps {
  type: string;
  value?: string;
  maxlength?: string;
  min?: string;
  max?: string;
  pattern?: string;
  placeholder?: string;
  required?: boolean;
  onChange?:()=>void;
}

export interface IMyButtonProps {
  onClick: any;
  disabled?: boolean;
  btnText: string;
  type:string
}

export interface ITodo {
  title: string;
  desc: string;
}