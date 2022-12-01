const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    // console.log('search for:', term);
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
    // console.log(data);
    // console.log(data[0]);
    // console.log(data[0].name);
    // console.log(data[0].artist.name);

    document.querySelector('#tracks').innerHTML = "";
    if (data.length === 0) {
        document.querySelector('#tracks').innerHTML = "No results.";
        return;
    }

    for (i = 0; i < 5; i++) {
        const template = `
            <section class="track-item preview" onclick="playSong('${data[i].id}')">
                <img alt="The album cover for ${data[i].album.name}, by ${data[i].artist.name} click to play song." src="${data[i].album.image_url}">
                <i class="fas play-track fa-play" aria-hidden="true"></i>
                <div class="label">
                    <h2>${data[i].name}</h2>
                    <p>
                        ${data[i].artist.name}
                    </p>
                </div>
            </section>
        `;
        document.querySelector('#tracks').insertAdjacentHTML('beforeend', template);
    }
};

function playSong(id) {
    const iframe = `
        <iframe style="border-radius:12px" 
            src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"></iframe>
    `
    document.querySelector('#artist').innerHTML = iframe;
}

async function getAlbums (term) {
    const albumsEndpoint = baseURL + "?q=" + term + "&type=album";
    // console.log(albumsEndpoint);
    const data = await fetch(albumsEndpoint).then(response => response.json());
    // console.log(data);

    if (data.length === 0) {
        document.querySelector('#albums').innerHTML = "No results.";
        return;
    }

    document.querySelector('#albums').innerHTML = "";
    for (i = 0; i < 5; i++) {
        const template = `
        <section class="album-card" id="2lATw9ZAVp7ILQcOKPCPqp">
            <div>
                <img alt="The album cover for ${data[i].name}. click to access on spotify" src="${data[i].image_url}">
                <h2>${data[i].name}</h2>
                <div class="footer">
                    <a href="${data[i].spotify_url}" target="_blank">
                        view on spotify
                    </a>
                </div>
            </div>
        </section>
        `;
        document.querySelector('#albums').insertAdjacentHTML('beforeend', template);
    }
};

async function getArtist (term) {
    const artistEndpoint = baseURL + "?q=" + term + "&type=artist";
    // console.log(artistEndpoint);
    const data = await fetch(artistEndpoint).then(response => response.json());

    if (data.length === 0) {
        document.querySelector('#artist').innerHTML = "No results.";
        return;
    }

    const template = `
    <section class="artist-card" id="${data[0].id}">
        <div>
            <img alt="the profile picture of the artist/band ${data[0].name}"src="${data[0].image_url}" />
            <h2>${data[0].name}</h2>
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
    // console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}