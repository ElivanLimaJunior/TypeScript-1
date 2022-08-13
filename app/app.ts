import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();

const form = document.querySelector('.form')
form.addEventListener('submite', event => {
    event.preventDefault()
    controller.adiciona()
})