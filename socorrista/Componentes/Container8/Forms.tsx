import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  background: #5DC2C8;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #5DC2C8;
  color: #fff;
  cursor: pointer;
  &:hover {
    width: 50%;

  }
`;

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormContainer>
     <h1>Faça seu orçamento </h1>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Empresa:</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">E-mail:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Mensagem:</Label>
          <Input
            as="textarea"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={2}
            required
          />
        </FormGroup>
        <Button type="submit">Enviar</Button>
      </form>
    </FormContainer>
  );
};

export default Form;
