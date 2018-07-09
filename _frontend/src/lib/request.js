export default function request (url, page) {
    return fetch(`http://localhost:3001/api/post?page=${page}`)
    .then(res => {
        return res.json();
    })
    .catch(err => console.log(err));
}
}
