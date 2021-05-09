function show () {
    var name = document.getElementById("name").value;
    var msg = "Hello " + name + "!";

    if (name.toLowerCase() === "pius") {
        document.querySelector(".content").innerHTML = 
        '<img src="https://media.tenor.com/images/fc7fd5c038529906a537b7a453e3c396/tenor.gif" alt="Running squirrel for pius"> <br> <h3>Run for Life!!!!</h3>'
    }
    
    else {
        document.querySelector(".content").textContent = msg;
    };
}