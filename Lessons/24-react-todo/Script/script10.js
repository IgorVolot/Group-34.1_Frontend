const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const Task = ({children}) => {

    const [isEdit, setIsEdit] = React.useState(false);
    const textId = React.useRef();
    const handleClickEdit = () => {
        setIsEdit(true);
    }
    const handleClickSave = () => {
        alert(textId.current.value);
        setIsEdit(false);
    }
    const handleClickRemove = () => {
        alert(`Pressed edit button ${children}`);
    }
    if (isEdit){
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
    const [tasks, setTasks] = React.useState([ 'Task 1','Task 2','Task 3']);

    const deleteTask = index => {
        const tasksCopy = [...tasks];
        tasksCopy.splice(index, 1);
        setTasks(tasksCopy);
    }

    const updateTask = (index, text) =>{
        const tasksCopy = [...tasks];
        tasksCopy[index] = text;
        setTasks(tasksCopy);
    }

    const addTask = () => {
        setTasks([...tasks, `New Task`]);
    }


    // const addTask = () => {
    //     const tasksCopy = [...tasks];
    //     tasksCopy.push(`Task ${tasksCopy.length + 1}`);
    //     setTasks(tasksCopy);
    // }

    return (
        <div className='field'>
            {tasks.map((task, index) => <Task key={index + 1}>{task}</Task>)}
        </div>
    )
}

root.render(
    <TaskList />
)