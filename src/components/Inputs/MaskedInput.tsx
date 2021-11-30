import React from 'react';
import {Field, FieldInputProps, FieldMetaProps} from 'formik';
import Input from 'react-text-mask';

import {TextInput} from './TextInput';
import {ErrorMessage, InputWrapper} from './index.style';

interface Props {
  name: string;
  placeholder?: string;
  label: string;
  mask: (RegExp | string)[];
}

interface FieldProps {
  field: FieldInputProps<any>;
  meta: FieldMetaProps<any>;
  form: { setFieldValue: Function };
}

const MaskedInput = ({name, label, mask, placeholder = ''}: Props) => (
  <Field name={name}>
    {({field}: FieldProps) => (
      <InputWrapper>
        <Input
          {...field}
          keepCharPositions
          guide={false}
          mask={mask}
          placeholder={placeholder}
          render={(ref, props) => (
            <TextInput name={name} label={label} innerRef={ref} {...props} />
          )}
        />
        <ErrorMessage name={name} component="span"/>
      </InputWrapper>
    )}
  </Field>
);

export default MaskedInput;
