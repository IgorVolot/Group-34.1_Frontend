const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const Task = ({children}) => {
    const handleClickEdit = () => {
        alert(`Pressed edit button ${children}`);
    }
    const handleClickRemove = () => {
        alert(`Pressed edit button ${children}`);
    }
    return (
        <div className='box'>
            <div>{children}</div>
            <button onClick={handleClickEdit} className='btn light'>Edit</button>
            <button onClick={handleClickRemove} className='btn red'>Remove</button>
        </div>
    )
}

root.render(
    <div className='field'>
        <Task>Task 1</Task>
        <Task>Task 2</Task>
        <Task>Task 3</Task>
    </div>
)