

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from '../LoginForm/LoginForm.module.css';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(logIn(values))
        resetForm();
      }}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.field} />
          <ErrorMessage name="email" component="p" className={css.error} />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" className={css.field}/>
          <ErrorMessage name="password" component="p" className={css.error} />
        </label>
        <button type="submit" className={css.button}>Log In</button>
      </Form>
    </Formik>
    </>
  );
};