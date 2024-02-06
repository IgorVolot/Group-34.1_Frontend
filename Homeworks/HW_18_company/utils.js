
// function to create new fields to fill
function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}

// function to create a "Delete" button and assign its functionality
function createButtonDel(callBack) {
    const buttonDel = document.createElement('button');
    buttonDel.appendChild(document.createTextNode('Delete'));
    buttonDel.classList.add('del');
    buttonDel.onclick = ({target}) => {
        target.parentElement.remove();
        if(typeof callBack === 'function'){
            callBack();
        }
    }
    return buttonDel;
}