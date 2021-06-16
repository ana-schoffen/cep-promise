function searchCep(item) {
    return fetch('http://localhost:8090/itens', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    }).then(r => r.json());
}
/*fetch('http://localhost:8090/itens')
        .then(r => r.json());*/
export default { searchCep }