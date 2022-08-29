let targets = document.getElementsByClassName('target');
let target = targets[0];

fetch('https://jsonplaceholder.typicode.com/users')

    .then((response) => {
        return response.json();
    })

    .then( users => {
            for (const user of users) {

                let div = document.createElement('div');
                div.classList.add('user');

                let title = document.createElement('h3');
                title.classList.add('user_info');
                title.innerText = user.id + '. ' + user.name;
                div.appendChild(title);

                let link = document.createElement('a');
                link.classList.add('user_details');
                link.innerText = 'Details';
                link.href = `user-details.html?id=${user.id}`;
                link.target = '_blank';
                div.appendChild(link);

                target.appendChild(div);
            }
        }
    );





