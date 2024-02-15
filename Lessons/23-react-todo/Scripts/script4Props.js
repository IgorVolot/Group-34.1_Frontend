const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const Student = ({name, age}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h2>age: {age}</h2>
        </div>
    )
}
root.render(
    <div>
        <Student name='John' age='27'/>
        <Student name='Peter' age='31'/>
        <Student name='Mary'/>
    </div>
)