import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Complexity} from "./utils/math";
import {Button, ButtonGroup, Form, Row} from "react-bootstrap";

export interface MathGenerationConfigProps {
    onSubmit: (formData: MathConfig) => void;
}

export interface MathConfig {
    count: number;
    complexity: Complexity;
}

const MathGenerationConfig: React.FC<MathGenerationConfigProps> = ({onSubmit}) => {
    const [formData, setFormData] = useState<MathConfig>({count: 8, complexity: Complexity.MEDIUM});

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(formData);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : parseFloat(target.value);
        const name = target.name;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(event.target.value) as Complexity;
        setFormData({
            ...formData,
            complexity: value
        });
    };

    return (
        <Row className="no-print">
            <Form onSubmit={handleSubmit} className="col-md-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Math Count</Form.Label>
                    <Form.Control type="number" name="count" placeholder="Count" value={formData.count}
                                  onChange={handleInputChange}/>
                    <Form.Text className="text-muted">
                        Choose how many maths to print
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Complexity</Form.Label>
                    <Form.Select aria-label="Default select example" value={formData.complexity}
                                 onChange={handleSelectChange}>
                        <option value={Complexity.VERY_EASY}>Very Easy</option>
                        <option value={Complexity.EASY}>Easy</option>
                        <option value={Complexity.MEDIUM}>Medium</option>
                        <option value={Complexity.HARD}>Hard</option>
                    </Form.Select>
                </Form.Group>
                <ButtonGroup>
                    <Button variant="dark" type="button" onClick={window.print}>
                        Print
                    </Button>
                    <Button variant="primary" type="submit">
                        Generate
                    </Button>
                </ButtonGroup>
            </Form>
        </Row>
    );
};

export default MathGenerationConfig;
