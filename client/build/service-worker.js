"use strict";var precacheConfig=[["/index.html","631225973a421ec14a91cb896c0c3069"],["/static/css/main.844e4bea.css","51377751b4cef6cba67e71270aca40e3"],["/static/js/main.1283e2dc.js","310b2596942df442805a0b5eae41d0be"],["/static/media/AAPL.512b481f.JPG","512b481f9967a1a9bfe44718310dcbeb"],["/static/media/ACN.d251d363.JPG","d251d3633dd3c1ead438afd1c3854153"],["/static/media/ADBE.cbf5d3d0.JPG","cbf5d3d055d9df822713d5ad57c7b5be"],["/static/media/ADP.679abe99.JPG","679abe995739439a5694e0b4b32bf560"],["/static/media/ADSK.b84d7873.JPG","b84d7873bc4be803af361869d5c7fc3a"],["/static/media/AGN.10ee348a.JPG","10ee348a833727a5b5cdc09037b336e9"],["/static/media/AMGN.49d470a7.JPG","49d470a7ee2f86f0dc42cdfa007843aa"],["/static/media/AMZN.8bef1749.JPG","8bef1749240a0663c4f05db0125cc9fd"],["/static/media/AVGO.dedea27f.JPG","dedea27f328c11c10646c06f22c147f6"],["/static/media/AXP.e2d92dbf.JPG","e2d92dbf7a27c5dde29114556cffa4e2"],["/static/media/BA.e3319dc9.JPG","e3319dc902f82ddb6138390ea73e925f"],["/static/media/BABA.679633b6.JPG","679633b67aec863b5e9ed6f26466f79b"],["/static/media/BIDU.0a51f346.JPG","0a51f3462cd1259528486a4f7531779f"],["/static/media/BIIB.bf040a95.JPG","bf040a95709c07ecd310a4cd1a48016d"],["/static/media/BKNG.7cc2f191.JPG","7cc2f1912e89ec8bb99b813c93a02957"],["/static/media/C.71a52ceb.JPG","71a52ceb54dbd9a26e5b989c2260a084"],["/static/media/CAT.aa05f187.JPG","aa05f18784070fd72c36b773fb78cc1b"],["/static/media/CMG.8584e6ed.JPG","8584e6ed20fce48e5b84aba86292e516"],["/static/media/COST.90285989.JPG","902859897b144db43d61b291b3386712"],["/static/media/CRM.fbf31a57.JPG","fbf31a5735fe6bc57bcfcc719cf49b86"],["/static/media/CVX.e48dea0a.JPG","e48dea0a621ea978e0770295f3e51098"],["/static/media/DE.136c0784.JPG","136c078491019b26cc0df3897391a147"],["/static/media/DIS.b9dd9ec9.JPG","b9dd9ec98bb9df7767b3ff901efb9808"],["/static/media/DPZ.b536be48.JPG","b536be48146c61f85b545e593812b619"],["/static/media/EA.ed535b64.JPG","ed535b64018c2b28a9c48255c90157d2"],["/static/media/FB.ac6f0380.JPG","ac6f038069145e972271be4b8235d725"],["/static/media/FDX.49f1c24f.JPG","49f1c24faf41b0f8b625b73bd6b587e3"],["/static/media/GOOGL.6f3a7a8d.JPG","6f3a7a8d2bdf8a7c98af678b7325c0e3"],["/static/media/GS.6a65a5ca.JPG","6a65a5ca2216f75ecdffa5191eadd932"],["/static/media/HD.92146b5b.JPG","92146b5b3f18c2b531c72777437d410c"],["/static/media/IBM.52faeb20.JPG","52faeb20bad60046146ae968e0ed5498"],["/static/media/JNJ.4eca1cd3.JPG","4eca1cd3b7c895f21ba0c9cb6453b2fe"],["/static/media/JPM.12b98214.JPG","12b98214cdda954937b30c59c0bca1ca"],["/static/media/LOW.bb23cd2c.JPG","bb23cd2c407e16cc4a37d0e375ad7858"],["/static/media/LULU.3ade638d.JPG","3ade638dd8bebdddf6172001fb72c628"],["/static/media/MA.6bfd1b8d.JPG","6bfd1b8dfa7c1b2f59233a7969cd8fdc"],["/static/media/MCD.b9563825.JPG","b95638259276be5d9be4edd3c4c405d7"],["/static/media/MSFT.ade947b5.JPG","ade947b5f82918bea5cfe9e413dac876"],["/static/media/NFLX.20c8a68c.JPG","20c8a68c42c7f103f62c6fde6d32affb"],["/static/media/NKE.dd7b8573.JPG","dd7b857393dfbc3fcdd0a233a5732f31"],["/static/media/NTES.872bf787.JPG","872bf7870c22b75f2cc6ecb26ce25721"],["/static/media/NVDA.1402b91f.JPG","1402b91fe1edd58dd46f604a0ed321cc"],["/static/media/PEP.fafb2604.JPG","fafb26044e669c4a4da11a9fc04e0ea7"],["/static/media/PYPL.f0c1efb0.JPG","f0c1efb045dd753a5972f93eb521c287"],["/static/media/QCOM.130e99a8.JPG","130e99a86c3b7d51e336ed23c4249fed"],["/static/media/ROKU.eeb1cc52.JPG","eeb1cc52572517ca1b224bc850603227"],["/static/media/SBUX.13f3c628.JPG","13f3c628d810bea1f65c06e626ce9143"],["/static/media/SM.3f3bfd88.JPG","3f3bfd88c9510db5ec6b1e0e78bdbf3a"],["/static/media/SQ.0fafe229.JPG","0fafe229bef61a3a232c045c900324e3"],["/static/media/STZ.19988077.JPG","19988077488cb8eccdb98f524ea27c1b"],["/static/media/TGT.d768fe19.JPG","d768fe19e169204849bd3131f493bb45"],["/static/media/TSLA.e73267cf.JPG","e73267cf3d8bc7a1a0261c57b671f10b"],["/static/media/TTWO.f35bac39.JPG","f35bac397311eb5d205677698d57c83c"],["/static/media/TXN.a3738360.JPG","a37383603c91792918e30113bff3c266"],["/static/media/ULTA.f8a6f82c.JPG","f8a6f82c1548ebfe30a6c3874b0aaf26"],["/static/media/UNH.daa48b0a.JPG","daa48b0a06bef1fe327b719f6a04627a"],["/static/media/UPS.bbc7ab6b.JPG","bbc7ab6ba2e3a729eef57b41bc7f453b"],["/static/media/V.30b1c109.JPG","30b1c109dd32ef26ad36cb055f255d15"],["/static/media/WMT.407db58b.JPG","407db58b02adc28e1ff241a4f399c09e"],["/static/media/WYNN.475c6f00.JPG","475c6f00ce07cd76d469f836e0bbf87a"],["/static/media/XOM.8d1493cf.JPG","8d1493cf81678f99853b8c7bce41c512"],["/static/media/paypal-donate-button.5687b713.png","5687b71375875d8618d399a4f265c702"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});