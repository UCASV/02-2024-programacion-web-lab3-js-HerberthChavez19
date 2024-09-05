const countVotes = (votos) => {
    let results = [];
    votos.forEach(voto => {
        results[voto.candidate] = (results[voto.candidate] || 0) + 1;
    })
}



const main = () => {
    let votes = [
        //Objeto JSON -> Nos sirve para cargar datos.
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];
    //Code

}

const results = countVotes(votos);

const showResults = (results) => {
    alert("Resultados de la votacion ->");
    for(let candidate in results){
        alert(`${candidate}:${results[candidate]} votos`);
    }
}

main();
