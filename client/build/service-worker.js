"use strict";var precacheConfig=[["/index.html","7b25cfe847c37a0b86c6cf692a643ae4"],["/static/css/main.844e4bea.css","51377751b4cef6cba67e71270aca40e3"],["/static/js/main.97e95820.js","590d8130ca1f642699abd88217c6728d"],["/static/media/AAPL.f4ab4c1f.JPG","f4ab4c1fea2debe0bff63eed4f36ec8d"],["/static/media/ACN.9e74e124.JPG","9e74e124d0dc5b721db402fc24ec84d0"],["/static/media/ADBE.7313d50b.JPG","7313d50bdd00ded8b8966b7d1d58aa36"],["/static/media/ADP.acccb46a.JPG","acccb46af3949f5f762627ad9497cc81"],["/static/media/ADSK.6fe1a49f.JPG","6fe1a49f45d03134b83ed8730c76c779"],["/static/media/AGN.10d28466.JPG","10d284666940e708aae258734c5cfe9c"],["/static/media/AMGN.1f399ae0.JPG","1f399ae05a90c423ac237f2ec66a812e"],["/static/media/AMZN.bad888ed.JPG","bad888ed884f0645e0e621c0497a227d"],["/static/media/ANET.07aff767.JPG","07aff7674808b1234a046e9903a80950"],["/static/media/AVGO.89363b2c.JPG","89363b2c5927e56f39f252c564ad8b9f"],["/static/media/AXP.440d7e47.JPG","440d7e47d17aee6af26d4479d024565e"],["/static/media/BA.dbaa7f53.JPG","dbaa7f538ce930b10b62c98acbbb384c"],["/static/media/BABA.05112f9c.JPG","05112f9cbe0c6c5c7ce6fd1864e76c3d"],["/static/media/BIDU.e8109260.JPG","e8109260bcdd16738284a5ca7f366381"],["/static/media/BIIB.4a1badf4.JPG","4a1badf432c6615afed06d086b24052f"],["/static/media/BKNG.44f6eaa7.JPG","44f6eaa735b07399e2fc8aa040d83e93"],["/static/media/C.59c2a401.JPG","59c2a4012de9d134ff82e71ba18f94c9"],["/static/media/CAT.fa1769d6.JPG","fa1769d65bd2969c573f3c50556c861b"],["/static/media/CMG.1a554da8.JPG","1a554da802e4e50fcdd11ec35cb373fb"],["/static/media/COST.3923a299.JPG","3923a29978a6c0298ac17161817c5ce9"],["/static/media/CRM.9347f346.JPG","9347f3462facf5ed41e529c58198e44d"],["/static/media/CVX.137ba83a.JPG","137ba83ad4f4cd453be17f642cf10d42"],["/static/media/DE.b62a4cea.JPG","b62a4cea7ea545d3272beaf051aa8ab1"],["/static/media/DIS.5788c465.JPG","5788c46517ae9191054f2ee53763a5ce"],["/static/media/DPZ.9f7fff7b.JPG","9f7fff7b640f4ca86849f45ec4ff2104"],["/static/media/EA.405fb4b6.JPG","405fb4b61a19da2e34331dab8e555924"],["/static/media/FB.f331384c.JPG","f331384c95c60330dd9e75bc1c4a5928"],["/static/media/FDX.19d46f76.JPG","19d46f76e8ea811bbbed5fe83c554667"],["/static/media/GILD.7fb70fd7.JPG","7fb70fd7fd31abc345d970c35f6374d3"],["/static/media/GOOGL.a8fcda06.JPG","a8fcda06eadf0a29d6de09c88a632f15"],["/static/media/GS.9c8cdf6b.JPG","9c8cdf6b85f5966a3946e0f6a40c8c5b"],["/static/media/HD.47d3179c.JPG","47d3179cb4b7fef7a504a4a3696f04a6"],["/static/media/IBM.130c5541.JPG","130c55418869a73503d3b120b5b09826"],["/static/media/JNJ.fccba69d.JPG","fccba69d4bf5814b864055c2816fff5d"],["/static/media/JPM.ddd474b0.JPG","ddd474b05d96a8525cb47e2711c066b5"],["/static/media/LOW.5e338163.JPG","5e33816346be4412201579df15892a1a"],["/static/media/LULU.6a854672.JPG","6a854672ee20c2621d6d857b10481afd"],["/static/media/MA.4942b351.JPG","4942b35148ab0c889a0e874573ad85d9"],["/static/media/MCD.3515f7cb.JPG","3515f7cbca3c1cc7ff1b050777de412d"],["/static/media/MSFT.1d3db330.JPG","1d3db330bd61e665a75a71db14f104d8"],["/static/media/NFLX.6196496e.JPG","6196496e51cfd49478c0522e3d972283"],["/static/media/NKE.186ef1ea.JPG","186ef1eaa3838265381ab34656ffaf4a"],["/static/media/NOW.56fc863b.JPG","56fc863b36ef6716c9bfeb8c3464cb8c"],["/static/media/NTES.fcc23fc9.JPG","fcc23fc99489b25b168f2b8d37abe313"],["/static/media/NVDA.fe66c3c1.JPG","fe66c3c1604170a38fb2636ca0b66aea"],["/static/media/PEP.ce3f7023.JPG","ce3f7023c8f44b7eb9e012373c3a6bd6"],["/static/media/PYPL.cff61412.JPG","cff61412f04e5099c5e0928fe7e69183"],["/static/media/QCOM.fec9ddc2.JPG","fec9ddc2c7866035ea6bcd04602526f9"],["/static/media/ROKU.9bcb7882.JPG","9bcb7882253969cffbf4081697613902"],["/static/media/SBUX.9e86104d.JPG","9e86104d118fc44e7b4164115e1a59a5"],["/static/media/SHOP.a29fb525.JPG","a29fb5251db3093ecdc66fda490ec185"],["/static/media/SM.a03010d0.JPG","a03010d079c62a3a0bec1bac4393f4f3"],["/static/media/SQ.b0f15739.JPG","b0f15739410f084397275b0732e36d6b"],["/static/media/STZ.3befe464.JPG","3befe46474caf55ffc353a2e01e352d4"],["/static/media/TGT.7e12abde.JPG","7e12abde3cd7d3ab8720838249c704a0"],["/static/media/TSLA.ac189eaa.JPG","ac189eaab6df9b59d4a2c00cfcacf60c"],["/static/media/TTWO.480d318f.JPG","480d318f68e15f3c56aa2d4919993259"],["/static/media/TWLO.6d76767e.JPG","6d76767e97d22b3a8ba536160d54dd67"],["/static/media/TXN.42e288a1.JPG","42e288a1e03f486f856e059cef6b084b"],["/static/media/ULTA.0f0874ab.JPG","0f0874abd757df61aa560b497fbf94ff"],["/static/media/UNH.deed487a.JPG","deed487a6b342f82976c81eb26fa7268"],["/static/media/UPS.38dc00a1.JPG","38dc00a1c6a8430093e1be023db5d634"],["/static/media/V.63545d91.JPG","63545d91fce552ed79d62f7922879259"],["/static/media/WMT.b64ad52d.JPG","b64ad52db3a410d890ae410be1ed73e5"],["/static/media/WYNN.eb097f5a.JPG","eb097f5ad27db7a130909d452991b1bb"],["/static/media/XLNX.30dbb01d.JPG","30dbb01d0e2db2af89765c0df4e7b908"],["/static/media/XOM.31e9157c.JPG","31e9157cdb8cf68b13c7bbc7f91caa36"],["/static/media/paypal-donate-button.5687b713.png","5687b71375875d8618d399a4f265c702"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});