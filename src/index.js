import './style.css';
import { load } from "../src/load";
import { home } from "../src/home";
import { menu } from "../src/menu";
import { contact } from "../src/contact";

load(), home();

const tabs = document.querySelectorAll("li");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        document.getElementById("display").remove();
        if (tab.id === "home") {
            home();
        }
        if (tab.id === "menu-page") {
            menu();
        }
        if (tab.id === "contact") {
            contact();
        }
    })
})