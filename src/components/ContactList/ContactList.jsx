import css from './ContactList.module.css';
import { getContacts } from 'store/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'store/slice';

export const ContactList = () => {
  const contactSel = useSelector(getContacts);
  const { contacts, filter } = contactSel;
  const dispatch = useDispatch();

  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <ul className={css.contactList}>
      {contacts &&
        visibleContacts.map(({ id, name, value }) => {
          return (
            <li key={id} className={css.contactItem}>
              {name}: {value}
              <button
                type="button"
                className={css.btn}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
