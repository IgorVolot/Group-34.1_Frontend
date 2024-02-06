function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}

function createButtonDel(callBack) {
    const buttonDel = document.createElement('button');
    buttonDel.appendChild(document.createTextNode('X'));
    buttonDel.classList.add('del');
    buttonDel.onclick = ({target}) => {
        target.parentElement.remove();
        if(typeof callBack === 'function'){
            callBack();
        }
    }
    return buttonDel;
}