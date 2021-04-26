import React, { useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { Button, TextField } from '@material-ui/core';
import { useStylesSignIn } from '../index';
import ModalBlock from '../../../components/ModalBlock';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '../../../store/ducks/user/actions';
import { selectUserIsLoading, selectUserIsSuccess } from '../../../store/ducks/user/selectors';

export interface LoginFormProps {
  email: string
  password: string
}

const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Неверная почта').required('Введите email'),
  password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required('Введите пароль')
});

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
  const dispatch = useDispatch();
  const isLoading = useSelector(selectUserIsLoading);
  const isSuccess = useSelector(selectUserIsSuccess);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormProps>({
    resolver: yupResolver(LoginFormSchema)
  });

  const onSubmit = (formData: LoginFormProps) => {
    dispatch(fetchLogin(formData));
  };

  useEffect(() => {
    if (isSuccess) {
      handleCloseModal();
    }
  }, [isSuccess]);

  return (
    <ModalBlock
      visible={open}
      onClose={handleCloseModal}
      classes={classes}
      title="Войти в аккаунт"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
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
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isLoading}
              fullWidth
            >
              Войти
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </ModalBlock>
  );
};

export default LoginModal;
