"use strict";
// ==UserScript==
// @name         Habblet AI Chat Enhancer Debug
// @namespace    http://tampermonkey.net/
// @version      0.0.10
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
    window.addEventListener("load", () => {
        const playLink = document.querySelector('a[href="https://www.habblet.city/hotel"]');
        if (playLink) {
            playLink.textContent = "script activated";
        }
        else {
            console.warn("Not loaded in the right page");
        }
    });
})();
