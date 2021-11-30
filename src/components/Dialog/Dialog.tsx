import React from 'react';

import {CancelButton, SuccessButton} from '../Buttons/Buttons';
import {ButtonsWrapper, Modal, Overlay} from './index.style';

interface DialogProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Dialog = ({message, onConfirm, onCancel}: DialogProps) => (
  <Overlay>
    <Modal justify="center">
      <p>{message}</p>
      <ButtonsWrapper justify="center">
        <CancelButton onClick={onCancel}>Cancel</CancelButton>
        <SuccessButton onClick={onConfirm}>Confirm</SuccessButton>
      </ButtonsWrapper>
    </Modal>
  </Overlay>
);

export default Dialog;
