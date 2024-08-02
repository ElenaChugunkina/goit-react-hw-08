

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import ContactList from '../../components/ContactList/ContactList'
import ContactForm from '../../components/ContactForm/ContactForm';
import { fetchAll } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/contacts/selectors';

import css from '../ContactsPage/ContactsPage.module.css';
import { PropagateLoader } from 'react-spinners'

export default function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <ContactForm />
      {isLoading ? <div className={css.loader}><PropagateLoader color="#2501ff" size={25} speedMultiplier={2}/></div> : <ContactList />}
     </>
  );
}