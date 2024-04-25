import 'bootstrap/dist/css/bootstrap.min.css' 
import TaskForm from './TaskForm'
import Task from './Task'
import { ListGroup } from 'react-bootstrap'


function App() {
  const tasks = [
    { task: 'Task 1', date: '2022-01-01' },
    { task: 'Task 2', date: '2022-01-02' },
    { task: 'Task 3', date: '2022-01-03' },
    { task: 'Task 4', date: '2022-01-04' },
    { task: 'Task 5', date: '2022-01-05' },
  ]

  return (
    <>
      <h1 className="text-center mt-4 mb-4 fw-bold">TO-DO APP</h1>

      <TaskForm />
      <hr className='container' />
      
      <ListGroup className='d-flex flex-column container gap-3'>
        <h3 className='fw-bold'>SET TASKS</h3>
        {tasks.map((task, index) => (
          <Task key={index} task={task.task} date={task.date} />
        ))}
      </ListGroup>
    </>
  )
}

export default App
