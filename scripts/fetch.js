let searchImages = async (query) => {
    try {
        let res = await fetch(
          `https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=Pdq8Pa0ayPDAzFnFhZ-meE8ktEDLsoUahM-EUOTFG7o`
        );

        let data = await res.json();
        return data;

    } catch (err) {
        console.log('err: ', err);
    }
}

let append = (data, container) => {
    container.innerHTML = null;
    data.forEach(({alt_description, urls:{small}}) => {
        let div = document.createElement('div');
        let image = document.createElement('img');
        image.setAttribute('class', 'image')
        let h3 = document.createElement('h3');

        image.src = small;
        h3.innerText = alt_description;

        div.append(image, h3);
        container.append(div);
    })
}

export { searchImages, append };

