

interface Task {
    task: string
    date: string
}

function Tasks({ task, date }: Task) {
    return (
        <li className='task'>
            <p className="mb-0">{task}</p>
            <p className="mb-0">{date}</p>
        </li>
    )
}

export default Tasks