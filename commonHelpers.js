import"./assets/vendor-86291ea8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const s=document.querySelector(".btn"),l=document.querySelector("form");l.addEventListener("click",t=>{if(t.preventDefault(),text.value=="")return alert("Please, check input information!!!")});s.addEventListener("click",()=>{u().then(t=>a(t)).catch(t=>console.log(t))});function u(){return fetch("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name").then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function a(t){const o=t.map(n=>`
            <li>
              <p><b>Name</b>: ${n.name}</p>
              <p><b>Email</b>: ${n.email}</p>
              <p><b>Company</b>: ${n.company.name}</p>
            </li>
        `).join("");userList.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map
