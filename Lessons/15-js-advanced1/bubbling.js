const clickHandler = function (e) {
    // console.log(this.id);  // the same as e.currentTarget.id
    // console.log(e.currentTarget.id);
    console.log(e.target.id);
}

div1.onclick = clickHandler;
div2.onclick = clickHandler;
div3.onclick = clickHandler;
document.body.onclick = () => console.log('body');
