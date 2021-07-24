import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.scss';
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="ContactList">
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}:<span> {number}</span>
            <button onClick={() => onDeleteContact(id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
export default ContactList;
