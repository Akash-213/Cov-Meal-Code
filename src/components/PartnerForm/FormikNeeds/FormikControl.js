import React from 'react'


import Input from './Input'
import CheckboxGroup from './CheckboxGroup'
import Select from './Select'
import Textarea from './Textarea'


function FormikControl(props) {
  const { control, ...rest } = props

  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'checkbox':
      return <CheckboxGroup {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'textarea':
      return <Textarea {...rest} />

    default:
      return null
  }
}

export default FormikControl
