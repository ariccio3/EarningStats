"use strict";var precacheConfig=[["/index.html","0216960886665862f54c6c87a38a433c"],["/static/css/main.f5a96a40.css","2f26486876027029a734dea74ad7b2d2"],["/static/js/main.e129d5e6.js","d6df1829381cc81de131c70ed51e81cb"],["/static/media/AAPL.e6f6066e.JPG","e6f6066e4fe9c0e6b7132a3739e12c7f"],["/static/media/ADBE.3ae0cd13.JPG","3ae0cd13df588805d54493206eaaff9a"],["/static/media/ADSK.e5cd901f.JPG","e5cd901fe25b2edc677fba3bcbaf486f"],["/static/media/AMGN.f13a0e9d.JPG","f13a0e9dc725bf0d961ee76dbd9a9137"],["/static/media/AMZN.ab92ca4e.JPG","ab92ca4eedd76e495ce6677832070ba4"],["/static/media/AVGO.69af38c7.JPG","69af38c714e1e6e4422039ebe10adeb2"],["/static/media/AXP.bc32c3bc.JPG","bc32c3bc27450f8ecd767b902b4e6621"],["/static/media/BA.6d7aee52.JPG","6d7aee52facdee80841b85fee4365a80"],["/static/media/BABA.993bab1f.JPG","993bab1f7eed45e709c216e2da2e512e"],["/static/media/BIDU.cb9dd3d8.JPG","cb9dd3d8892c7be936b260a16a76ec69"],["/static/media/BKNG.796b0218.JPG","796b0218009498d68535ff417f714b7f"],["/static/media/C.e5301442.JPG","e5301442d9b84459798d863139d3a9bb"],["/static/media/CAT.7ce58e4e.JPG","7ce58e4e2d71fe875ed12d0ff137da7f"],["/static/media/CELG.fbd59cdf.JPG","fbd59cdf46c338752aedf7465a132887"],["/static/media/CMG.d2fd1150.JPG","d2fd11504e12bcc91d00aab201e845a8"],["/static/media/COST.30e269e6.JPG","30e269e68e239259d7cd5a3fc6074523"],["/static/media/CRM.505d1195.JPG","505d119509baa0ada436d27b4a3e1681"],["/static/media/CVX.9e047982.JPG","9e0479829e2ad8db951c4af653b938df"],["/static/media/DE.2559d1c1.JPG","2559d1c1e82a18685bf38cc9266f0bf0"],["/static/media/DIS.74bd24c8.JPG","74bd24c8336ac90c8f92aaefee4557fd"],["/static/media/EA.99d71831.JPG","99d71831ead9502f6b3085aa07271ec1"],["/static/media/FB.630c4af8.JPG","630c4af8f640e6f7d7bf6a951bdc5e04"],["/static/media/FDX.4ade51cc.JPG","4ade51ccf2351510593d2f85a868495e"],["/static/media/GILD.d7853ca8.JPG","d7853ca85d45a7a10330adcbad99ffe8"],["/static/media/GOOGL.cf2390ae.JPG","cf2390aeb0c63db1b79f7f0077f36f27"],["/static/media/GS.98f91125.JPG","98f91125188bc7b03c279b94383ddbce"],["/static/media/HD.2f0be9db.JPG","2f0be9db5bd3fc0bbe0b1e70f56b356c"],["/static/media/IBM.41e8d4af.JPG","41e8d4af2f156b5690c92619a878a451"],["/static/media/JNJ.16754d84.JPG","16754d84755719dee1f5b4af7de311b7"],["/static/media/JPM.f38c5e60.JPG","f38c5e604c2dacc0b752a8cd8ee820cf"],["/static/media/LULU.e9ac9c33.JPG","e9ac9c33af113c6b6a44c3ec7c7e26b5"],["/static/media/MCD.1d9cc5a6.JPG","1d9cc5a6519efabe12bf227369e43341"],["/static/media/MSFT.41df78b1.JPG","41df78b1a706fe72fee7edf08240abc6"],["/static/media/MU.57a4770f.JPG","57a4770fe325b01e42a17fcb775d5cb1"],["/static/media/NFLX.2e604b3a.JPG","2e604b3a783d6f4b3182363690790fee"],["/static/media/NKE.dcad5695.JPG","dcad5695279d49f55f28ebe0b91e72dd"],["/static/media/NTES.de924be9.JPG","de924be959248edf7c0d7ae299960652"],["/static/media/NVDA.8cc3b14f.JPG","8cc3b14f2a144d02f4cf14c51a2a08f7"],["/static/media/PEP.dcadf667.JPG","dcadf6674cb65f5a1338c607ef623963"],["/static/media/PYPL.6ee1c7a4.JPG","6ee1c7a4584d1e16f24864b48343bc7b"],["/static/media/SM.d43d4019.JPG","d43d4019f782472b911944b63d7fd2f2"],["/static/media/SQ.2df5af94.JPG","2df5af94b165869fbf2c3bc056c129f5"],["/static/media/STZ.9e272dc9.JPG","9e272dc9fa7a6e48d798363b9be3c501"],["/static/media/TGT.0671b88b.JPG","0671b88bd7664aa64d306c9b8a5f0b95"],["/static/media/TSLA.87114f9d.JPG","87114f9d0b86c7e05ddf80c158dd0a0c"],["/static/media/TXN.5b69d702.JPG","5b69d70260e301ec32039a7d5f1a6445"],["/static/media/UPS.fdf51bee.JPG","fdf51bee4bbb127cd3b7f3affb9bee44"],["/static/media/V.eff1369f.JPG","eff1369fd4ccf68ea98ccd3d8f716284"],["/static/media/WMT.68e3035d.JPG","68e3035d2f4ec2cede535d042eade691"],["/static/media/WYNN.738507b4.JPG","738507b4670df4c3115c689b6f8f2eac"],["/static/media/XOM.a2e6f962.JPG","a2e6f9627482ac04fdfc0e6a5c23dc51"],["/static/media/paypal-donate-button.5687b713.png","5687b71375875d8618d399a4f265c702"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var d=new URL(e);return c&&d.pathname.match(c)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),d=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});