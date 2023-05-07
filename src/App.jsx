import React, {useState, useEffect} from "react";

const initial = {
    name: "",
    username: "",
    phone: "",
}

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newContact, setNewContact] = useState(initial);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setContacts(data))
            .catch((error) => console.log(error));
    }, []);

    const handleDeleteContact = index => {
        setContacts((prevContacts) => {
                prevContacts.splice(index, 1)
                return [...prevContacts];
            }
        );
    };

    const handleShowForm = () => {
        setShowForm(true);
    };

    const handleHideForm = () => {
        setShowForm(false);
        setNewContact(initial);
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setNewContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };

    const handleSaveContact = (event) => {
        event.preventDefault();
        setContacts((prevContacts) => [...prevContacts, newContact]);
        handleHideForm();
    };
    return (
        <div>
            <h1>Contacts</h1>
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact, index) => (
                    <tr key={index}>
                        <td>{contact.name}</td>
                        <td>{contact.username}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button onClick={() => handleDeleteContact(index)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {!showForm && (
                <button onClick={handleShowForm}>Add new contact</button>
            )}
            {showForm && (
                <form onSubmit={handleSaveContact}>
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="name"
                            value={newContact.name}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="username"
                            value={newContact.username}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Phone:
                        <input
                            type="text"
                            name="phone"
                            value={newContact.phone}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleHideForm}>
                        Cancel
                    </button>
                </form>
            )}
        </div>
    );
}

export default Contacts;