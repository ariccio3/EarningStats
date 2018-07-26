"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","8a25759b9a85e265ec5074cac9b0c15e"],["/static/css/main.f5a96a40.css","2f26486876027029a734dea74ad7b2d2"],["/static/js/main.35399266.js","5a4fc13946dc4712f5471b93ff24319c"],["/static/media/AAPL.e6ef254a.JPG","e6ef254a61056e8e3dd1f54ccefabd19"],["/static/media/ADBE.3ae0cd13.JPG","3ae0cd13df588805d54493206eaaff9a"],["/static/media/ADSK.e5cd901f.JPG","e5cd901fe25b2edc677fba3bcbaf486f"],["/static/media/AMGN.f13a0e9d.JPG","f13a0e9dc725bf0d961ee76dbd9a9137"],["/static/media/AMZN.19b76284.JPG","19b76284a4a85e6fc84ce4f85668bf59"],["/static/media/AVGO.69af38c7.JPG","69af38c714e1e6e4422039ebe10adeb2"],["/static/media/AXP.bc32c3bc.JPG","bc32c3bc27450f8ecd767b902b4e6621"],["/static/media/BA.6d7aee52.JPG","6d7aee52facdee80841b85fee4365a80"],["/static/media/BABA.993bab1f.JPG","993bab1f7eed45e709c216e2da2e512e"],["/static/media/BIDU.cb9dd3d8.JPG","cb9dd3d8892c7be936b260a16a76ec69"],["/static/media/BKNG.e42c5cf7.JPG","e42c5cf785b457201cf1eade93fe22cd"],["/static/media/C.e5301442.JPG","e5301442d9b84459798d863139d3a9bb"],["/static/media/CAT.57961340.JPG","579613409a8db56bafdd22f151c90eea"],["/static/media/CELG.507d3268.JPG","507d326840c3d7eabb25de1a71eaffae"],["/static/media/CMG.3af42d56.JPG","3af42d5694f2f67e066dcc31045eb400"],["/static/media/COST.30e269e6.JPG","30e269e68e239259d7cd5a3fc6074523"],["/static/media/CRM.72307178.JPG","72307178fe849894b46b8a93005332ca"],["/static/media/CVX.6ec0479b.JPG","6ec0479b44d2628b1c2f8ed5dcd5ab1b"],["/static/media/DE.2559d1c1.JPG","2559d1c1e82a18685bf38cc9266f0bf0"],["/static/media/DIS.d341d1ce.JPG","d341d1ce30974b447f92ec6ace1effd2"],["/static/media/FB.a5bec7bb.JPG","a5bec7bb5adcea8da4436d2325508632"],["/static/media/FDX.4ade51cc.JPG","4ade51ccf2351510593d2f85a868495e"],["/static/media/GILD.7d246235.JPG","7d246235eaca599e7405befb9579dafc"],["/static/media/GOOGL.cf2390ae.JPG","cf2390aeb0c63db1b79f7f0077f36f27"],["/static/media/GS.98f91125.JPG","98f91125188bc7b03c279b94383ddbce"],["/static/media/HD.233a6ad8.JPG","233a6ad8aa3c2bacf0029bb30dd21ae3"],["/static/media/IBM.41e8d4af.JPG","41e8d4af2f156b5690c92619a878a451"],["/static/media/JNJ.16754d84.JPG","16754d84755719dee1f5b4af7de311b7"],["/static/media/JPM.f38c5e60.JPG","f38c5e604c2dacc0b752a8cd8ee820cf"],["/static/media/LULU.e9ac9c33.JPG","e9ac9c33af113c6b6a44c3ec7c7e26b5"],["/static/media/MCD.fcaeed5e.JPG","fcaeed5e078d7a9185ab4b48003745aa"],["/static/media/MSFT.41df78b1.JPG","41df78b1a706fe72fee7edf08240abc6"],["/static/media/MU.57a4770f.JPG","57a4770fe325b01e42a17fcb775d5cb1"],["/static/media/NDVA.257b0b6e.JPG","257b0b6e53b5b01c7ca58fe7a02bb054"],["/static/media/NFLX.2e604b3a.JPG","2e604b3a783d6f4b3182363690790fee"],["/static/media/NKE.dcad5695.JPG","dcad5695279d49f55f28ebe0b91e72dd"],["/static/media/NTES.0a55e6fd.JPG","0a55e6fd7d5eb774f40de5a82b775059"],["/static/media/PEP.dcadf667.JPG","dcadf6674cb65f5a1338c607ef623963"],["/static/media/SM.d43d4019.JPG","d43d4019f782472b911944b63d7fd2f2"],["/static/media/STZ.9e272dc9.JPG","9e272dc9fa7a6e48d798363b9be3c501"],["/static/media/TGT.0671b88b.JPG","0671b88bd7664aa64d306c9b8a5f0b95"],["/static/media/TSLA.87114f9d.JPG","87114f9d0b86c7e05ddf80c158dd0a0c"],["/static/media/UPS.fdf51bee.JPG","fdf51bee4bbb127cd3b7f3affb9bee44"],["/static/media/V.584cf382.JPG","584cf3824acaabc3dc1e88239e232356"],["/static/media/WMT.68e3035d.JPG","68e3035d2f4ec2cede535d042eade691"],["/static/media/WYNN.738507b4.JPG","738507b4670df4c3115c689b6f8f2eac"],["/static/media/XOM.a2e6f962.JPG","a2e6f9627482ac04fdfc0e6a5c23dc51"],["/static/media/paypal-donate-button.5687b713.png","5687b71375875d8618d399a4f265c702"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var d=new URL(e);return c&&d.pathname.match(c)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),d=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),d]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});