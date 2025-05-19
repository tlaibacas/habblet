"use strict";
// ==UserScript==
// @name         Habblet AI Chat Enhancer Debug
// @namespace    http://tampermonkey.net/
// @version      0.0.11
// @description  Habblet AI Chat Enhancer Debug
// @author       MistaKitty
// @match        https://www.habblet.city/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=habblet.city
// @grant        none
// @updateURL    https://github.com/tlaibacas/habblet/raw/refs/heads/master/dist/index.user.js
// @downloadURL  https://github.com/tlaibacas/habblet/raw/refs/heads/master/dist/index.user.js
// ==/UserScript==
(() => {
    "use strict";
    function updateLinks() {
        const links = document.querySelectorAll('a[href="https://www.habblet.city/hotel"]');
        links.forEach((link) => {
            if (link.textContent && link.textContent.trim() === "JOGAR Habblet") {
                link.textContent = "script activated!";
            }
        });
    }
    window.addEventListener("load", updateLinks);
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.addedNodes.length) {
                updateLinks();
            }
        }
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
})();
