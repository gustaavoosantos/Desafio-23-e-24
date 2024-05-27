function nomesAleatorios() {
    
    var nomes = [
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

    var nomesAle = Math.floor(Math.random() * nomes.length);

    return nomes[nomesAle];
}

console.log(nomesAleatorios());
