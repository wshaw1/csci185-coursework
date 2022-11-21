const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    };
};

async function getTracks (term) {
    const tracksEndpoint = baseURL + "?q=" + term + "&type=track";
    console.log(tracksEndpoint);
    const data = await fetch(tracksEndpoint).then(response => response.json());
    console.log(data);
};

async function getAlbums (term) {
    const albumsEndpoint = baseURL + "?q=" + term + "&type=album";
    console.log(albumsEndpoint);
    const data = await fetch(albumsEndpoint).then(response => response.json());
    console.log(data);
};

async function getArtist (term) {
    const artistEndpoint = baseURL + "?q=" + term + "&type=artist";
    console.log(artistEndpoint);
    const data = await fetch(artistEndpoint).then(response => response.json());

    if (data.length === 0) {
        document.querySelector('#artist').innerHTML = "No results.";
        return;
    }

    const template = `
    <section class="artist-card" id="${data[0].id}">
        <div>
            <h2>${data[0].name}</h2>
            <img src="${data[0].image_url}" />
            <div class="footer">
                <a href="${data[0].spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>
    `
    document.querySelector('#artist').innerHTML = template;

};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}