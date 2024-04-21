// grammarly.js

function heyy() {
    try {
            for (let premiums of document.querySelector("grammarly-popups").shadowRoot.querySelectorAll("button.sticker")) {
                premiums.style.display = "none";
            }
        } catch {
            1+1
        }
}
(function() {
    'use strict';

    setInterval(heyy, 1000);
})();
