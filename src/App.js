// import "./App.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import contacts from "./Data/contacts.json";
import Container from "./component/Container";
import Form from "./component/Form";
import Filter from "./component/Filter/Filter.jsx";
import ContactsList from "./component/ContactsList/ContactsList";
import { GrContactInfo } from "react-icons/gr";

class App extends Component {
  state = {
    contacts: contacts,
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  formSubmitHandle = ({ name, number }) => {
    const { contacts } = this.state;
    const entry = {
      id: uuidv4(),
      name,
      number,
    };
    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in the contacts.`);
      return;
    }
    this.setState((prevState) => ({
      ...prevState,
      contacts: [entry, ...prevState.contacts],
    }));
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  DeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Container title="Phonebook">
        <Form onSubmit={this.formSubmitHandle} />
        <h2>
          <GrContactInfo /> Contacts
        </h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.DeleteContact}
        />
      </Container>
    );
  }
}

export default App;
