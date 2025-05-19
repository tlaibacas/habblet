"use strict";
// ==UserScript==
// @name         Habblet AI Chat Enhancer
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Corrige, reescreve ou gera curiosidades com IA antes de enviar no chat
// @author       MistaKitty
// @match        *://*.habblet.com/*
// @grant        none
// @connect      api.openai.com
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
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const getChatInput = () => document.querySelector('input[type="text"], textarea');
    // Cria e posiciona uma div sobre o input
    const criarOverlayDiv = (input) => {
        let overlay = document.createElement("div");
        overlay.id = "ai-overlay-habblet";
        overlay.textContent = "Overlay ativo";
        overlay.style.position = "absolute";
        overlay.style.background = "rgba(0, 0, 0, 0.6)";
        overlay.style.color = "white";
        overlay.style.padding = "6px 12px";
        overlay.style.borderRadius = "6px";
        overlay.style.fontSize = "14px";
        overlay.style.pointerEvents = "none";
        overlay.style.zIndex = "9999";
        const rect = input.getBoundingClientRect();
        overlay.style.left = `${rect.left + window.scrollX}px`;
        overlay.style.top = `${rect.top + window.scrollY}px`;
        overlay.style.width = `${rect.width}px`;
        overlay.style.height = `${rect.height}px`;
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        document.body.appendChild(overlay);
    };
    const main = () => __awaiter(this, void 0, void 0, function* () {
        yield delay(2000);
        const input = getChatInput();
        if (!input)
            return;
        criarOverlayDiv(input);
    });
    main();
})();
