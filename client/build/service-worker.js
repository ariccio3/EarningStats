"use strict";var precacheConfig=[["/index.html","ecf025f5f678b1584bea53c6e5b2ec80"],["/static/css/main.844e4bea.css","51377751b4cef6cba67e71270aca40e3"],["/static/js/main.638b9095.js","85d13ed62047b88c6b26b2299e3fab17"],["/static/media/AAPL.b881359d.JPG","b881359d7457a28675193271149b9aee"],["/static/media/ACN.5b9bc0e6.JPG","5b9bc0e66e67688a0c9bbd6f23149417"],["/static/media/ADBE.20f4834f.JPG","20f4834f9cb33d8b88b21f9ee78b1dfc"],["/static/media/ADP.d2b57acd.JPG","d2b57acd568e251822c1fb34507405dc"],["/static/media/ADSK.0babae0c.JPG","0babae0ca75a14019c8c601748c8627e"],["/static/media/AGN.124a0651.JPG","124a065187cbbda1085614a6b6d0f2be"],["/static/media/AMGN.a4481f7b.JPG","a4481f7b3f3915e1e3aec9a22d18da5b"],["/static/media/AMZN.9ee19e5c.JPG","9ee19e5c50c693fc18eb7991bea3b13c"],["/static/media/ANET.07aff767.JPG","07aff7674808b1234a046e9903a80950"],["/static/media/AVGO.54960794.JPG","5496079482bd3be16bb75d12f53ed974"],["/static/media/AXP.440d7e47.JPG","440d7e47d17aee6af26d4479d024565e"],["/static/media/BA.2080a452.JPG","2080a4527d8b45e88bd3fad9cedbaa5c"],["/static/media/BABA.fe3b0364.JPG","fe3b0364ed3b879fa3105499d7f7836e"],["/static/media/BIDU.dbd456e1.JPG","dbd456e1f20f2fa4efbbcb6cf389ab84"],["/static/media/BIIB.4a1badf4.JPG","4a1badf432c6615afed06d086b24052f"],["/static/media/BKNG.2574d42d.JPG","2574d42d8164f7c5e041a9634a2ea8a7"],["/static/media/C.b7678004.JPG","b76780043ed12655e157c30e4fbb7977"],["/static/media/CAT.fa1769d6.JPG","fa1769d65bd2969c573f3c50556c861b"],["/static/media/CMG.1a554da8.JPG","1a554da802e4e50fcdd11ec35cb373fb"],["/static/media/COST.690e1371.JPG","690e1371b74bbd6105b6cbd190cd0cf7"],["/static/media/CRM.84f8e272.JPG","84f8e272622dd2fc242c2bb511df5a62"],["/static/media/CVX.9cc8e7d3.JPG","9cc8e7d3356a0accccf1af6d31313f21"],["/static/media/DE.c9408c98.JPG","c9408c98bafdd04bc0acb2fa10f97db6"],["/static/media/DIS.3868fe36.JPG","3868fe365344c5777bb05f050fd6b6f5"],["/static/media/DPZ.ae1c6a0c.JPG","ae1c6a0c7f047995a026061d8bcc1186"],["/static/media/EA.dc3455be.JPG","dc3455becc7a7435e3a6a2bede1055e1"],["/static/media/FB.5991fc86.JPG","5991fc864fcc6d8e045657ad6377f2e2"],["/static/media/FDX.14208f10.JPG","14208f1020e79660796b8da96ba32265"],["/static/media/GILD.fa5d45d2.JPG","fa5d45d28b262f130e2de5495bb1f60a"],["/static/media/GOOGL.fb90cf7a.JPG","fb90cf7a2943f471f7236d0ed8eb0f03"],["/static/media/GS.cff375bd.JPG","cff375bd8c4a846ff0e1d52b80d67f27"],["/static/media/HD.7e5a51b8.JPG","7e5a51b84774de88d1d963ef756db9af"],["/static/media/IBM.130c5541.JPG","130c55418869a73503d3b120b5b09826"],["/static/media/JNJ.45db030f.JPG","45db030f5934c8702f7787451fbc8cce"],["/static/media/JPM.fdb558a0.JPG","fdb558a09810b2f41cc1a85e69cd444c"],["/static/media/LOW.09038854.JPG","0903885441acc1b6194b978782024a23"],["/static/media/LULU.94625143.JPG","946251430e385723b95539291053e336"],["/static/media/MA.3047db2d.JPG","3047db2d3946911c7fa2c70be4c63947"],["/static/media/MCD.85c8bdeb.JPG","85c8bdeb76b0c790d5d758ece8fe9d2d"],["/static/media/MSFT.fafcde95.JPG","fafcde95bdca39582b6a1e40ef968919"],["/static/media/NFLX.6196496e.JPG","6196496e51cfd49478c0522e3d972283"],["/static/media/NKE.7e2a042e.JPG","7e2a042e0765a79d2b6d562f1980b047"],["/static/media/NOW.fe289fdb.JPG","fe289fdb4e0f1febb54275638552eace"],["/static/media/NTES.65f7fb20.JPG","65f7fb2008722088966e937117bd700d"],["/static/media/NVDA.f0d1d26d.JPG","f0d1d26d41168838f1cf49874ad7e193"],["/static/media/PEP.ce3f7023.JPG","ce3f7023c8f44b7eb9e012373c3a6bd6"],["/static/media/PYPL.bf8e565e.JPG","bf8e565e55b088fb8fcef58a97b80148"],["/static/media/QCOM.023f367e.JPG","023f367e4b2b4f9aa33d24347d051230"],["/static/media/ROKU.b051b8b7.JPG","b051b8b7c6aeaec535271c782500adca"],["/static/media/SBUX.2c5abf49.JPG","2c5abf49ad3644adc3512237e458bc40"],["/static/media/SHOP.4483701b.JPG","4483701b3851e551fd3c2d78e9ad5b21"],["/static/media/SM.a03010d0.JPG","a03010d079c62a3a0bec1bac4393f4f3"],["/static/media/SQ.bc98d00c.JPG","bc98d00cd9ace918105b55ee3164cc1c"],["/static/media/STZ.15c58b45.JPG","15c58b450d9c7196316d83e08bd665b4"],["/static/media/TGT.877ed80d.JPG","877ed80d3886875b8f338bbf4aa48fc1"],["/static/media/TSLA.7ef87194.JPG","7ef87194ec57670e61b1b7f8b1e0064a"],["/static/media/TTWO.fd36f248.JPG","fd36f248694ef1b8deeacf616bf50b3a"],["/static/media/TWLO.11ffdc42.JPG","11ffdc4268e30353c57cfee559cbb87f"],["/static/media/TXN.42e288a1.JPG","42e288a1e03f486f856e059cef6b084b"],["/static/media/ULTA.b57c95c7.JPG","b57c95c7147cb655f2435eb27810c684"],["/static/media/UNH.caf0dec9.JPG","caf0dec90f31e1c95f988d1f47f7df66"],["/static/media/UPS.38dc00a1.JPG","38dc00a1c6a8430093e1be023db5d634"],["/static/media/V.c58dae09.JPG","c58dae09414ec83bd1d88fb08ab537b6"],["/static/media/WMT.404a04bc.JPG","404a04bc7c04dd81e743e96fc29ebe16"],["/static/media/WYNN.219eb41b.JPG","219eb41bbc7598d03dedb85237804f76"],["/static/media/XLNX.30dbb01d.JPG","30dbb01d0e2db2af89765c0df4e7b908"],["/static/media/XOM.7f150c7e.JPG","7f150c7ea0701c75312ecaeed8ff3973"],["/static/media/paypal-donate-button.5687b713.png","5687b71375875d8618d399a4f265c702"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});