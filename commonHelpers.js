import"./assets/vendor-86291ea8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const s=document.querySelector(".btn"),a=document.querySelector("form");a.addEventListener("click",t=>{if(t.preventDefault(),text.value=="")return alert("Please, check input information!!!")});s.addEventListener("click",()=>{l().then(t=>u(t)).catch(t=>console.log(t))});function l(){return fetch('https://pixabay.com/api/?key=42924833-4b721b8caf67a58fd43475ecb&q=""&image_type=photo&orientation=horizontal&safesearch=true').then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function u(t){const o=t.map(n=>`
            <li>
              <p><b>Name</b>: ${n.name}</p>
              <p><b>Email</b>: ${n.email}</p>
              <p><b>Company</b>: ${n.company.name}</p>
            </li>
        `).join("");userList.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map
