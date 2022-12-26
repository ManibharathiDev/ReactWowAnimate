import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";

const FormComponent = () => {
    const [validated,setValidated] = useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if(form.checkValidity() === false)
        {
            event.preventDefault();
            event.stopPropogation();
        }
        setValidated(true)
    }

    return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your User Name" required/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    )
}
export default FormComponent;