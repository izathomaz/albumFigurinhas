function adicionar() {
    const nome = document.getElementById("nome").value;
    const url = document.getElementById("url-img").value;

    const item = document.createElement("div");
    item.classList.add("item");

    const imagem = document.createElement("img");
    imagem.src = url;
    imagem.alt = nome;

    const titulo = document.createElement("h3");
    titulo.textContent = nome;

    item.appendChild(imagem);
    item.appendChild(titulo);

    const grupo = document.getElementById("item-group");
    grupo.appendChild(item);

    document.getElementById("nome").value = "";
    document.getElementById("url-img").value = "";
}
