import React, { useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { Button, TextField } from '@material-ui/core';
import { useStylesSignIn } from '../index';
import ModalBlock from '../../../components/ModalBlock';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister } from '../../../store/ducks/user/actions';
import { selectUserIsLoading, selectUserIsSuccess } from '../../../store/ducks/user/selectors';

export interface RegisterFormProps {
  fullname: string;
  username: string;
  email: string;
  password: string;
  password_confirm: string;
}

const RegisterFormSchema = yup.object().shape({
  fullname: yup.string().required('Введите своё имя'),
  email: yup.string().email('Неверная почта').required('Введите почту'),
  username: yup.string().required('Введите логин'),
  password: yup.string().min(6, 'Минимальная длина пароля 6 символов').required('Введите пароль'),
  password_confirm: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Подтвердите пароль')
});

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
  const dispatch = useDispatch();
  const isLoading = useSelector(selectUserIsLoading);
  const isSuccess = useSelector(selectUserIsSuccess);
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormProps>({
    resolver: yupResolver(RegisterFormSchema)
  });

  const onSubmit = (formData: RegisterFormProps) => {
    dispatch(fetchRegister(formData));
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
      title="Создайте учетную запись">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          className={classes.loginFormControl}
          component="fieldset"
          fullWidth
        >
          <FormGroup aria-label="position" row>
            <TextField
              className={classes.registerField}
              id="name"
              label="Имя"
              autoFocus
              InputLabelProps={{
                shrink: true
              }}
              variant="filled"
              type="name"
              fullWidth
              {...register('fullname')}
              error={!!errors.fullname}
              helperText={errors.fullname?.message}
            />
            <TextField
              className={classes.registerField}
              id="username"
              label="Username"
              InputLabelProps={{
                shrink: true
              }}
              variant="filled"
              type="text"
              fullWidth
              {...register('username')}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              className={classes.registerField}
              id="email"
              label="Email"
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
              className={classes.registerField}
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
            <TextField
              className={classes.registerField}
              id="password_confirm"
              label="Подтвердите пароль"
              InputLabelProps={{
                shrink: true
              }}
              variant="filled"
              type="password"
              fullWidth
              {...register('password_confirm')}
              error={!!errors.password_confirm}
              helperText={errors.password_confirm?.message}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isLoading}
              fullWidth
            >
              Зарегестрироваться
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </ModalBlock>
  );
};

export default RegisterModal;
