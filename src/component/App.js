import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./Container";
import Form from "./Form";
import Filter from "./Filter/Filter.jsx";
import ContactsList from "./ContactsList/ContactsList.jsx";
import { GrContactInfo } from "react-icons/gr";
import ContactsJson from "../Data/contacts.json";

export default function App() {
  const [contacts, setContacts] = useState([]);

  const [filter, setFilter] = useState("");
  const firstRender = useRef(true);

  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem("contacts")) ?? ContactsJson);
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      const parsedContacts = JSON.parse(localStorage.getItem("contacts"));

      if (parsedContacts) {
        setContacts(parsedContacts);
      }
      firstRender.current = false;
      return;
    }
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandle = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in the contacts.`);
      return;
    }
    setContacts((contacts) => [contact, ...contacts]);
  };
  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };
  return (
    <Container title="Phonebook">
      <Form onSubmit={formSubmitHandle} />
      <h2>
        <GrContactInfo /> Contacts
      </h2>
      <Filter value={filter} onChange={changeFilter} />
      {contacts.length > 0 && (
        <ContactsList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      )}
    </Container>
  );
}
