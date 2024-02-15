const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const Group = () => {
    const subTitle = 'ait-tr program';
    return (
        <div>
            <h1>Cohort 34.1</h1>
            <h2>{subTitle} - {Math.round(Math.random() *10)}</h2>
        </div>
    )
}
root.render(
    <div>
        <Group />
        <Group />
        <Group />
    </div>
);