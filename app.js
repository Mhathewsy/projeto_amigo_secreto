// Array para armazenar os nomes dos participantes
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    // Validação para impedir nomes vazios ou inválidos
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nome)) {
        alert("Digite um nome válido (somente letras e espaços).");
        return;
    }

    // Impedir duplicatas
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado, favor adicionar nome e sobrenome.");
        return;
    }

    // Adicionar nome à lista
    amigos.push(nome);
    atualizarLista();
    input.value = ""; // Limpar campo
}

// Atualiza a lista de amigos exibida
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Sorteia um amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para o sorteio.");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').innerHTML = `🎉 O amigo secreto é: <strong>${sorteado}</strong>!`;
}

// Reseta a lista para um novo sorteio
function novoSorteio() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    alert("A lista foi resetada! Adicione novos nomes.");
}