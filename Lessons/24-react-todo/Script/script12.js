const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const Task = ({children, editTask, removeTask, index}) => {

    const [isEdit, setIsEdit] = React.useState(false);
    const textId = React.useRef();
    const handleClickEdit = () => {
        setIsEdit(true);
    }
    const handleClickSave = () => {
        editTask(index, textId.current.value);
        setIsEdit(false);
    }
    const handleClickRemove = () => {
        removeTask(index);
    }
    if (isEdit) {
        return (
            <div className='box'>
                <textarea ref={textId} defaultValue={children}></textarea>
                <button onClick={handleClickSave} className='btn success'>Save</button>
            </div>
        )
    } else {
        return (
            <div className='box'>
                <div>{children}</div>
                <button onClick={handleClickEdit} className='btn light'>Edit</button>
                <button onClick={handleClickRemove} className='btn red'>Remove</button>
            </div>
        )
    }
}

const TaskList = () => {
    const [tasks, setTasks] = React.useState([]);

    const deleteTask = index => {
        const tasksCopy = [...tasks];
        tasksCopy.splice(index, 1);
        setTasks(tasksCopy);
    }

    const updateTask = (index, text) => {
        const tasksCopy = [...tasks];
        tasksCopy[index] = text;
        setTasks(tasksCopy);
    }

    const addTask = () => {
        setTasks([...tasks, `New Task`]);
    }

    return (
        <div className='field'>
            <button onClick={addTask} className='btn new'>Add Task</button>
            {tasks.map((task, index) => <Task editTask={updateTask} removeTask={deleteTask} index={index}
                                              key={index + 1}>{task}</Task>)}
        </div>
    )
}

root.render(
    <TaskList/>
)
