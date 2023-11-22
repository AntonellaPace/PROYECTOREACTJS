import { useState } from "react";

const ContactForm = ({ onCreate }) => {
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onCreate ({name})
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button> Generar orden </button>
        </form>
    )
}

export default ContactForm

/* INTENTE HACER EL FORM CON MAS INPUT Y NO PUDE!
const ContactForm = ({ onCreate }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.handleSubmit()
        onCreate ({name, email, phone})
    }

    return (
        <form onSubmit={handleSubmit}> 
            <label htmlFor="nombre">Nombre:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text"/>
            
            <label htmlFor="email">Correo electrónico:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
            
            <label htmlFor="celular">Celular:</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number"/>
            <button type="submit"> Generar orden </button>
        </form>
    )
}

export default ContactForm*/