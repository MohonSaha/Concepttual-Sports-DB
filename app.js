

const allPlayers = () =>{
    // console.log("coool");
    const searchValue = document.getElementById("search-box");
    document.getElementById("spinner").style.display = "block";
    const searchText = searchValue.value;
    searchValue.value = '';
    // console.log(searchText);

    //===================== LOAD DATA ========================
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data =>  showPlayerDetails(data.player));
}

    //======================= DISPLAY DATA =======================
const showPlayerDetails = players => {
    const parent = document.getElementById("player-container");
    parent.textContent = '';

    if(players){
        document.getElementById("spinner").style.display = "none";
    }
    else{
        document.getElementById("spinner").style.display = "block";
        parent.textContent = '';
    }

    
    // document.getElementById("spinner").style.display = "block";
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
    .then(data => setDetails(data.players[0]));
}

const setDetails = info =>{
    console.log(info);

    if(info.strGender == "Male"){
        document.getElementById("male").style.display ="block";
        document.getElementById("female").style.display ="none";
    }
    else{
        document.getElementById("male").style.display ="none";
        document.getElementById("female").style.display ="block";
    }

    const displayDetails= document.getElementById("details-container");
    displayDetails.textContent ='';
    const div = document.createElement("div")
    div.innerHTML = `
                <img class="w-50 mt-3" src="${info.strThumb}" alt="">
                <h3 class="text-info">Name: ${info.strPlayer}</h3>
                <h3>Height: ${info.strHeight}</h3>
                <h4>Bath: ${info.strBirthLocation}</h4>
                <h4>Country: ${info.strNationality}</h4>
                <h4>Sport: ${info.strSport}</h4>
                <h4>Team: ${info.strTeam}</h4>
                <p> About: ${info.strDescriptionEN} </p>
                


    `
    displayDetails.appendChild(div);
}