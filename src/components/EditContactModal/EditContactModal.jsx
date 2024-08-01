import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import css from './EditContactModal.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Required'),
  phone: Yup.string()
    .required('Required')
});

export default function EditContactModal({ open, handleClose, handleSave, initialValues }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={css.modalBox}>
        <h2 className={css.modalTitle}>Edit Contact</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSave}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={css.formGroup}>
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={touched.name && errors.name ? css.inputError : css.input}
                />
                {touched.name && errors.name ? (
                  <div className={css.error}>{errors.name}</div>
                ) : null}
              </div>
              <div className={css.formGroup}>
                <label htmlFor="phone">Phone</label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  className={touched.phone && errors.phone ? css.inputError : css.input}
                />
                {touched.phone && errors.phone ? (
                  <div className={css.error}>{errors.phone}</div>
                ) : null}
              </div>
              <div className={css.buttonContainer}>
                <button type="submit" className={css.saveBtn}>
                  Save
                </button>
                <button type="button" onClick={handleClose} className={css.cancelBtn}>
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}