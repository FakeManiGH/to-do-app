import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import React, { useState } from 'react';

// TaskFormProps is a TypeScript interface for the TaskForm component
type TaskFormProps = {
    addTask: (id: number, task: string, date: string) => void;
};

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {

    // Generates a random ID for the task (not a secure way to generate IDs)
    const generateId = (): number => {
        return Math.floor(Math.random() * 10000);
    };
    const [task, setTask] = useState('');   // task is a string
    const [date, setDate] = useState('');   // date is a string

    // Handles the submission of the form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const id = generateId();
        addTask(id, task, date);
        setTask('');
        setDate('');
    };

    return (
        <Form onSubmit={handleSubmit} className="container mt-4 mb-4">
            <Form.Group className="mb-3">
                <Form.Label><strong>New Task</strong></Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter a new task" 
                    value={task} 
                    onChange={e => setTask(e.target.value)} 
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label><strong>Date</strong></Form.Label>
                <Form.Control 
                    type="date"
                    value={date} 
                    onChange={e => setDate(e.target.value)} 
                    required
                />
            </Form.Group>
            <ButtonGroup>
                <Button variant='success' type="submit"><strong>Add Task</strong></Button>
                <Button variant="secondary" type='reset'><strong>Clear</strong></Button>
            </ButtonGroup>
        </Form>
    );
}

export default TaskForm;