"use strict";var precacheConfig=[["/index.html","02fba06dc41564cde562eafcacbec680"],["/static/css/main.844e4bea.css","51377751b4cef6cba67e71270aca40e3"],["/static/js/main.1a861de7.js","f014891466434fbc6dae834dec2659e1"],["/static/media/AAPL.3dcb198a.JPG","3dcb198ab7008f6e1d7639bbc7023adc"],["/static/media/ACN.d251d363.JPG","d251d3633dd3c1ead438afd1c3854153"],["/static/media/ADBE.cbf5d3d0.JPG","cbf5d3d055d9df822713d5ad57c7b5be"],["/static/media/ADP.66df15a3.JPG","66df15a3ee0ef1dbf99a968e805ce584"],["/static/media/ADSK.ed62fd05.JPG","ed62fd0569fbfdd208de332739abd286"],["/static/media/AGN.10ee348a.JPG","10ee348a833727a5b5cdc09037b336e9"],["/static/media/AMGN.3154e782.JPG","3154e782e62445b50f6c4db69dc4e431"],["/static/media/AMZN.8c2ba82a.JPG","8c2ba82a10804109c5c5f58e1129c55a"],["/static/media/AVGO.7e6eae35.JPG","7e6eae353299ed09244bdf8db2d1297f"],["/static/media/AXP.e2d92dbf.JPG","e2d92dbf7a27c5dde29114556cffa4e2"],["/static/media/BA.990836cb.JPG","990836cbfa667ee43b9e655e60e31062"],["/static/media/BABA.c92fc7c2.JPG","c92fc7c27e5936c4d2b8c322dac5b04f"],["/static/media/BIDU.9f8b6463.JPG","9f8b6463d327a1cfae259ab38e6eb27f"],["/static/media/BIIB.f7ea2c53.JPG","f7ea2c533480dbd4ecc6b8aa1694fc90"],["/static/media/BKNG.abd966e1.JPG","abd966e1d0d981fd812d3e8579e94dc3"],["/static/media/C.71a52ceb.JPG","71a52ceb54dbd9a26e5b989c2260a084"],["/static/media/CAT.12286c10.JPG","12286c10334590fc1b0f1f2b838911a6"],["/static/media/CMG.a9e615f0.JPG","a9e615f0b2ff75c507a0b5b53032d78c"],["/static/media/COST.90285989.JPG","902859897b144db43d61b291b3386712"],["/static/media/CRM.98672c7e.JPG","98672c7ee355771473bf1824d7707c59"],["/static/media/CVX.6202bd7f.JPG","6202bd7ff3c681b0320a9722164e080a"],["/static/media/DE.5bcaab9f.JPG","5bcaab9f4db41665801e89cd15e7252a"],["/static/media/DIS.b5e70d5e.JPG","b5e70d5e876ebdbf062f7aafb354ff72"],["/static/media/DPZ.b536be48.JPG","b536be48146c61f85b545e593812b619"],["/static/media/EA.71a7109b.JPG","71a7109b9525e7c82961c930ea242a08"],["/static/media/FB.dc7597c7.JPG","dc7597c772dc0cc57260a3281904be92"],["/static/media/FDX.49f1c24f.JPG","49f1c24faf41b0f8b625b73bd6b587e3"],["/static/media/GOOGL.858d6095.JPG","858d60958ef75c799e20a3fef72bf261"],["/static/media/GS.6a65a5ca.JPG","6a65a5ca2216f75ecdffa5191eadd932"],["/static/media/HD.ff386dce.JPG","ff386dce2f606e73e74c14437fe10c0b"],["/static/media/IBM.52faeb20.JPG","52faeb20bad60046146ae968e0ed5498"],["/static/media/JNJ.4eca1cd3.JPG","4eca1cd3b7c895f21ba0c9cb6453b2fe"],["/static/media/JPM.12b98214.JPG","12b98214cdda954937b30c59c0bca1ca"],["/static/media/LOW.6c474f1f.JPG","6c474f1ffe73f40e0e0e64958c791e37"],["/static/media/LULU.56544b8f.JPG","56544b8ff708dc67968fb4ceff5ab362"],["/static/media/MA.bd8bbb1f.JPG","bd8bbb1f690e6191a482729f98ba70ff"],["/static/media/MCD.6cf4ae85.JPG","6cf4ae855d4b34b7925b0abf0689dac9"],["/static/media/MSFT.ade947b5.JPG","ade947b5f82918bea5cfe9e413dac876"],["/static/media/NFLX.20c8a68c.JPG","20c8a68c42c7f103f62c6fde6d32affb"],["/static/media/NKE.dd7b8573.JPG","dd7b857393dfbc3fcdd0a233a5732f31"],["/static/media/NTES.70e0b3bc.JPG","70e0b3bc14567a96c49043032f648a7f"],["/static/media/NVDA.488a60a5.JPG","488a60a5dbdafd9a469efbab225da213"],["/static/media/PEP.fafb2604.JPG","fafb26044e669c4a4da11a9fc04e0ea7"],["/static/media/PYPL.499e3f17.JPG","499e3f17119b81467c1a5e68d6fe55a7"],["/static/media/QCOM.bb6e84c0.JPG","bb6e84c086effc7bc4d331af2a8bec05"],["/static/media/ROKU.5af3bd0d.JPG","5af3bd0dc7c7f375da9b10b4195a3b6e"],["/static/media/SBUX.196b0034.JPG","196b00347d31c9155033d098bd0de570"],["/static/media/SM.5b8ce3b8.JPG","5b8ce3b8b45c6f16aeb477aca7f0bbda"],["/static/media/SQ.257462bb.JPG","257462bba41b8044b9dc7a38775258ca"],["/static/media/STZ.19988077.JPG","19988077488cb8eccdb98f524ea27c1b"],["/static/media/TGT.f7090454.JPG","f7090454082979a19b769cb5dd57edd9"],["/static/media/TSLA.71e53e0d.JPG","71e53e0dceedf8389694ccce77e545a1"],["/static/media/TTWO.e8f1415d.JPG","e8f1415d889a8a8918c47d2d5ae12396"],["/static/media/TXN.df36a518.JPG","df36a518de38de435ae29ddc241260ae"],["/static/media/ULTA.85408e99.JPG","85408e9927308fb7db16e4bc371cd487"],["/static/media/UNH.daa48b0a.JPG","daa48b0a06bef1fe327b719f6a04627a"],["/static/media/UPS.880200b3.JPG","880200b39c55e86961232d7d10077199"],["/static/media/V.3489eb4f.JPG","3489eb4f8d86a3712ea89c93096fc76c"],["/static/media/WMT.f103a0c6.JPG","f103a0c6dc7d45055c0cbab7fd6c84c7"],["/static/media/WYNN.3dd9c847.JPG","3dd9c847fc0c3c1b4203e962a83349a3"],["/static/media/XOM.cb46ebac.JPG","cb46ebac2bd369024d0a6e8d4217d7b1"],["/static/media/paypal-donate-button.5687b713.png","5687b71375875d8618d399a4f265c702"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});