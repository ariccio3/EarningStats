"use strict";var precacheConfig=[["/index.html","2a6463965487b0ca8d67059e8ba565d1"],["/static/css/main.ccd01a65.css","04bd26b3c19efd56c472cebc0d91f093"],["/static/js/main.02a42e6f.js","eca4d2a982a5e6394f6e80d72bd07ee2"],["/static/media/AAPL.3177f614.JPG","3177f61476afd080e6cbf823286c2ed0"],["/static/media/ACN.5b9bc0e6.JPG","5b9bc0e66e67688a0c9bbd6f23149417"],["/static/media/ADBE.20f4834f.JPG","20f4834f9cb33d8b88b21f9ee78b1dfc"],["/static/media/ADP.4781ec1e.JPG","4781ec1e1c75c3eca209ad797b93d826"],["/static/media/ADSK.0babae0c.JPG","0babae0ca75a14019c8c601748c8627e"],["/static/media/AMGN.af2a18dc.JPG","af2a18dcd6bced935e77f9738eca947d"],["/static/media/AMZN.2342eabf.JPG","2342eabf9c61fe4218f115e197aab29b"],["/static/media/ANET.07aff767.JPG","07aff7674808b1234a046e9903a80950"],["/static/media/AVGO.54960794.JPG","5496079482bd3be16bb75d12f53ed974"],["/static/media/AXP.cbbef3e8.JPG","cbbef3e83837d71c222bb618a36a90e1"],["/static/media/BA.2080a452.JPG","2080a4527d8b45e88bd3fad9cedbaa5c"],["/static/media/BABA.fe3b0364.JPG","fe3b0364ed3b879fa3105499d7f7836e"],["/static/media/BIDU.dbd456e1.JPG","dbd456e1f20f2fa4efbbcb6cf389ab84"],["/static/media/BIIB.81d69ebc.JPG","81d69ebc50f65d948d19be7e96e1cad1"],["/static/media/BKNG.2ebe8eb0.JPG","2ebe8eb03f7933fd4d08501ee4c2bb5b"],["/static/media/C.b7678004.JPG","b76780043ed12655e157c30e4fbb7977"],["/static/media/CAT.fa1769d6.JPG","fa1769d65bd2969c573f3c50556c861b"],["/static/media/CMG.6c1437c0.JPG","6c1437c0cacd92167a87992a25d59f91"],["/static/media/COST.690e1371.JPG","690e1371b74bbd6105b6cbd190cd0cf7"],["/static/media/CRM.84f8e272.JPG","84f8e272622dd2fc242c2bb511df5a62"],["/static/media/CVX.2f506a80.JPG","2f506a80dd6819a296094c59f6e584ff"],["/static/media/DE.c9408c98.JPG","c9408c98bafdd04bc0acb2fa10f97db6"],["/static/media/DIS.d40e376d.JPG","d40e376d5ff8b2de67758a7f4712fa8b"],["/static/media/DPZ.ae1c6a0c.JPG","ae1c6a0c7f047995a026061d8bcc1186"],["/static/media/EA.aec6d7bd.JPG","aec6d7bdf4cd5de738e73c434da6aac8"],["/static/media/FB.fa678992.JPG","fa6789922a722577b55e33713905961b"],["/static/media/FDX.14208f10.JPG","14208f1020e79660796b8da96ba32265"],["/static/media/GILD.07318c0e.JPG","07318c0ea5ca768384dc4fcffa6328ff"],["/static/media/GOOGL.6161f20c.JPG","6161f20c588e3f0add6942907d0404c3"],["/static/media/GS.cff375bd.JPG","cff375bd8c4a846ff0e1d52b80d67f27"],["/static/media/HD.7e5a51b8.JPG","7e5a51b84774de88d1d963ef756db9af"],["/static/media/IBM.8bea4e50.JPG","8bea4e5015dda934f0710c1452233417"],["/static/media/JNJ.45db030f.JPG","45db030f5934c8702f7787451fbc8cce"],["/static/media/JPM.fdb558a0.JPG","fdb558a09810b2f41cc1a85e69cd444c"],["/static/media/LOW.09038854.JPG","0903885441acc1b6194b978782024a23"],["/static/media/LULU.94625143.JPG","946251430e385723b95539291053e336"],["/static/media/MA.45a8730f.JPG","45a8730f76307f1f95af6798bd96f18c"],["/static/media/MCD.8342e4e8.JPG","8342e4e85b840065b03a04244ad340c3"],["/static/media/MSFT.e84a7da9.JPG","e84a7da912e8f15bc700fdc42c608fc0"],["/static/media/NFLX.2502d321.JPG","2502d3219da20dadcace01ad0f78ba6a"],["/static/media/NKE.7e2a042e.JPG","7e2a042e0765a79d2b6d562f1980b047"],["/static/media/NOW.bcc83fa0.JPG","bcc83fa0784ed91ef71a73cb3bf2452b"],["/static/media/NTES.7e278c7a.JPG","7e278c7a8fae6252db915e5ee29d3319"],["/static/media/NVDA.f0d1d26d.JPG","f0d1d26d41168838f1cf49874ad7e193"],["/static/media/PEP.6baeee69.JPG","6baeee69f2d1b144a6aa941b2db3fedd"],["/static/media/PYPL.87bb199e.JPG","87bb199e21826b95c01b21ec4f5c428d"],["/static/media/QCOM.549b13c1.JPG","549b13c12d09b2a26b4b029b87d2533d"],["/static/media/ROKU.0fa66a59.JPG","0fa66a597ad092c41ffd5c3cd8a39512"],["/static/media/SBUX.f110883d.JPG","f110883d5cc9e6a8a5c53d1632e8c5bc"],["/static/media/SHOP.60e45f8f.JPG","60e45f8fdb072575d75a0ab4008e49f7"],["/static/media/SM.8feaf0cf.JPG","8feaf0cfec1033355c82d67067cc29aa"],["/static/media/SQ.dd116347.JPG","dd116347806a56c833114f51785cc899"],["/static/media/STZ.15c58b45.JPG","15c58b450d9c7196316d83e08bd665b4"],["/static/media/TGT.877ed80d.JPG","877ed80d3886875b8f338bbf4aa48fc1"],["/static/media/TSLA.d0ca3c26.JPG","d0ca3c2600d1bfab431e9450f603a1cc"],["/static/media/TTWO.d16a1eec.JPG","d16a1eecbcd23a0d1109f40f0914e906"],["/static/media/TWLO.1ddf4a3a.JPG","1ddf4a3a8a8ff4619047eda6cd039e53"],["/static/media/TXN.b6f7a0bf.JPG","b6f7a0bfce4d4d99c74071286851758f"],["/static/media/ULTA.b57c95c7.JPG","b57c95c7147cb655f2435eb27810c684"],["/static/media/UNH.caf0dec9.JPG","caf0dec90f31e1c95f988d1f47f7df66"],["/static/media/UPS.fa75ea54.JPG","fa75ea5448e7171b9df33e312fddbcc1"],["/static/media/V.b2d362c9.JPG","b2d362c93f9d1b627b7de945aafde225"],["/static/media/WMT.404a04bc.JPG","404a04bc7c04dd81e743e96fc29ebe16"],["/static/media/WYNN.e3f6530f.JPG","e3f6530fc4e8999d5b04c83a0f5ca5c0"],["/static/media/XLNX.37f69675.JPG","37f696754fe2c6485201697729546158"],["/static/media/XOM.7f150c7e.JPG","7f150c7ea0701c75312ecaeed8ff3973"],["/static/media/paypal-donate-button.5687b713.png","5687b71375875d8618d399a4f265c702"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});