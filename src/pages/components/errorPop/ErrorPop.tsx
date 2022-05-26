import { Modal, Input, Row, Checkbox, Button, Text } from '@nextui-org/react';
import { NextPage } from 'next';
import { useState } from 'react';

const ErrorPop: NextPage = () => {
  return (
    <div>
      <Modal blur aria-labelledby='modal-title' open={true}>
        <Modal.Header>
          <Text id='modal-title' size={18}>
            Error Occured while
            <Text color='error' b size={18}>
              {' '}
              Loading{' '}
            </Text>
            the data
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text color='error' id='modal-title' size={18}>
            An error occured while loading the data. Please refresh the page to
            try again.
          </Text>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ErrorPop;
