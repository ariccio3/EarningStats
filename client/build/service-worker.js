"use strict";var precacheConfig=[["/index.html","c88751da2193c4457fc3fbc003a05c36"],["/static/css/main.f5a96a40.css","2f26486876027029a734dea74ad7b2d2"],["/static/js/main.6b03b4e0.js","a7e7923dad022d224e241a866607b513"],["/static/media/AAPL.70bbd136.JPG","70bbd1367487b85daba3dd8339512327"],["/static/media/ADBE.85dd3a13.JPG","85dd3a1309c29c4b6b49f33182a79f6f"],["/static/media/ADSK.f3fef9c9.JPG","f3fef9c962c204f61f133ee2bdd2e2f3"],["/static/media/AMGN.4fcb9227.JPG","4fcb922769f29e7b1ee937e5232ffdab"],["/static/media/AMZN.6260fe52.JPG","6260fe52ffa15738f0bdfd1843ecbcf0"],["/static/media/AVGO.fde7fd9c.JPG","fde7fd9c990b4bcac790c633f5d4914d"],["/static/media/AXP.811145a5.JPG","811145a5a89fac04dac45b50478e4e82"],["/static/media/BA.7d716ee6.JPG","7d716ee65e71c3714158c18b60ece946"],["/static/media/BABA.1076fb0e.JPG","1076fb0e56b2dd7aaaec4d8fb68d3475"],["/static/media/BIDU.ce484b73.JPG","ce484b731be763bc6895ad781b66fab5"],["/static/media/BKNG.796b0218.JPG","796b0218009498d68535ff417f714b7f"],["/static/media/C.da525f08.JPG","da525f0884e3064e20aac51dd5632cec"],["/static/media/CAT.93bfc601.JPG","93bfc6015b888471f7ffe8d3bdc16ecc"],["/static/media/CELG.4d23f6b9.JPG","4d23f6b9e4dc074f52d333e537dc603a"],["/static/media/CMG.c2b3ff65.JPG","c2b3ff656b394ad4118f5245705a8125"],["/static/media/COST.83f155cc.JPG","83f155cc1db524d52ed53c96bd59aa63"],["/static/media/CRM.7627fe42.JPG","7627fe428c14d4c7c91d118412d4c7d2"],["/static/media/CVX.3e1661a6.JPG","3e1661a6fd83821b9c46f903ddb118e4"],["/static/media/DE.0fbceca2.JPG","0fbceca2dd12ee6c60bf43a35aab7f1a"],["/static/media/DIS.74bd24c8.JPG","74bd24c8336ac90c8f92aaefee4557fd"],["/static/media/EA.52a3cd20.JPG","52a3cd20a0ad5b79465f3d449921190e"],["/static/media/FB.d1e646c8.JPG","d1e646c8c17f0f8b9b5eab0681e252fc"],["/static/media/FDX.d6d1a7dc.JPG","d6d1a7dc44232b6da0c639291e15b4aa"],["/static/media/GILD.d7853ca8.JPG","d7853ca85d45a7a10330adcbad99ffe8"],["/static/media/GOOGL.a1c9eae5.JPG","a1c9eae5f12ab864d22a3555aaef0f45"],["/static/media/GS.b731ceb9.JPG","b731ceb99a884638666cacf75ace8fce"],["/static/media/HD.3392dcff.JPG","3392dcff141a48df5495cc750a164d85"],["/static/media/IBM.895d3d90.JPG","895d3d9000348f8a0c8c2a8df9a2d755"],["/static/media/JNJ.5d779199.JPG","5d7791997e20ef5ea558f25c3efb0b59"],["/static/media/JPM.f38c5e60.JPG","f38c5e604c2dacc0b752a8cd8ee820cf"],["/static/media/LULU.97eb655f.JPG","97eb655f07ff7e766c317ecbfa6d5ce1"],["/static/media/MCD.e9ac1ae6.JPG","e9ac1ae6290ac209cecf06ffab9f2711"],["/static/media/MSFT.aa257712.JPG","aa257712d1416a82f2c063ed0c350d47"],["/static/media/MU.4e1c7c5d.JPG","4e1c7c5d4a98a1b35f79316bb2f29b32"],["/static/media/NFLX.a80259f0.JPG","a80259f0bbb9ff86d45c1f6a8a21a3e9"],["/static/media/NKE.ddda139a.JPG","ddda139aa627544f253047db8d1dbb6b"],["/static/media/NTES.de924be9.JPG","de924be959248edf7c0d7ae299960652"],["/static/media/NVDA.3ab95105.JPG","3ab95105f4178cf8287191b9d34e805a"],["/static/media/PEP.c16ecbb8.JPG","c16ecbb823b30010ed12d74486e72812"],["/static/media/PYPL.21a322cf.JPG","21a322cf5ee246682411b0d34b943eb3"],["/static/media/SM.60cc94f4.JPG","60cc94f4b4226d474d6696101640b339"],["/static/media/SQ.2df5af94.JPG","2df5af94b165869fbf2c3bc056c129f5"],["/static/media/STZ.6c75f47c.JPG","6c75f47c406b4748c2538697de2132a9"],["/static/media/TGT.beb88d89.JPG","beb88d89402837b472b6e881924eba90"],["/static/media/TSLA.8bbc602b.JPG","8bbc602b4022d87a608575acd43dae9e"],["/static/media/TXN.7b3dbdfb.JPG","7b3dbdfb2ddea8d95ebc5917a09299e3"],["/static/media/UPS.7593462c.JPG","7593462c6af8d9778cacb5a36b9140ef"],["/static/media/V.1aa91470.JPG","1aa914709aa343eb6d55c1a35501eac3"],["/static/media/WMT.d471b566.JPG","d471b566ca3754898a839640f10f635e"],["/static/media/WYNN.738507b4.JPG","738507b4670df4c3115c689b6f8f2eac"],["/static/media/XOM.a118b816.JPG","a118b816fb94120b4858496f7b6b7f90"],["/static/media/paypal-donate-button.5687b713.png","5687b71375875d8618d399a4f265c702"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});