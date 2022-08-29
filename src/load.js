function load() {
    const page = document.getElementById("content");
    const div = page.appendChild(document.createElement("div"));
    div.setAttribute ("id", "navbar");
    const list = div.appendChild(document.createElement("ul"));
    list.setAttribute ("id", "menu");
    const li1 = list.appendChild(document.createElement("li"));
    li1.textContent = "Home";
    li1.setAttribute ("id", "home");
    const li2 = list.appendChild(document.createElement("li"));
    li2.textContent = "Menu";
    li2.setAttribute ("id", "menu-page");
    const li3 = list.appendChild(document.createElement("li"));
    li3.textContent = "Contact";
    li3.setAttribute ("id", "contact");
}

export { load };