const button = document.querySelector("button");

const carregar = () => {
    button.innerHTML = '<img src="carregando.png" alt="enviando" class="carregando">';
}

const removerCarregando = () => {
    button.innerHTML = "Concluído";
}

const pegarEnvio = (event) => {
    event.preventDefault();
    carregar();
    const name = document.querySelector("input[name:name]").value;
    const sobrenome = document.querySelector("input[name:sobrenome]").value;
    const email = document.querySelector("input[name:email]").value;
    const devweb = document.querySelector("input[name:devweb]").value;

    fetch("https://api.sheetmonkey.io/form/i3ppEFFfT1mdym6iLFpFgh", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, sobrenome, email, devweb}),
        
    }).then(() => removerCarregando());
}

document.querySelector("form").addEventListener("submit", pegarEnvio);