import React, {InputHTMLAttributes} from 'react';
import {Field, FieldInputProps, FieldMetaProps} from 'formik';

import {Label, RequiredMark, Input, InputWrapper, ErrorMessage} from './index.style';

export const parseLabel = (label: string): string => label.replace('*', '');

const getLabelText = (label: string): React.ReactNode =>
  label.endsWith('*') ? (
    <>
      {parseLabel(label)}
      <RequiredMark>*</RequiredMark>
    </>
  ) : (
    label
  );

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  innerRef?: any;
}

interface FieldProps {
  field: FieldInputProps<any>;
  meta: FieldMetaProps<any>;
  form: { setFieldValue: Function };
}

export const TextInput = ({label, innerRef, name, ...props}: InputProps) =>
  <>
    <Label htmlFor={name}> {getLabelText(label)} </Label>
    <Input type="text" id={name} ref={innerRef} {...props}/>
  </>


const TextField = ({label, innerRef, name, ...props}: InputProps) =>
  <Field name={name}>
    {({field}: FieldProps) => (
      <InputWrapper direction="column">
        <TextInput {...field} label={label} type="text" id={name} {...props}/>
        <ErrorMessage name={name} component="span"/>
      </InputWrapper>
    )}
  </Field>

export default TextField;