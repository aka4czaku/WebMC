
let sUserAgent = navigator.userAgent.toLowerCase();
window.isTouchDevice = [
    "android", "ucweb",
    "iphone os", "ipad", "ipod",
    "windows phone os", "windows ce", "windows mobile",
    "midp", "symbianos", "blackberry", "hpwos", "rv:1.2.3.4",
].some(s => sUserAgent.includes(s));
// for iPadOS
if (!isTouchDevice && sUserAgent.includes("safari") && sUserAgent.includes("version")) {
    if (!sUserAgent.includes("iphone") && "ontouchend" in document)
        window.isTouchDevice = true;
}

window.addEventListener("contextmenu", e => { if (e.cancelable) e.preventDefault(); }, true);

import { isWebGL2Context } from "./utils/isWebGL2Context.js";
window.isSupportWebGL2 = (() => {
    let ctx = null;
    try { ctx = document.createElement("canvas").getContext("webgl2"); }
    catch(e) { ctx = null; }
    return isWebGL2Context(ctx);
})();

const updatePixelRatio = () => {
    let dpr = window.devicePixelRatio;
    document.documentElement.style.setProperty("--device-pixel-ratio", dpr);
    window.dispatchEvent(new Event("dprchange"));
    matchMedia(`(resolution: ${dpr}dppx)`).addEventListener("change", updatePixelRatio, { once: true });
};
updatePixelRatio();


import {} from "./UI/index.js";
import {} from "./processingPictures.js";
