import React from 'react';
import {Select as StyledSelect, Label} from './index.style';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

export const Select = ({label, name, value, onChange, options}: SelectProps) =>
  <>
    <Label htmlFor={name}>{label}</Label>
    <StyledSelect name={name} value={value} onChange={onChange} required>
      <option value="" disabled style={{display:'none'}}>Select...</option>
      <option value="">Not selected</option>
      {options.map(({value, label}) => <option key={value} value={value}>{label}</option>)}
    </StyledSelect>
  </>

export default Select;