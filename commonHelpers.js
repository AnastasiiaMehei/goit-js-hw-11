import{i as c,S as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function p(o){const r="https://pixabay.com",l="/api/",i=new URLSearchParams({key:"42924833-4b721b8caf67a58fd43475ecb",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${l}?${i}`;return fetch(e,{method:"GET"}).then(n=>{if(!n.ok)throw new Error(n.status);return n.json()}).catch(n=>{c.error({backgroundColor:"red",position:"topCenter",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}function m(o){s.ulEl.innerHTML="",console.log(o);const r=o.hits;r.length==0&&c.error({title:"Error",message:"Error: No such pictures!",position:"topRight"}),s.ulEl.insertAdjacentHTML("beforeend",h(r));const l={captionsData:"alt",captionDelay:250};let i=new f(".gallery a",l);i.on("show.simplelightbox",function(){}),i.refresh()}function h(o){return o.map(({webformatURL:r,largeImageURL:l,tags:i,likes:e,views:t,comments:n,downloads:u})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${l}">
        <img       
          class="gallery-image"
          src="${r}"
          alt="${i}"
        />
      </a>
    </li>
    <li><h3>likes</h3><p>${e}</p><li/>
    <li><h3>views</h3><p>${t}</p><li/>
    <li><h3>comments</h3><p>${n}</p><li/>  
    <li><h3>downloads</h3><p>${u}</p><li/>  
  `).join("")}const s={formEl:document.querySelector("form"),formCont:document.querySelector("form-container"),inputEl:document.querySelector("input.form-control"),ulEl:document.querySelector("ul.gallery")};let a="";s.inputEl.addEventListener("input",o=>{o.preventDefault(),a=s.inputEl.value.trim(),s.ulEl.innerHTML=""});const d=document.querySelector(".btn");d.addEventListener("click",o=>{o.preventDefault(),a&&p(a).then(r=>m(r)).catch(r=>{console.log(r),c.error({title:"Error",backgroundColor:"red",position:"topRight",message:"Please Sorry, there are no images matching your search query. Please try again! again!"})})});
//# sourceMappingURL=commonHelpers.js.map
