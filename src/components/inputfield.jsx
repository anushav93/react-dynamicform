import React from "react";
import { Form } from 'react-bootstrap';

const InputTextField = ({ name, placeholder }) => (

    <Form.Group controlId="formFullName">
        <Form.Label>{placeholder}</Form.Label>
        <Form.Control type="text" name={name}/>
    </Form.Group>
);

export default InputTextField;