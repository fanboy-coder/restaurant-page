function menu() {
    const content = document.getElementById("content");
    const div = content.appendChild(document.createElement("div"));
    div.setAttribute("id", "display");
    div.setAttribute("class","menu-page");

    const item1 = div.appendChild(document.createElement("div"));
    const h1 = item1.appendChild(document.createElement("h3"));
    h1.textContent = "Francesinha";
    const img = item1.appendChild(document.createElement("img"));
    img.src = "../src/images/francesinha.png";

    const item2 = div.appendChild(document.createElement("div"));
    const h2 = item2.appendChild(document.createElement("h3"));
    h2.textContent = "Cachorro molhado";
    const img2 = item2.appendChild(document.createElement("img"));
    img2.src = "../src/images/cachorro.png";

    const item3 = div.appendChild(document.createElement("div"));
    const h3 = item3.appendChild(document.createElement("h3"));
    h3.textContent = "Moelas";
    const img3 = item3.appendChild(document.createElement("img"));
    img3.src = "../src/images/moelas.png";

    const item4 = div.appendChild(document.createElement("div"));
    const h4 = item4.appendChild(document.createElement("h3"));
    h4.textContent = "Alheira com ovo";
    const img4 = item4.appendChild(document.createElement("img"));
    img4.src = "../src/images/alheira_com_ovo.png";

    const item5 = div.appendChild(document.createElement("div"));
    const h5 = item5.appendChild(document.createElement("h3"));
    h5.textContent = "Omelete";
    const img5 = item5.appendChild(document.createElement("img"));
    img5.src = "../src/images/omelete.png";

    const item6 = div.appendChild(document.createElement("div"));
    const h6 = item6.appendChild(document.createElement("h3"));
    h6.textContent = "Prego no Pão";
    const img6 = item6.appendChild(document.createElement("img"));
    img6.src = "../src/images/prego_no_pao.png";
}

export { menu }