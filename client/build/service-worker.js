"use strict";var precacheConfig=[["/index.html","4769fa1b9396fb0188759936e84214a1"],["/static/css/main.844e4bea.css","51377751b4cef6cba67e71270aca40e3"],["/static/js/main.68f0da70.js","dc7699c1ba5ebad1e57c1722a27f566b"],["/static/media/AAPL.b881359d.JPG","b881359d7457a28675193271149b9aee"],["/static/media/ACN.9e74e124.JPG","9e74e124d0dc5b721db402fc24ec84d0"],["/static/media/ADBE.7313d50b.JPG","7313d50bdd00ded8b8966b7d1d58aa36"],["/static/media/ADP.d2b57acd.JPG","d2b57acd568e251822c1fb34507405dc"],["/static/media/ADSK.6fe1a49f.JPG","6fe1a49f45d03134b83ed8730c76c779"],["/static/media/AGN.124a0651.JPG","124a065187cbbda1085614a6b6d0f2be"],["/static/media/AMGN.a4481f7b.JPG","a4481f7b3f3915e1e3aec9a22d18da5b"],["/static/media/AMZN.9ee19e5c.JPG","9ee19e5c50c693fc18eb7991bea3b13c"],["/static/media/ANET.07aff767.JPG","07aff7674808b1234a046e9903a80950"],["/static/media/AVGO.89363b2c.JPG","89363b2c5927e56f39f252c564ad8b9f"],["/static/media/AXP.440d7e47.JPG","440d7e47d17aee6af26d4479d024565e"],["/static/media/BA.2080a452.JPG","2080a4527d8b45e88bd3fad9cedbaa5c"],["/static/media/BABA.05112f9c.JPG","05112f9cbe0c6c5c7ce6fd1864e76c3d"],["/static/media/BIDU.e8109260.JPG","e8109260bcdd16738284a5ca7f366381"],["/static/media/BIIB.4a1badf4.JPG","4a1badf432c6615afed06d086b24052f"],["/static/media/BKNG.2574d42d.JPG","2574d42d8164f7c5e041a9634a2ea8a7"],["/static/media/C.59c2a401.JPG","59c2a4012de9d134ff82e71ba18f94c9"],["/static/media/CAT.fa1769d6.JPG","fa1769d65bd2969c573f3c50556c861b"],["/static/media/CMG.1a554da8.JPG","1a554da802e4e50fcdd11ec35cb373fb"],["/static/media/COST.3923a299.JPG","3923a29978a6c0298ac17161817c5ce9"],["/static/media/CRM.9347f346.JPG","9347f3462facf5ed41e529c58198e44d"],["/static/media/CVX.9cc8e7d3.JPG","9cc8e7d3356a0accccf1af6d31313f21"],["/static/media/DE.b62a4cea.JPG","b62a4cea7ea545d3272beaf051aa8ab1"],["/static/media/DIS.3868fe36.JPG","3868fe365344c5777bb05f050fd6b6f5"],["/static/media/DPZ.9f7fff7b.JPG","9f7fff7b640f4ca86849f45ec4ff2104"],["/static/media/EA.dc3455be.JPG","dc3455becc7a7435e3a6a2bede1055e1"],["/static/media/FB.5991fc86.JPG","5991fc864fcc6d8e045657ad6377f2e2"],["/static/media/FDX.19d46f76.JPG","19d46f76e8ea811bbbed5fe83c554667"],["/static/media/GILD.fa5d45d2.JPG","fa5d45d28b262f130e2de5495bb1f60a"],["/static/media/GOOGL.fb90cf7a.JPG","fb90cf7a2943f471f7236d0ed8eb0f03"],["/static/media/GS.9c8cdf6b.JPG","9c8cdf6b85f5966a3946e0f6a40c8c5b"],["/static/media/HD.47d3179c.JPG","47d3179cb4b7fef7a504a4a3696f04a6"],["/static/media/IBM.130c5541.JPG","130c55418869a73503d3b120b5b09826"],["/static/media/JNJ.fccba69d.JPG","fccba69d4bf5814b864055c2816fff5d"],["/static/media/JPM.ddd474b0.JPG","ddd474b05d96a8525cb47e2711c066b5"],["/static/media/LOW.5e338163.JPG","5e33816346be4412201579df15892a1a"],["/static/media/LULU.6a854672.JPG","6a854672ee20c2621d6d857b10481afd"],["/static/media/MA.3047db2d.JPG","3047db2d3946911c7fa2c70be4c63947"],["/static/media/MCD.85c8bdeb.JPG","85c8bdeb76b0c790d5d758ece8fe9d2d"],["/static/media/MSFT.fafcde95.JPG","fafcde95bdca39582b6a1e40ef968919"],["/static/media/NFLX.6196496e.JPG","6196496e51cfd49478c0522e3d972283"],["/static/media/NKE.186ef1ea.JPG","186ef1eaa3838265381ab34656ffaf4a"],["/static/media/NOW.fe289fdb.JPG","fe289fdb4e0f1febb54275638552eace"],["/static/media/NTES.fcc23fc9.JPG","fcc23fc99489b25b168f2b8d37abe313"],["/static/media/NVDA.fe66c3c1.JPG","fe66c3c1604170a38fb2636ca0b66aea"],["/static/media/PEP.ce3f7023.JPG","ce3f7023c8f44b7eb9e012373c3a6bd6"],["/static/media/PYPL.bf8e565e.JPG","bf8e565e55b088fb8fcef58a97b80148"],["/static/media/QCOM.023f367e.JPG","023f367e4b2b4f9aa33d24347d051230"],["/static/media/ROKU.b051b8b7.JPG","b051b8b7c6aeaec535271c782500adca"],["/static/media/SBUX.2c5abf49.JPG","2c5abf49ad3644adc3512237e458bc40"],["/static/media/SHOP.4483701b.JPG","4483701b3851e551fd3c2d78e9ad5b21"],["/static/media/SM.a03010d0.JPG","a03010d079c62a3a0bec1bac4393f4f3"],["/static/media/SQ.bc98d00c.JPG","bc98d00cd9ace918105b55ee3164cc1c"],["/static/media/STZ.3befe464.JPG","3befe46474caf55ffc353a2e01e352d4"],["/static/media/TGT.7e12abde.JPG","7e12abde3cd7d3ab8720838249c704a0"],["/static/media/TSLA.7ef87194.JPG","7ef87194ec57670e61b1b7f8b1e0064a"],["/static/media/TTWO.480d318f.JPG","480d318f68e15f3c56aa2d4919993259"],["/static/media/TWLO.11ffdc42.JPG","11ffdc4268e30353c57cfee559cbb87f"],["/static/media/TXN.42e288a1.JPG","42e288a1e03f486f856e059cef6b084b"],["/static/media/ULTA.0f0874ab.JPG","0f0874abd757df61aa560b497fbf94ff"],["/static/media/UNH.deed487a.JPG","deed487a6b342f82976c81eb26fa7268"],["/static/media/UPS.38dc00a1.JPG","38dc00a1c6a8430093e1be023db5d634"],["/static/media/V.c58dae09.JPG","c58dae09414ec83bd1d88fb08ab537b6"],["/static/media/WMT.b64ad52d.JPG","b64ad52db3a410d890ae410be1ed73e5"],["/static/media/WYNN.219eb41b.JPG","219eb41bbc7598d03dedb85237804f76"],["/static/media/XLNX.30dbb01d.JPG","30dbb01d0e2db2af89765c0df4e7b908"],["/static/media/XOM.7f150c7e.JPG","7f150c7ea0701c75312ecaeed8ff3973"],["/static/media/paypal-donate-button.5687b713.png","5687b71375875d8618d399a4f265c702"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});