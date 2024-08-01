import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import css from './DeleteModal.module.css';

export default function DeleteModal({ open, handleClose, handleDelete }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={css.modalBox}>
        <h2 className={css.modalTitle}>You want to delete the contact! <br/> Are you sure?</h2>
        <div className={css.buttonContainer}>
          <button className={css.deleteBtn} onClick={handleDelete} color="primary">
            Delete
          </button>
          <button className={css.backBtn} onClick={handleClose} color="secondary">
            Cancel
          </button>
        </div>
      </Box>
    </Modal>
  );
}