import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { Button, TextField } from '@material-ui/core';
import { useStylesSignIn } from '../index';
import ModalBlock from '../../../components/ModalBlock';

interface RegisterModalProps {
  open: boolean
  handleCloseModal: () => void
  classes: ReturnType<typeof useStylesSignIn>
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  open,
  handleCloseModal,
  classes
}: RegisterModalProps): React.ReactElement => {
  return (
    <ModalBlock
      visible={open}
      onClose={handleCloseModal}
      classes={classes}
      title="Создайте учетную запись">
      <FormControl
        className={classes.loginFormControl}
        component="fieldset"
        fullWidth
      >
        <FormGroup aria-label="position" row>
          <TextField
            className={classes.registerField}
            autoFocus
            id="name"
            label="Имя"
            InputLabelProps={{
              shrink: true
            }}
            variant="filled"
            type="name"
            fullWidth
          />
          <TextField
            className={classes.registerField}
            id="email"
            label="E-Mail"
            InputLabelProps={{
              shrink: true
            }}
            variant="filled"
            type="email"
            fullWidth
          />
          <TextField
            className={classes.registerField}
            id="password"
            label="Пароль"
            InputLabelProps={{
              shrink: true
            }}
            variant="filled"
            type="password"
            fullWidth
          />
          <Button variant="contained" color="primary" fullWidth>
            Далее
          </Button>
        </FormGroup>
      </FormControl>
    </ModalBlock>
  );
};

export default RegisterModal;
