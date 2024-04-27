import { Button, ButtonGroup, Form, InputGroup } from 'react-bootstrap';
import { useState } from 'react';

// TaskProps is a TypeScript interface for the Task component
type TaskProps = {
    id: number;
    task: string;
    date: string;
    editTask: (newTask: { id: number, task: string, date: string }) => void;
    deleteTask: () => void;
  };

const Task: React.FC<TaskProps> = ({ id, task, date, editTask, deleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(task);
    const [newDate, setNewDate] = useState(date);

    // Handles editing a task
    const handleEdit = (event: React.FormEvent) => {
        event.preventDefault();
        editTask({ id, task: newTask, date: newDate });
        setIsEditing(false);
    };

    // Returns the color of the due date based on the difference between the due date and the current date
    const getDueColor = (dueDate: string) => {
        const now = new Date();
        const due = new Date(dueDate);
        const diff = Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      
        if (diff > 1) {
          return '#399c39';
        } else if (diff === 1) {
          return '#ff9900';
        } else if (diff === 0){
          return '#FF4400';
        }
    };

    // Returns the text of the due date based on the difference between the due date and the current date
    const getDueDateText = (dueDate: string) => {
        const now = new Date();
        now.setHours(0, 0, 0, 0); // set to start of day
        const due = new Date(dueDate);
        const diff = Math.ceil((due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      
        if (diff === 1) {
          return 'Today';
        } else if (diff === 2) {
          return 'Tomorrow';
        } else {
          return dueDate;
        }
    };

    return (
        <div className='task mb-2'>
            {isEditing ? (
            <Form className='d-flex justify-content-between gap-2 flex-wrap' onSubmit={handleEdit}>
                <span className='input_group d-flex gap-2'>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1"><strong>Date:</strong></InputGroup.Text>
                        <Form.Control type='date' value={newDate} onChange={(e) => setNewDate(e.target.value)} />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1"><strong>Task:</strong></InputGroup.Text>
                        <Form.Control value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                    </InputGroup>
                </span>   
                <ButtonGroup>
                    <Button variant='primary' type="submit">Save</Button>
                    <Button variant='secondary' onClick={() => setIsEditing(false)}>Cancel</Button>
                </ButtonGroup>    
            </Form>
            ) : (
            <>
                <div className='input_group d-flex gap-2'>
                    <p className='mb-0' style={{ color: getDueColor(date) }}><strong>Due:</strong> {getDueDateText(date)}</p>
                    <p className='mb-0'><strong>Task:</strong> {task}</p>
                </div>
                <ButtonGroup>
                    <Button variant='primary' onClick={() => setIsEditing(true)}>Edit</Button>
                    <Button variant='danger' onClick={deleteTask}>Delete</Button>
                </ButtonGroup>
            </>
            )}
        </div>
    );
}

export default Task;