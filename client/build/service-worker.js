"use strict";var precacheConfig=[["/index.html","53e90e04ca2dd1f80f023764f3eb8574"],["/static/css/main.844e4bea.css","51377751b4cef6cba67e71270aca40e3"],["/static/js/main.877a2f82.js","64bebd5cba292c3662de4cb46d8dc274"],["/static/media/AAPL.f4ab4c1f.JPG","f4ab4c1fea2debe0bff63eed4f36ec8d"],["/static/media/ACN.23849cde.JPG","23849cde9b81234761028d4251ed2111"],["/static/media/ADBE.7a08134c.JPG","7a08134cc3a613ae15afede30b9d772c"],["/static/media/ADP.acccb46a.JPG","acccb46af3949f5f762627ad9497cc81"],["/static/media/ADSK.17f1f511.JPG","17f1f511c435881cb5e2136e6ae635b1"],["/static/media/AGN.10d28466.JPG","10d284666940e708aae258734c5cfe9c"],["/static/media/AMGN.1f399ae0.JPG","1f399ae05a90c423ac237f2ec66a812e"],["/static/media/AMZN.bad888ed.JPG","bad888ed884f0645e0e621c0497a227d"],["/static/media/ANET.07aff767.JPG","07aff7674808b1234a046e9903a80950"],["/static/media/AVGO.98bbd3a9.JPG","98bbd3a9f662bb4e64f58b5d80fb4967"],["/static/media/AXP.c117e49b.JPG","c117e49b8f0caa943f34cac5e647e40b"],["/static/media/BA.dbaa7f53.JPG","dbaa7f538ce930b10b62c98acbbb384c"],["/static/media/BABA.05112f9c.JPG","05112f9cbe0c6c5c7ce6fd1864e76c3d"],["/static/media/BIDU.50e95c9b.JPG","50e95c9bd3221fc6df385daa751fec62"],["/static/media/BIIB.a9ed1d97.JPG","a9ed1d97e234b7381f6c5af2783e3272"],["/static/media/BKNG.f434fc45.JPG","f434fc4583d45b8f761401fd7f97d7c8"],["/static/media/C.948ef809.JPG","948ef8098241ab0e421edc8a74999fa1"],["/static/media/CAT.6507e08c.JPG","6507e08cf88c003291b59b5767e996b5"],["/static/media/CMG.1a554da8.JPG","1a554da802e4e50fcdd11ec35cb373fb"],["/static/media/COST.af172515.JPG","af17251542626ef6bd84cff549c33b9b"],["/static/media/CRM.e4f1c9ad.JPG","e4f1c9addd11488e8f1b7ea59089f975"],["/static/media/CVX.137ba83a.JPG","137ba83ad4f4cd453be17f642cf10d42"],["/static/media/DE.7e1541c3.JPG","7e1541c32e683c253b28af3e9fe94048"],["/static/media/DIS.5788c465.JPG","5788c46517ae9191054f2ee53763a5ce"],["/static/media/DPZ.e604e3d3.JPG","e604e3d311802094d9e1d9968ab155f9"],["/static/media/EA.405fb4b6.JPG","405fb4b61a19da2e34331dab8e555924"],["/static/media/FB.f331384c.JPG","f331384c95c60330dd9e75bc1c4a5928"],["/static/media/FDX.b0769f12.JPG","b0769f1290a9b2a60f3e7398a3a9f93c"],["/static/media/GILD.7fb70fd7.JPG","7fb70fd7fd31abc345d970c35f6374d3"],["/static/media/GOOGL.a8fcda06.JPG","a8fcda06eadf0a29d6de09c88a632f15"],["/static/media/GS.8669f904.JPG","8669f9043b0df4b30ce3aae531b3cbbc"],["/static/media/HD.3ff1ac0a.JPG","3ff1ac0a63f6fba1cad32820f9cfbcc2"],["/static/media/IBM.6cf3b3f2.JPG","6cf3b3f271ce25980f5ad83774a61fe5"],["/static/media/JNJ.3d1787a5.JPG","3d1787a50c8c24c970a44c488dc56a35"],["/static/media/JPM.1b4d9373.JPG","1b4d9373f9966735887cb01f8c1af449"],["/static/media/LOW.aeab59b3.JPG","aeab59b3344f4add1ed259e577c0da42"],["/static/media/LULU.9e0fcc63.JPG","9e0fcc632628011072ccdfcf60f0b196"],["/static/media/MA.4942b351.JPG","4942b35148ab0c889a0e874573ad85d9"],["/static/media/MCD.3515f7cb.JPG","3515f7cbca3c1cc7ff1b050777de412d"],["/static/media/MSFT.1d3db330.JPG","1d3db330bd61e665a75a71db14f104d8"],["/static/media/NFLX.653d3c4b.JPG","653d3c4baf8f79df749d8025a592e72b"],["/static/media/NKE.c7d573f1.JPG","c7d573f119ed3bd70ba78bfdaf48eda2"],["/static/media/NOW.56fc863b.JPG","56fc863b36ef6716c9bfeb8c3464cb8c"],["/static/media/NTES.05e513cc.JPG","05e513cc5e2726b4b62613e8d4a22274"],["/static/media/NVDA.fe66c3c1.JPG","fe66c3c1604170a38fb2636ca0b66aea"],["/static/media/PEP.ce3f7023.JPG","ce3f7023c8f44b7eb9e012373c3a6bd6"],["/static/media/PYPL.cff61412.JPG","cff61412f04e5099c5e0928fe7e69183"],["/static/media/QCOM.fec9ddc2.JPG","fec9ddc2c7866035ea6bcd04602526f9"],["/static/media/ROKU.9bcb7882.JPG","9bcb7882253969cffbf4081697613902"],["/static/media/SBUX.9e86104d.JPG","9e86104d118fc44e7b4164115e1a59a5"],["/static/media/SM.a03010d0.JPG","a03010d079c62a3a0bec1bac4393f4f3"],["/static/media/SQ.1088bc5e.JPG","1088bc5e746e3efe58efeb45dd812d64"],["/static/media/STZ.d2763394.JPG","d27633946fe6de9f337a33b8a475a5be"],["/static/media/TGT.f2ed1532.JPG","f2ed1532a549c63666a7c890dc9c6a32"],["/static/media/TSLA.ac189eaa.JPG","ac189eaab6df9b59d4a2c00cfcacf60c"],["/static/media/TTWO.480d318f.JPG","480d318f68e15f3c56aa2d4919993259"],["/static/media/TWLO.6d76767e.JPG","6d76767e97d22b3a8ba536160d54dd67"],["/static/media/TXN.0ab46a72.JPG","0ab46a72b97f658600a5bfe168865210"],["/static/media/ULTA.1e8606ef.JPG","1e8606ef1b3802715b9dbb891add424d"],["/static/media/UNH.229e37dc.JPG","229e37dcd110cf9c9552565454350a80"],["/static/media/UPS.fd0cbf69.JPG","fd0cbf697f9653caa8057e4555e206fe"],["/static/media/V.63545d91.JPG","63545d91fce552ed79d62f7922879259"],["/static/media/WMT.b64ad52d.JPG","b64ad52db3a410d890ae410be1ed73e5"],["/static/media/WYNN.eb097f5a.JPG","eb097f5ad27db7a130909d452991b1bb"],["/static/media/XLNX.ef5efb83.JPG","ef5efb83b921b3029678ac1e1dea181f"],["/static/media/XOM.31e9157c.JPG","31e9157cdb8cf68b13c7bbc7f91caa36"],["/static/media/paypal-donate-button.5687b713.png","5687b71375875d8618d399a4f265c702"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});