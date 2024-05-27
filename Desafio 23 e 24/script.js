function getRandomName() {
    
    var names = [
        //Nome de alguns dos meus familiares//

        "Gustavo",
        "Alexandra",
        "Talita",
        "Amanda",
        "Vera",
        "Gilberto",
        "Alex",
        "Roberto",
        "Gabriel",
        "Thiago"
    ];

    var randomIndex = Math.floor(Math.random() * names.length);

    return names[randomIndex];
}

console.log(getRandomName());
