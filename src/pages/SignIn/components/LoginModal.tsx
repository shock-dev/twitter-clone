import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { Button, TextField } from '@material-ui/core';
import { useStylesSignIn } from '../index';
import ModalBlock from '../../../components/ModalBlock';

interface LoginModalProps {
  open: boolean
  handleCloseModal: () => void
  classes: ReturnType<typeof useStylesSignIn>
}

const LoginModal: React.FC<LoginModalProps> = ({
  open,
  handleCloseModal,
  classes
}: LoginModalProps): React.ReactElement => {
  return (
    <ModalBlock
      visible={open}
      onClose={handleCloseModal}
      classes={classes}
      title="Войти в аккаунт"
    >
      <FormControl
        className={classes.loginFormControl}
        component="fieldset"
        fullWidth
      >
        <FormGroup aria-label="position" row>
          <TextField
            className={classes.loginSideField}
            autoFocus
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
            className={classes.loginSideField}
            id="password"
            label="Пароль"
            InputLabelProps={{
              shrink: true
            }}
            variant="filled"
            type="password"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
          >
            Войти
          </Button>
        </FormGroup>
      </FormControl>
    </ModalBlock>
  );
};

export default LoginModal;
