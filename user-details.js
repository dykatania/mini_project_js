let url = new URL(location.href);
let id = url.searchParams.get('id');

let div = document.createElement('div');
div.classList.add('user_info');
document.body.appendChild(div);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
        return response.json();
    })

    .then( user => {

        for (const userKey in user) {
            if (typeof user[userKey] !== 'object') {
                let container = document.createElement('div');
                container.innerText = `${userKey}: ${user[userKey]}`;
                div.appendChild(container);
            } else {
                let items = user[userKey];
                for (const item in items) {
                    if (typeof items[item] !== 'object') {
                        let container = document.createElement('div');
                        container.innerText = `${item}: ${items[item]}`;
                        div.appendChild(container);
                    } else {
                        let details = items[item];
                        for (const detail in details) {
                            if (details[detail] !== 'object') {
                                let container = document.createElement('div');
                                container.innerText = `${detail}: ${details[detail]}`;
                                div.appendChild(container);
                            }
                        }
                    }
                }
            }
        }

        let userPosts = document.createElement('button');
        userPosts.classList.add('button-box');
        userPosts.innerText = 'Post of current user';
        userPosts.onclick = function () {

            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)

                .then((response) => {
                    return response.json();
                })

                .then(posts => {
                    let div = document.createElement('div');
                    div.classList.add('posts');

                    for (const post of posts) {

                        let box = document.createElement('div');
                        box.classList.add('post');

                        let title = document.createElement('h4');
                        title.classList.add('post_title');
                        title.innerText = post.id + '. ' + post.title;
                        box.appendChild(title);

                        let link = document.createElement('a');
                        link.classList.add('post_details');
                        link.innerText = 'Details';
                        link.href = `post-details.html?id=${id}&post=${post.id}`;
                        link.target = '_blank';
                        box.appendChild(link);

                        div.appendChild(box);

                        document.body.appendChild(div);
                    }
                });
        }
        document.body.appendChild(userPosts);
    });




