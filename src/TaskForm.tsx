import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TaskForm() {

    return (
        <Form className="container mt-4 mb-4">
            <Form.Group className="mb-3">
                <Form.Label>Task</Form.Label>
                <Form.Control type="text" placeholder="Enter a new task" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            <Button type="submit">Add Task</Button>
            <Button className="ms-3" variant="secondary" type='reset'>Clear</Button>
        </Form>
    );
}

export default TaskForm;