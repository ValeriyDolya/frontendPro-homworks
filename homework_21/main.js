const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xhr.responseType = 'json';
xhr.onload = () => {
    if (xhr.status >= 400) {
        console.error(xhr.response)
    } else {
        console.log(xhr.response)
    }  
}

xhr.onerror = () => {
    console.log(xhr.response);
}

xhr.send();








const json = {
    title: 'foo',
    body: 'bar',
    userId: 1,
};

xhr.open("post", 'https://jsonplaceholder.typicode.com/posts');
xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
xhr.onload = () => console.log(xhr.status === 201 ? xhr.response : xhr.status);

xhr.send(JSON.stringify(json));