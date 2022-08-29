function contact() {
    const content = document.getElementById("content");
    const div = content.appendChild(document.createElement("div"));
    div.setAttribute("id","display");
    const p = div.appendChild(document.createElement("h4"));
    p.textContent = "Faça a sua encomenda por telefone: 256 123 456";
    const p2 = div.appendChild(document.createElement("h4"));
    p2.textContent = "Visite-nos:";
    const iframe = div.appendChild(document.createElement("iframe"));
    iframe.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.8636073111247!2d-8.628894284693054!3d40.962566679305404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd247879fbf93d25%3A0x41d0e54ea3d6cdfc!2sCaf%C3%A9%20Snack%20Bar%20Ponto%20Alto!5e0!3m2!1spt-PT!2spt!4v1661424702540!5m2!1spt-PT!2spt");
}

export { contact }