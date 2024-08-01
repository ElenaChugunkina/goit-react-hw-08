

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from '../RegisterForm/RegisterForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(register(values))
          .then(() => {
            console.log('Registration success');
          })
          .catch((error) => {
            console.error('Registration error', error);
          });

        resetForm();
      }}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.input} />
          <ErrorMessage name="email" component="div" className={css.error} />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" className={css.input} />
          <ErrorMessage name="password" component="div" className={css.error} />
        </label>
        <button type="submit" className={css.button}>Register</button>
      </Form>
    </Formik>
  );
};