/**
 * This variable represents the container or root element, obtained using the
 * 'getElementById' function available in the 'document' object. It is commonly
 * used in web development to manipulate or access the root element of a web page.
 *
 * @type {HTMLElement}
 * @readonly
 */
const container = document.getElementById('root');
/**
 * A reference to the root element created using `ReactDOM.createRoot`.
 * @type {ReactDOMRoot}
 */
const root = ReactDOM.createRoot(container);

/**
 * Represents a Task component.
 * @param {Object} props - The properties of the task component.
 * @param {string} props.children - The content of the task.
 * @param {function} props.editTask - A function to edit the task.
 * @param {function} props.removeTask - A function to remove the task.
 * @param {number} props.index - The index of the task.
 * @returns {JSX.Element} - The JSX element representing the task component.
 */
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

/**
 * TaskList represents a component that allows users to manage a list of tasks.
 *
 * @return {JSX.Element} The rendered TaskList component.
 */
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
