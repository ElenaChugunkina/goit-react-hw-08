

import css from "../ContactForm/ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contacts/operations";

export default function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: ''
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContacts(values));
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Valid phone number: XXX-XX-XX")
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.container}>
        <div className={css.style}>
          <label className={css.label} htmlFor="name">Name</label>
          <Field className={css.field} type="text" name="name" id="name" />
          <ErrorMessage className={css.error} name="name" component="p" />
        </div>

        <div className={css.style}>
          <label className={css.label} htmlFor="number">Number</label>
          <Field className={css.field} type="tel" name="number" id="number" />
          <ErrorMessage className={css.error} name="number" component="p" />
        </div>

        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}