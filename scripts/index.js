// https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=A9s02-z7h7k8S1h6b-JqhR21T7LSVzlpS6HDw3LQcPs

import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let search = (e) => {
    if (e.key === "Enter") {
        let query = document.querySelector('#query').value;
        searchImages(query).then((data) => {
            console.log(data);
            append(data.results, document.querySelector('#container'));
        })
    }
};

import { searchImages, append } from "./fetch.js";

document.querySelector('#query').addEventListener('keydown', search);


let categories = document.querySelector('#categories').children;

function cSearch() {
    console.log(this.id);
    searchImages(this.id).then((data) => {
        console.log(data);
        append(data.results, document.querySelector('#container'));
    })
}

for (let el of categories) {
    el.addEventListener('click', cSearch);
}

console.log(categories);

let sort = async () => {
    let sortData = document.querySelector('#sort').value;
    let query = document.querySelector('#query').value;
    try {
        let res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=A9s02-z7h7k8S1h6b-JqhR21T7LSVzlpS6HDw3LQcPs&order_by=${sortData}`);
        console.log(res);
        let data = await res.json();
        console.log(data);
        console.log(data.results);
        append(data.results, document.querySelector('#container'));
    } catch(err) {
        console.log('err: ', err);
    }
}

let filter = async () => {
    let filterData = document.querySelector('#filter').value;
    let query = document.querySelector('#query').value;
    try {
        let res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=A9s02-z7h7k8S1h6b-JqhR21T7LSVzlpS6HDw3LQcPs&order_by=${filterData}`);
        let data = await res.json();
        console.log(data.results);
        append(data.results, document.querySelector('#container'));
    } catch (err) {
        console.log('err: ', err);
    }
}

document.querySelector('#sort').addEventListener('change', sort);


document.querySelector('#filter').addEventListener('change', filter);
