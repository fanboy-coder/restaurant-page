function home() {
    const content = document.getElementById("content");
    const div = content.appendChild(document.createElement("div"));
    div.setAttribute("id","display");
    const h1 = div.appendChild(document.createElement("h1"));
    h1.textContent = "Café Ponto Alto";
    const img = div.appendChild(document.createElement("img"));
    img.src = "../src/images/francesinha.png";
    const p = div.appendChild(document.createElement("p"));
    p.textContent = "A melhor francesinha de Esmoriz";
}

export { home }