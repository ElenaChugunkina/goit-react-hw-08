
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { MdPerson } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = async () => {
        try {
            await dispatch(deleteContact(contact.id));
        } catch (error) {
            console.error('Failed to delete contact', error);
        }
    };

    return (
        <div className={css.container}>
            <div>
                <p>
                    <MdPerson /> {contact.name}
                </p>
                <p>
                    <FaPhoneAlt /> {contact.number}
                </p>
            </div>
            <button className={css.btn} onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
};

export default Contact;
