const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n;function o(){document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){t.setAttribute("disabled",""),n=setInterval(o,1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.3c05f9a3.js.map
