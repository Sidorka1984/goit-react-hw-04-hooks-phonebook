import PropTypes from 'prop-types';
import { Contact, ContactItem, BtnDelete, Text } from './ContactsList.styles';
import { AiOutlineDelete, AiOutlineUser } from 'react-icons/ai';

const ContactsList = ({ contacts, onDeleteContact }) => {
    return (
        <Contact>
            {contacts.map(({ id, name, number }) => (
                <ContactItem key={id}><AiOutlineUser /><Text>{name}:{number}</Text>
                    <BtnDelete onClick={() => onDeleteContact(id)}><AiOutlineDelete /></BtnDelete>
                </ContactItem>
            ))}
        </Contact>
    )
}
ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};
export default ContactsList;