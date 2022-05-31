const allPlayers = () =>{
    // console.log("coool");
    const searchValue = document.getElementById("search-box");
    const searchText = searchValue.value;
    console.log(searchText);

    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}

// const displayResult = 