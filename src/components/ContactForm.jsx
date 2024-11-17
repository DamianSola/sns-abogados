// components/ContactForm.tsx

// components/ContactForm.jsx
'use client'
import emailjs from 'emailjs-com';


import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        "service_hihf2jz",
        "template_tn3k20u",
        {
          name: formData.fullName, 
          email: formData.email,
          message: formData.message,
        }, "a_mj9GG3z_rUB1m7F"       // Reemplaza con tu Public Key
      );
      alert('Correo enviado con éxito: ' + result.text);
    } catch (error) {
      console.error('Error enviando el correo:', error);
      alert('Hubo un problema enviando el correo.');
    }
    setFormData({
      fullName: '',
      email: '',
      message: '',
    })
  };

 
  return (
    <div className="md:w-1/2 py-6 bg-[#434343] text-gray-100 ">
      <h2 className="text-2xl font-semibold mb-4">Contáctanos</h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium mb-1">Nombre Completo</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full px-2 py-2 mb-4 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Escribe tu nombre completo"
          required
        />

        <label className="block text-sm font-medium mb-1">Correo</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-2 py-2 mb-4 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Escribe tu correo"
          required
        />

        <label className="block text-sm font-medium mb-1">Consulta</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-2 py-2 mb-4 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Escribe tu consulta"
          required
        />

        <button
          type="submit"
          className="w-full bg-gray-200 text-[#434343] font-bold py-2 px-4 rounded-lg hover:bg-gray-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
