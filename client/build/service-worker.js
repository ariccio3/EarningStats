"use strict";var precacheConfig=[["/index.html","3d452f26131f2d2957c7baa37aaf13d7"],["/static/css/main.70f234f9.css","0e733e2eb5dad242b819260b2ccc0f61"],["/static/js/main.232642a4.js","e0148df3101e35e1ecce8b1a4365b3f1"],["/static/media/AAPL.3177f614.JPG","3177f61476afd080e6cbf823286c2ed0"],["/static/media/ACN.4545d08b.JPG","4545d08bdc64cd126c7a67527f2cf0e7"],["/static/media/ADBE.51e8146a.JPG","51e8146af69d75b72758e8b4fafcc044"],["/static/media/ADP.4781ec1e.JPG","4781ec1e1c75c3eca209ad797b93d826"],["/static/media/ADSK.87d4827a.JPG","87d4827a13575e5ae31f53e392c82268"],["/static/media/AMGN.af2a18dc.JPG","af2a18dcd6bced935e77f9738eca947d"],["/static/media/AMZN.2342eabf.JPG","2342eabf9c61fe4218f115e197aab29b"],["/static/media/ANET.07aff767.JPG","07aff7674808b1234a046e9903a80950"],["/static/media/AVGO.4f3bc7ac.JPG","4f3bc7ac905f59b39eb080e54c112103"],["/static/media/AXP.cbbef3e8.JPG","cbbef3e83837d71c222bb618a36a90e1"],["/static/media/BA.2080a452.JPG","2080a4527d8b45e88bd3fad9cedbaa5c"],["/static/media/BABA.64df786d.JPG","64df786d64e53fc9d707cc96241dc8d8"],["/static/media/BIDU.5d5a5d25.JPG","5d5a5d2515a787a530e79e8b5431c123"],["/static/media/BIIB.81d69ebc.JPG","81d69ebc50f65d948d19be7e96e1cad1"],["/static/media/BKNG.2ebe8eb0.JPG","2ebe8eb03f7933fd4d08501ee4c2bb5b"],["/static/media/C.b7678004.JPG","b76780043ed12655e157c30e4fbb7977"],["/static/media/CAT.fa1769d6.JPG","fa1769d65bd2969c573f3c50556c861b"],["/static/media/CMG.6c1437c0.JPG","6c1437c0cacd92167a87992a25d59f91"],["/static/media/COST.76e57243.JPG","76e5724318ac63075cdfa8a3ee656d8e"],["/static/media/CRM.594555a9.JPG","594555a9eb2ffce0db5390d2face5158"],["/static/media/CVX.2f506a80.JPG","2f506a80dd6819a296094c59f6e584ff"],["/static/media/DE.0cc344a8.JPG","0cc344a8d0a6d85cb5e61bb99a4cf89a"],["/static/media/DIS.d40e376d.JPG","d40e376d5ff8b2de67758a7f4712fa8b"],["/static/media/DPZ.ae1c6a0c.JPG","ae1c6a0c7f047995a026061d8bcc1186"],["/static/media/EA.aec6d7bd.JPG","aec6d7bdf4cd5de738e73c434da6aac8"],["/static/media/FB.fa678992.JPG","fa6789922a722577b55e33713905961b"],["/static/media/FDX.7e20e443.JPG","7e20e44395567a87092b17926fee6c67"],["/static/media/GILD.07318c0e.JPG","07318c0ea5ca768384dc4fcffa6328ff"],["/static/media/GOOGL.6161f20c.JPG","6161f20c588e3f0add6942907d0404c3"],["/static/media/GS.cff375bd.JPG","cff375bd8c4a846ff0e1d52b80d67f27"],["/static/media/HD.9cb2d39e.JPG","9cb2d39e648c70b4d0838a04f4d19013"],["/static/media/IBM.8bea4e50.JPG","8bea4e5015dda934f0710c1452233417"],["/static/media/JNJ.45db030f.JPG","45db030f5934c8702f7787451fbc8cce"],["/static/media/JPM.fdb558a0.JPG","fdb558a09810b2f41cc1a85e69cd444c"],["/static/media/LOW.6bd06821.JPG","6bd068216cc5bcd0a9a75fa8618b69a0"],["/static/media/LULU.13aceeff.JPG","13aceeff84294dfdf0e382aa8a775e42"],["/static/media/MA.45a8730f.JPG","45a8730f76307f1f95af6798bd96f18c"],["/static/media/MCD.8342e4e8.JPG","8342e4e85b840065b03a04244ad340c3"],["/static/media/MSFT.e84a7da9.JPG","e84a7da912e8f15bc700fdc42c608fc0"],["/static/media/NFLX.2502d321.JPG","2502d3219da20dadcace01ad0f78ba6a"],["/static/media/NKE.b08f40c8.JPG","b08f40c8f342ae9c674fefee8024eef2"],["/static/media/NOW.bcc83fa0.JPG","bcc83fa0784ed91ef71a73cb3bf2452b"],["/static/media/NTES.7e278c7a.JPG","7e278c7a8fae6252db915e5ee29d3319"],["/static/media/NVDA.c67c8d80.JPG","c67c8d80791c692c55073ecde83968b4"],["/static/media/PEP.8deabecf.JPG","8deabecff4cf884f16039daae9fbfad7"],["/static/media/PYPL.87bb199e.JPG","87bb199e21826b95c01b21ec4f5c428d"],["/static/media/QCOM.549b13c1.JPG","549b13c12d09b2a26b4b029b87d2533d"],["/static/media/ROKU.0fa66a59.JPG","0fa66a597ad092c41ffd5c3cd8a39512"],["/static/media/SBUX.f110883d.JPG","f110883d5cc9e6a8a5c53d1632e8c5bc"],["/static/media/SHOP.60e45f8f.JPG","60e45f8fdb072575d75a0ab4008e49f7"],["/static/media/SM.8feaf0cf.JPG","8feaf0cfec1033355c82d67067cc29aa"],["/static/media/SQ.dd116347.JPG","dd116347806a56c833114f51785cc899"],["/static/media/STZ.0f42253e.JPG","0f42253eecaee282e3c69851dc4b3514"],["/static/media/TGT.dddb507e.JPG","dddb507ebd6e49f3bb70b0a5558dcd5c"],["/static/media/TSLA.d0ca3c26.JPG","d0ca3c2600d1bfab431e9450f603a1cc"],["/static/media/TTWO.d16a1eec.JPG","d16a1eecbcd23a0d1109f40f0914e906"],["/static/media/TWLO.19f740b0.JPG","19f740b01c1d7e86ebc5d1d310ef2967"],["/static/media/TXN.b6f7a0bf.JPG","b6f7a0bfce4d4d99c74071286851758f"],["/static/media/ULTA.5de755a2.JPG","5de755a2ccb2910b3e01681b762a957a"],["/static/media/UNH.caf0dec9.JPG","caf0dec90f31e1c95f988d1f47f7df66"],["/static/media/UPS.fa75ea54.JPG","fa75ea5448e7171b9df33e312fddbcc1"],["/static/media/V.b2d362c9.JPG","b2d362c93f9d1b627b7de945aafde225"],["/static/media/WMT.d6964fa2.JPG","d6964fa269ad773d33ceea1f840abc34"],["/static/media/WYNN.e3f6530f.JPG","e3f6530fc4e8999d5b04c83a0f5ca5c0"],["/static/media/XLNX.37f69675.JPG","37f696754fe2c6485201697729546158"],["/static/media/XOM.7f150c7e.JPG","7f150c7ea0701c75312ecaeed8ff3973"],["/static/media/paypal-donate-button.5687b713.png","5687b71375875d8618d399a4f265c702"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});