const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function CheckBox() {
    const [isChecked, setIsChecked] = React.useState(false);
    const handleChangeCheckBox = () => {
        setIsChecked(!isChecked);
    }
    return(
        <div>
            <input
                onChange={handleChangeCheckBox}
                type='checkbox' defaultChecked={isChecked}
            />
            <p>{isChecked ? 'checked' : 'unchecked'}</p>
        </div>
    )
}

root.render(<CheckBox />);