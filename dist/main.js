(()=>{const e=document.getElementById("homeBtn"),t=document.getElementById("menuBtn"),n=document.getElementById("contactBtn"),o=document.getElementById("content"),c=document.getElementById("img");function d(e){const t=document.createElement("p");t.textContent=e,o.appendChild(t)}function i(){o.innerHTML=""}function m(e){c.src=e}function a(){c.src=""}e.addEventListener("click",(()=>{i(),a(),m("https://media-cdn.tripadvisor.com/media/photo-s/09/de/f1/3d/shinkows.jpg"),d("Hello There !!!"),d("Welcome to Shinkows Restaurant Page, its one of my favourites.Help yourself out here")})),t.addEventListener("click",(()=>{i(),a(),d("Menu content:"),m("https://media-cdn.tripadvisor.com/media/photo-s/12/2a/33/18/menu-card.jpg")})),n.addEventListener("click",(()=>{i(),a(),m("https://media-cdn.tripadvisor.com/media/photo-s/01/ce/5d/fc/shinkows-at-the-top-of.jpg"),d("Contact content"),d("Summer House Colony, Upper Bazar, Ooty, Tamil Nadu 643001")}))})();