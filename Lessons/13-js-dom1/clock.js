setInterval(printTime, 1000);

function printTime() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const time = `${h < 10 ? '0' + h : h} : ${m < 10 ? '0' + m : m} : ${s < 10 ? '0' + s : s}`;
    const text = document.createTextNode(time);
    const h1 = document.createElement('h1');
    h1.appendChild(text);
    // const root = document.getElementById('root');

    if (root.firstElementChild) {
        root.replaceChild(h1, root.firstElementChild);
    } else {
        root.appendChild(h1);
    }
}