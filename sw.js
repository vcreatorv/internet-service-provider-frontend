if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let o={};const t=e=>n(e,f),c={module:{uri:f},exports:o,require:t};i[f]=Promise.all(s.map((e=>c[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-2IwBDrJp.css",revision:null},{url:"assets/index-DTssyvwi.js",revision:null},{url:"index.html",revision:"09fe1ea53000d9e38f3335fc27cf2fd9"},{url:"registerSW.js",revision:"6ebdca3679e6772feb822fc7425031f6"},{url:"favicon.ico",revision:"014d0391bfd4f7b5c43a0d1ca04c05e0"},{url:"maskable-icon-512x512.png",revision:"f62ee720572771f75ba0e4d30fea76a1"},{url:"pwa-192x192.png",revision:"7f0df7a583546869568e6a7abf6680fa"},{url:"pwa-512x512.png",revision:"4fe75019bc487033b2163b6a4f0cf0ee"},{url:"pwa-64x64.png",revision:"9c7d2aa38b8ce20d78f417f578ef5f1c"},{url:"manifest.webmanifest",revision:"04c89740251a3389a6b8eb5cbf9425ed"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
