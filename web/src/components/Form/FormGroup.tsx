import React from "react";


type FormGroupProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function FormGroup(props: FormGroupProps) {
  return <div {...props} />
}
