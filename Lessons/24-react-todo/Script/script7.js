const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const Task = ({children}) => {

    const [isEdit, setIsEdit] = React.useState(false);
    const handleClickEdit = () => {
        setIsEdit(true);
    }
    const handleClickSave = () => {
        setIsEdit(false);
    }
    const handleClickRemove = () => {
        alert(`Pressed edit button ${children}`);
    }
    if (isEdit){
        return (
            <div className='box'>
                <textarea defaultValue={children}></textarea>
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

root.render(
    <div className='field'>
        <Task>Task 1</Task>
        <Task>Task 2</Task>
        <Task>Task 3</Task>
    </div>
)