"use strict";
// ==UserScript==
// @name         Habblet AI Chat Enhancer Debug
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description   Habblet AI Chat Enhancer Debug
// @author       MistaKitty
// @match        https://www.habblet.city/hotel
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
    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    function getChatInput() {
        const input = document.querySelector(".chatinput-container input.chat-input");
        console.log("[Habblet AI] Input selecionado:", input);
        return input;
    }
    function criarOverlayDiv(input) {
        console.log("[Habblet AI] Criando overlay...");
        let existing = document.getElementById("ai-overlay-habblet");
        if (existing)
            existing.remove();
        let overlay = document.createElement("div");
        overlay.id = "ai-overlay-habblet";
        overlay.textContent = "Overlay ativo";
        overlay.style.position = "absolute";
        overlay.style.background = "rgba(0, 123, 255, 0.5)";
        overlay.style.color = "white";
        overlay.style.padding = "6px 12px";
        overlay.style.borderRadius = "6px";
        overlay.style.fontSize = "14px";
        overlay.style.pointerEvents = "none";
        overlay.style.zIndex = "9999";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.fontWeight = "bold";
        const rect = input.getBoundingClientRect();
        overlay.style.left = `${rect.left + window.scrollX}px`;
        overlay.style.top = `${rect.top + window.scrollY}px`;
        overlay.style.width = `${rect.width}px`;
        overlay.style.height = `${rect.height}px`;
        document.body.appendChild(overlay);
        console.log("[Habblet AI] Overlay criado e posicionado.");
    }
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("[Habblet AI] Script iniciado");
            let input = getChatInput();
            let tentativas = 0;
            while (!input && tentativas < 10) {
                console.log("[Habblet AI] Input não encontrado. Tentativa:", tentativas + 1);
                yield delay(1000);
                input = getChatInput();
                tentativas++;
            }
            if (!input) {
                console.error("[Habblet AI] Input do chat não foi encontrado após várias tentativas.");
                return;
            }
            criarOverlayDiv(input);
            window.addEventListener("resize", () => criarOverlayDiv(input));
            window.addEventListener("scroll", () => criarOverlayDiv(input));
        });
    }
    main();
})();
