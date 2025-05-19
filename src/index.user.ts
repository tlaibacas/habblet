// ==UserScript==
// @name         Habblet AI Chat Enhancer Debug
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Overlay azul sobre input do chat com debug e logs
// @author       Tiago
// @match        *://*.habblet.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function delay(ms: number | undefined) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function getChatInput() {
    const input = document.querySelector(
      ".chatinput-container input.chat-input"
    );
    console.log("[Habblet AI] Input selecionado:", input);
    return input;
  }

  function criarOverlayDiv(input: Element) {
    console.log("[Habblet AI] Criando overlay...");
    let existing = document.getElementById("ai-overlay-habblet");
    if (existing) existing.remove();

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

  async function main() {
    console.log("[Habblet AI] Script iniciado");
    let input = getChatInput();
    let tentativas = 0;
    while (!input && tentativas < 10) {
      console.log(
        "[Habblet AI] Input não encontrado. Tentativa:",
        tentativas + 1
      );
      await delay(1000);
      input = getChatInput();
      tentativas++;
    }
    if (!input) {
      console.error(
        "[Habblet AI] Input do chat não foi encontrado após várias tentativas."
      );
      return;
    }
    criarOverlayDiv(input);

    window.addEventListener("resize", () => criarOverlayDiv(input));
    window.addEventListener("scroll", () => criarOverlayDiv(input));
  }

  main();
})();
