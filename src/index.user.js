"use strict";
// ==UserScript==
// @name         Habblet AI Chat Enhancer
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Overlay azul sobre input do chat em Habblet
// @author       MistaKitty / Tiago
// @match        *://*.habblet.com/*
// @grant        none
// ==/UserScript==
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(function () {
    "use strict";
    // Delay simples
    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    // Seleciona input de chat correto
    function getChatInput() {
        return document.querySelector(".chatinput-container input.chat-input");
    }
    // Cria overlay azul posicionado sobre o input
    function criarOverlayDiv(input) {
        // Remove overlay anterior, se houver
        let existing = document.getElementById("ai-overlay-habblet");
        if (existing)
            existing.remove();
        let overlay = document.createElement("div");
        overlay.id = "ai-overlay-habblet";
        overlay.textContent = "Overlay ativo";
        overlay.style.position = "absolute";
        overlay.style.background = "rgba(0, 123, 255, 0.5)"; // azul translúcido
        overlay.style.color = "white";
        overlay.style.padding = "6px 12px";
        overlay.style.borderRadius = "6px";
        overlay.style.fontSize = "14px";
        overlay.style.pointerEvents = "none"; // deixa clicar no input abaixo
        overlay.style.zIndex = "9999";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.fontWeight = "bold";
        // Posição e tamanho da overlay = mesma do input
        const rect = input.getBoundingClientRect();
        overlay.style.left = `${rect.left + window.scrollX}px`;
        overlay.style.top = `${rect.top + window.scrollY}px`;
        overlay.style.width = `${rect.width}px`;
        overlay.style.height = `${rect.height}px`;
        document.body.appendChild(overlay);
    }
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            yield delay(2000);
            const input = getChatInput();
            if (!input) {
                console.warn("Input do chat não encontrado");
                return;
            }
            criarOverlayDiv(input);
            // Opcional: atualizar a posição do overlay caso o input se mova
            window.addEventListener("resize", () => criarOverlayDiv(input));
            window.addEventListener("scroll", () => criarOverlayDiv(input));
        });
    }
    main();
})();
