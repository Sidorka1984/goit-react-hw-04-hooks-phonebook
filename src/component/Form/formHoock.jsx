import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { Input, TitleSecond, Button } from './Form.styles';
import { FiUser, FiPhoneCall } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default function Form({ onSubmit }) {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const nameInputId = uuidv4();
    const numberInputId = uuidv4();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name, number);
        reset();
    };
    const heandleChange = (e) => {
        const { name, value } = e.target

        switch (name) {
            case 'name':
                setName(value)
                break
            case 'number':
                setNumber(value)
                break
            default:
                return
        }
    }

    const reset = () => {
        setName('')
        setNumber('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <TitleSecond htmlFor={nameInputId}><FiUser /> Name</TitleSecond>
            <Input
                type="text"
                name="name"
                placeholder="Enter name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                value={name}
                onChange={heandleChange}
                id={nameInputId}
                required
            />
            <TitleSecond htmlFor={numberInputId}><FiPhoneCall /> Number</TitleSecond>
            <Input
                type="tel"
                name='number'
                placeholder='Enter number'
                onChange={heandleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                value={number}
                id={numberInputId}
                required
            />
            <Button
                type="submit"
                disabled={!name || !number}><AiOutlineUserAdd /> Add contact</Button>
        </form>

    )

}
Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}