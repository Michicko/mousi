import React from "react";

type FormInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function FormInput(props: FormInputProps) {
  return <input {...props} />;
}
