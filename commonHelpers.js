import{i as c,S as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function p(o){const r="https://pixabay.com",s="/api/",n=new URLSearchParams({key:"42924833-4b721b8caf67a58fd43475ecb",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${s}?${n}`;return fetch(e,{method:"GET"}).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()}).catch(i=>{c.error({backgroundColor:"red",position:"topCenter",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}function m(o){l.ulEl.innerHTML='<div class="loader"></div>',console.log(o);const r=o.hits;r.length==0&&c.error({title:"Error",message:"Error: No such pictures!",position:"topRight"}),l.ulEl.insertAdjacentHTML("beforeend",h(r));const s={captionsData:"alt",captionDelay:250};let n=new f(".gallery a",s);n.on("show.simplelightbox",function(){}),n.refresh()}function h(o){return o.map(({webformatURL:r,largeImageURL:s,tags:n,likes:e,views:t,comments:i,downloads:u})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img       
          class="gallery-image"
          src="${r}"
          alt="${n}"
        />
        <ul class="img-description"><li class><h3>Likes</h3><p>${e}</p><li/>
        <li><h3>Views</h3><p>${t}</p><li/>
        <li><h3>Comments</h3><p>${i}</p><li/>  
        <li><h3>Downloads</h3><p>${u}</p><li/></ul>
      </a>
    </li>
     
  `).join("")}const l={formEl:document.querySelector("form"),formCont:document.querySelector("form-container"),inputEl:document.querySelector("input.form-control"),ulEl:document.querySelector("ul.gallery")};let a="";l.inputEl.addEventListener("input",o=>{o.preventDefault(),a=l.inputEl.value.trim(),l.ulEl.innerHTML=""});const d=document.querySelector(".btn");d.addEventListener("click",o=>{o.preventDefault(),a&&p(a).then(r=>m(r)).catch(r=>{console.log(r),c.error({title:"Error",backgroundColor:"red",position:"topRight",message:"Please Sorry, there are no images matching your search query. Please try again! again!"})})});
//# sourceMappingURL=commonHelpers.js.map
