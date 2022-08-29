let url = new URL(location.href);
// let id = url.searchParams.get('id');
let post = +url.searchParams.get('post');

let div = document.createElement('div');
div.classList.add('post_info');
document.body.appendChild(div);

fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)

    .then((response) => {
        return response.json();
    })

    .then(post => {
        for (const postKey in post) {
            if (typeof post[postKey] !== 'object') {
                let container = document.createElement('p');
                container.innerText = `${postKey}: ${post[postKey]}`;
                div.appendChild(container);
            } else {
                let items = post[postKey];
                for (const item in items) {
                    if (typeof items[item] !== 'object') {
                        let container = document.createElement('p');
                        container.innerText = `${item}: ${items[item]}`;
                        div.appendChild(container);
                    }
                }
            }
        }
    });

let box = document.createElement('div');
box.classList.add('comments_info');
document.body.appendChild(box);

fetch(`https://jsonplaceholder.typicode.com/posts/${post}/comments`)

    .then((response) => {
        return response.json();
    })

    .then(comments => {

        for (const comment in comments) {

            let com = document.createElement('div');
            com.classList.add('comment');
            box.appendChild(com);

            if (typeof comments[comment] !== 'object') {
                let container = document.createElement('p');
                container.classList.add('container');
                container.innerText = `${comment}: ${comments[comment]}`;
                com.appendChild(container);
            } else {
                let items = comments[comment];
                for (const item in items) {
                    if (typeof items[item] !== 'object') {
                        let container = document.createElement('p');
                        container.classList.add('container');
                        container.innerText = `${item}: ${items[item]}`;
                        com.appendChild(container);
                    }
                }
            }
        }
    });
