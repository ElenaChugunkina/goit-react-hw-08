

import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from "../ContactList/ContactList.module.css"
import { selectFilteredContacts } from '../../redux/contacts/selectors';

export default function ContactList() {

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.container}>
        {filteredContacts.map((contact) => 
        <li className={css.list} key={contact.id}> 
          <Contact data={contact} />
        </li> )}
    </ul>
    </div>
  );
}