import React from 'react'

type LabelProps = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

export default function FormLabel(props: LabelProps) {
  return (
    <label {...props} className='form__label' />
  )
}
