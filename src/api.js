function getCeps() {
    return fetch('http://localhost:8090/ceps')
        .then(res => res.json());
}

function createCep(cep) {
    return fetch('http://localhost:8090/ceps', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cep)
    }).then(res => res.json());
}

function searchCep(cep) {
    return fetch(`http://localhost:8090/ceps/${cep}`, {
        method: "GET"
    }).then(res => res.json());
}

export default { getCeps, createCep, searchCep }