import React from 'react';
import {RequiredMark} from '../index.style';

const parseLabel = (label: string): string => label.replace('*', '');

export const getLabelText = (label: string): React.ReactNode =>
  label.endsWith('*') ? (
    <>
      {parseLabel(label)}
      <RequiredMark>*</RequiredMark>
    </>
  ) : (
    label
  );
