getPost.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`)
        .then(response => {
            if (response.ok) {
                // console.log(response);
                // console.log(response.status);
                // console.log(response.headers.get('Content-Type'));
                return response.json();
            } else {
                throw new Error(postId.value);
            }
        })
        .then(body => {
            const h1 = document.createElement('h1');
            h1.append(`ID: ${body.id}, Title: ${body.title}`);
            document.body.append(h1);
        })
        .catch(e => {
            const h1 = document.createElement('h1');
            h1.append(`Post with id = ${e.message}, doesn't exist`);
            document.body.append(h1);
        })
}

console.log('Hello Cochort 34.1');