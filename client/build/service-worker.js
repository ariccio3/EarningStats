"use strict";var precacheConfig=[["/index.html","43231de43ef24f9a47f7b37e68a5200e"],["/static/css/main.f5a96a40.css","2f26486876027029a734dea74ad7b2d2"],["/static/js/main.f17f07fd.js","d52a2784de250e5fc0c9f39a3c64172e"],["/static/media/AAPL.91a8ffe6.JPG","91a8ffe6cb42110c9935a739cf85224b"],["/static/media/ADBE.5657984e.JPG","5657984eb22ab518786dbea741900913"],["/static/media/ADSK.b3525fd9.JPG","b3525fd954f60a1badafec0ae5d1c516"],["/static/media/AMGN.2b9f561d.JPG","2b9f561d83dff8e19aef2d2dc6051f05"],["/static/media/AMZN.2b2c2c4f.JPG","2b2c2c4fafcf21c3acd4fb6b9ffc009c"],["/static/media/AVGO.cfb45a08.JPG","cfb45a08d00721fbc20cc55397312639"],["/static/media/AXP.658861a6.JPG","658861a6847292ef4625078346325881"],["/static/media/BA.1363a809.JPG","1363a8093f8a4fb1438f8809cfa0132b"],["/static/media/BABA.04c9a99d.JPG","04c9a99d817d15ef7c1afd30a4ecd69c"],["/static/media/BIDU.2660d2ed.JPG","2660d2eda7f6be442594e557c79be336"],["/static/media/BKNG.e07af9d6.JPG","e07af9d6b468c18418b71584dad5625e"],["/static/media/C.2d2f6316.JPG","2d2f631634550d344a23c10c2cc1afb4"],["/static/media/CAT.c1ab52b5.JPG","c1ab52b5278d66bfc8ef31da5f5838df"],["/static/media/CELG.4eadff78.JPG","4eadff786542c483ca0ede3c96cb879b"],["/static/media/CMG.a609daca.JPG","a609daca54b5751579ad4768ec3b333d"],["/static/media/COST.b7ae30e1.JPG","b7ae30e1dc454ea84e2b1ed07ec4fcb3"],["/static/media/CRM.0d642d16.JPG","0d642d16c1aa3e9a9da8d5797de0ad59"],["/static/media/CVX.311c3a37.JPG","311c3a37234355f0b4e587c2eb325cb3"],["/static/media/DE.3e1f3c82.JPG","3e1f3c82a47e92e09a249ad17ee6876f"],["/static/media/DIS.d6a83f92.JPG","d6a83f92835a7f2b9e1a8a2edbbcfd44"],["/static/media/EA.3d099ee6.JPG","3d099ee69f0f01704ed7b4f7e2e16ceb"],["/static/media/FB.eefb0219.JPG","eefb02199c869102c539f50ebaff5b0e"],["/static/media/FDX.8e9cd757.JPG","8e9cd7579f0926e84111a3271565ba0b"],["/static/media/GILD.81db6fae.JPG","81db6fae691f3ae5ff9338721d9c1fc5"],["/static/media/GOOGL.f7cc291d.JPG","f7cc291d8e107fbd9cbad5cee89663d3"],["/static/media/GS.213e982c.JPG","213e982c763d208d4947455340e70a26"],["/static/media/HD.047482ad.JPG","047482ad6be4c8fba89abf6ce2d5fb63"],["/static/media/IBM.81a6ff47.JPG","81a6ff47077a91001799eb55c49484b5"],["/static/media/JNJ.c5504793.JPG","c550479311b76150dc3785dc3a91e95a"],["/static/media/JPM.f22e508c.JPG","f22e508c501fa20eb832192309481454"],["/static/media/LULU.960cb3e8.JPG","960cb3e84a8300964043418a9b289d2f"],["/static/media/MCD.780f099c.JPG","780f099cd12203924edf808bc5ea6947"],["/static/media/MSFT.eba2938e.JPG","eba2938eddbeb993bd692576dad4c8cc"],["/static/media/MU.b4b78d49.JPG","b4b78d496427b19634791dd832b6c8a4"],["/static/media/NFLX.dbbb9d13.JPG","dbbb9d13f5be6981cf3b7fefe53d8577"],["/static/media/NKE.b848ecbb.JPG","b848ecbbcd56977dede4d98f1cede7cd"],["/static/media/NTES.e5b45973.JPG","e5b459731de88aaa9c60d2b5b29bd205"],["/static/media/NVDA.68ec718d.JPG","68ec718d55657097a9e83ab5e43e1db7"],["/static/media/PEP.fb4861d3.JPG","fb4861d3b2931446f106915fd7a5c06b"],["/static/media/PYPL.4c3dcf67.JPG","4c3dcf675435c5228032b2e8259ccf75"],["/static/media/SM.4914a89c.JPG","4914a89c9934e086b674ea20be3da6b6"],["/static/media/SQ.c74ae03a.JPG","c74ae03abae15173385ca234bd3d1873"],["/static/media/STZ.2094f299.JPG","2094f299f37c0d662740b0f4fcf4a55f"],["/static/media/TGT.c65acbfe.JPG","c65acbfe7dc7be9ca9a963e76858caca"],["/static/media/TSLA.9fa39230.JPG","9fa392302e4e03143b3a7907cc068dd4"],["/static/media/TTWO.b6490344.JPG","b64903447dc8de363594ed9391e28dd9"],["/static/media/TXN.5323a406.JPG","5323a40624c5b2c180042f6ebf4b4ab4"],["/static/media/ULTA.62a73054.JPG","62a730545da372aced5df969ca1383e2"],["/static/media/UPS.7f6fdfa2.JPG","7f6fdfa22eeec9cd6df40484bb15834c"],["/static/media/V.c279f9fe.JPG","c279f9fe8a1c9b3b61ff4752fe771145"],["/static/media/WMT.fd2bb1d6.JPG","fd2bb1d65e606c373e8be78e7682f27e"],["/static/media/WYNN.9a157984.JPG","9a15798444e2dc52086c7ce88b9de1b3"],["/static/media/XOM.d47178b3.JPG","d47178b3a0f7be97274d7b40b6c48dbe"],["/static/media/paypal-donate-button.5687b713.png","5687b71375875d8618d399a4f265c702"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var d=new URL(e);return c&&d.pathname.match(c)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),d=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});