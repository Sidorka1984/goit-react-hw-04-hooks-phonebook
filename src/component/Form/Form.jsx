import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid";
import { Input, TitleSecond, Button } from './Form.styles';
import { FiUser, FiPhoneCall } from 'react-icons/fi';
import { AiOutlineUserAdd } from 'react-icons/ai';


class Form extends Component {
    state = {
        name: '',
        number: '',
    }

    nameInputId = uuidv4();
    numberInputId = uuidv4();

    heandleChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: "",
            number: "",
        });
    };

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <TitleSecond htmlFor={this.nameInputId}><FiUser /> Name</TitleSecond>
                <Input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    value={name}
                    onChange={this.heandleChange}
                    id={this.nameInputId}
                    required                    
                />
                <TitleSecond htmlFor={this.numberInputId}><FiPhoneCall /> Number</TitleSecond>
                <Input
                    type="tel"
                    name='number'
                    placeholder='Enter number'
                    onChange={this.heandleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"                                       
                    value={number}
                    id={this.numberInputId}
                    required
                />
                <Button
                    type="submit"
                    disabled={!name || !number}><AiOutlineUserAdd /> Add contact</Button>

            </form>
        )
    }
}

export default Form;