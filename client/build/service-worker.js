"use strict";var precacheConfig=[["/index.html","320ea3619b59462f6476fde27cfce4a8"],["/static/css/main.f5a96a40.css","2f26486876027029a734dea74ad7b2d2"],["/static/js/main.cb178f00.js","2df5c3c5c2ec9d2f01dfd428b91af07e"],["/static/media/AAPL.2e93f421.JPG","2e93f421ea4005a7d5fe9f5cbe7f4696"],["/static/media/ADBE.0dc0cc06.JPG","0dc0cc061b4a25170ed42863e87f8207"],["/static/media/ADSK.b3525fd9.JPG","b3525fd954f60a1badafec0ae5d1c516"],["/static/media/AMGN.a77cedcd.JPG","a77cedcdff207dba5d06157528edc5f5"],["/static/media/AMZN.43ab0bd3.JPG","43ab0bd328378dff8dd6ad740fd78613"],["/static/media/AVGO.cfb45a08.JPG","cfb45a08d00721fbc20cc55397312639"],["/static/media/AXP.2b237902.JPG","2b237902d025b970f89d989ff583c654"],["/static/media/BA.f4f999f6.JPG","f4f999f67fc20d8c1b7896203ddfd576"],["/static/media/BABA.76b24842.JPG","76b248425905865aedf8de7985d7eb5f"],["/static/media/BIDU.2660d2ed.JPG","2660d2eda7f6be442594e557c79be336"],["/static/media/BKNG.e07af9d6.JPG","e07af9d6b468c18418b71584dad5625e"],["/static/media/C.69804f8b.JPG","69804f8b9926424a3567a803398032ed"],["/static/media/CAT.ea51c3a6.JPG","ea51c3a6a452e75201ab2aec14e53eac"],["/static/media/CELG.4eadff78.JPG","4eadff786542c483ca0ede3c96cb879b"],["/static/media/CMG.218869aa.JPG","218869aa5d8eb0410dcbc540fb64b70e"],["/static/media/COST.6331ac89.JPG","6331ac89db112b153742ebf662c5c5a5"],["/static/media/CRM.0d642d16.JPG","0d642d16c1aa3e9a9da8d5797de0ad59"],["/static/media/CVX.bd4d3c1e.JPG","bd4d3c1eb5953852b6cfd87789474d6d"],["/static/media/DE.3e1f3c82.JPG","3e1f3c82a47e92e09a249ad17ee6876f"],["/static/media/DIS.5a22856a.JPG","5a22856a970166fde75fa0119e40e3d7"],["/static/media/EA.7a8757ee.JPG","7a8757eebd7ba7a36bd7540b499e57b6"],["/static/media/FB.c0f680f8.JPG","c0f680f8ef609ca0e41edac69c231348"],["/static/media/FDX.f0857e81.JPG","f0857e815ba53438ee2cead81590259e"],["/static/media/GILD.2bb70cef.JPG","2bb70cef4fc6843a40aa247d1a1581f8"],["/static/media/GOOGL.0d4d394a.JPG","0d4d394aa83c43e68fd3467d67b1e99b"],["/static/media/GS.eb74ca29.JPG","eb74ca29a93a6ee22d5842b9b646de4a"],["/static/media/HD.047482ad.JPG","047482ad6be4c8fba89abf6ce2d5fb63"],["/static/media/IBM.81a6ff47.JPG","81a6ff47077a91001799eb55c49484b5"],["/static/media/JNJ.b3e610e7.JPG","b3e610e7c9ba0b9d05d563ad969fbf39"],["/static/media/JPM.d3d618a3.JPG","d3d618a36eadb5cd78acabf88650a83f"],["/static/media/LULU.dc49720a.JPG","dc49720a954f5b2324d9ae71deed90ba"],["/static/media/MCD.e925f000.JPG","e925f000d5ef6c8f377967eb1070b24c"],["/static/media/MSFT.2e10cf31.JPG","2e10cf31c8bbd8fbbc378fda95edbb38"],["/static/media/MU.e844c9c5.JPG","e844c9c57cd39e3503b6a00250550111"],["/static/media/NFLX.80804222.JPG","80804222197e57971fe5f57c9b8af41a"],["/static/media/NKE.3bffb434.JPG","3bffb434a75ee74ddeec600d619b19e7"],["/static/media/NTES.e5b45973.JPG","e5b459731de88aaa9c60d2b5b29bd205"],["/static/media/NVDA.68ec718d.JPG","68ec718d55657097a9e83ab5e43e1db7"],["/static/media/PEP.fb4861d3.JPG","fb4861d3b2931446f106915fd7a5c06b"],["/static/media/PYPL.90736791.JPG","90736791a9ab4bb3bbcdf6b28f3366b9"],["/static/media/SM.60cc94f4.JPG","60cc94f4b4226d474d6696101640b339"],["/static/media/SQ.c74ae03a.JPG","c74ae03abae15173385ca234bd3d1873"],["/static/media/STZ.3b8fe6ad.JPG","3b8fe6ad098f43106aaafc7fa7b70eca"],["/static/media/TGT.c65acbfe.JPG","c65acbfe7dc7be9ca9a963e76858caca"],["/static/media/TSLA.13194480.JPG","13194480023e07b3d92ee5be56389cfe"],["/static/media/TXN.1e8582f4.JPG","1e8582f47857e49c152eb8f0863f36ab"],["/static/media/UPS.fd43a8a2.JPG","fd43a8a20ef0e5cc13b84f51120bed18"],["/static/media/V.4ae26c56.JPG","4ae26c56e6299457eaa9e98d6fb33362"],["/static/media/WMT.fd2bb1d6.JPG","fd2bb1d65e606c373e8be78e7682f27e"],["/static/media/WYNN.6178ecd0.JPG","6178ecd025e45586a98b694b00b55043"],["/static/media/XOM.249cc156.JPG","249cc1561a03daa0efb38cf4e2531382"],["/static/media/paypal-donate-button.5687b713.png","5687b71375875d8618d399a4f265c702"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var d=new URL(e);return c&&d.pathname.match(c)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),d=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});