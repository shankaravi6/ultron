import React, { useState } from 'react';
import {
    FormColumn,
    FormWrapper,
    FormInput,
    FormSection,
    FormRow,
    FormLabel,
    FormInputRow,
    FormMessage,
    FormButton,
    FormTitle,
} from './ContactStyle';
import { Container } from '../../globalStyles';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const messageVariants = {
        hidden: { y: 30, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
    };

    const formData = [
        { label: 'Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
        { label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },
        { label: 'Msg', value: msg, onChange: (e) => setMsg(e.target.value), type: 'msg' },
    ];
    return (
        <FormSection>
            <Container>
                <FormRow>
                    <FormColumn small>
                        <FormTitle>Contact</FormTitle>
                        <FormWrapper >
                            {formData.map((el, index) => (
                                <FormInputRow key={index}>
                                    <FormLabel>{el.label}</FormLabel>
                                    <FormInput
                                        type={el.type}
                                        placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
                                        value={el.value}
                                        onChange={el.onChange}
                                    />
                                </FormInputRow>
                            ))}

                            <FormButton type="submit">Submit</FormButton>
                        </FormWrapper>
                        {error && (
                            <FormMessage
                                variants={messageVariants}
                                initial="hidden"
                                animate="animate"
                                error
                            >
                                {error}
                            </FormMessage>
                        )}
                        {success && (
                            <FormMessage
                                variants={messageVariants}
                                initial="hidden"
                                animate="animate"
                            >
                                {success}
                            </FormMessage>
                        )}
                    </FormColumn>
                </FormRow>
            </Container>
        </FormSection>
    );
};

export default Contact;
