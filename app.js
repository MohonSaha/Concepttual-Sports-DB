const allPlayers = () =>{
    // console.log("coool");
    const searchValue = document.getElementById("search-box");
    const searchText = searchValue.value;
    searchValue.value = '';
    // console.log(searchText);

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data =>  showPlayerDetails(data.player));
}

const showPlayerDetails = players => {
    const parent = document.getElementById("player-container");
    parent.textContent = '';
    players.forEach(player => {
        // console.log(player);
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
                <div class="card p-1 m-4 " style="width: 18rem;">
                <img src="${player.strThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h2 class=" ">Name:${player.strPlayer}</h2>
                <h5>Country: ${player.strNationality} </h5>
                <p class="card-text">  </p>
                <div class="all-button">
                    <button class="btn btn-danger">Delete </button>
                    <button onClick="details('${player.idPlayer}')" class="btn btn-success">Details </button>
                </div>
                </div>
            </div>
        `
        parent.appendChild(div);
    });
 
}


const details = (id) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}