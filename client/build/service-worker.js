"use strict";var precacheConfig=[["/index.html","2b133473ff7e5884caf4664050ec177b"],["/static/css/main.844e4bea.css","51377751b4cef6cba67e71270aca40e3"],["/static/js/main.723a3e3b.js","07d147a13c5bf979974bde82b9a18b2e"],["/static/media/AAPL.ec7d31ed.JPG","ec7d31edf3bd6da21818ef42f7ad358c"],["/static/media/ACN.15340abc.JPG","15340abc7db9e84c6a8dc9b93a3ee100"],["/static/media/ADBE.b8211bcf.JPG","b8211bcf5fdcdef2626d6be89444a9f6"],["/static/media/ADP.68d9fb3e.JPG","68d9fb3e3ef03e519f6517a96caf77a5"],["/static/media/ADSK.b84d7873.JPG","b84d7873bc4be803af361869d5c7fc3a"],["/static/media/AGN.10ee348a.JPG","10ee348a833727a5b5cdc09037b336e9"],["/static/media/AMGN.f264031a.JPG","f264031a86b0f32372fc629e32c42c82"],["/static/media/AMZN.d993f9ae.JPG","d993f9ae5b8b34be29688a93671dac36"],["/static/media/ANET.13bcf6d9.JPG","13bcf6d9a9f6b55848fec232cff04b8e"],["/static/media/AVGO.dedea27f.JPG","dedea27f328c11c10646c06f22c147f6"],["/static/media/AXP.e06018f5.JPG","e06018f5686d73fefb12501f01e4d0e5"],["/static/media/BA.d06646ac.JPG","d06646acd0b2825d81c6a1bc7f577f91"],["/static/media/BABA.2e0f2879.JPG","2e0f287975a8a9729fe3b9099d5b993b"],["/static/media/BIDU.0a51f346.JPG","0a51f3462cd1259528486a4f7531779f"],["/static/media/BIIB.f3ddddf7.JPG","f3ddddf737512f996f31c48a6cccbc8d"],["/static/media/BKNG.7cc2f191.JPG","7cc2f1912e89ec8bb99b813c93a02957"],["/static/media/C.d397e724.JPG","d397e724b9837721aec1cb127fcbd203"],["/static/media/CAT.5f72360a.JPG","5f72360aa180063a92be1a15a0d6ca97"],["/static/media/CMG.7845f01c.JPG","7845f01c296edebc32bd58f8c583af49"],["/static/media/COST.4e0d94fb.JPG","4e0d94fb77b84a0807f7f332e799a5b5"],["/static/media/CRM.fbf31a57.JPG","fbf31a5735fe6bc57bcfcc719cf49b86"],["/static/media/CVX.8780629f.JPG","8780629f6b0e8feffe6d8877d6461a85"],["/static/media/DE.136c0784.JPG","136c078491019b26cc0df3897391a147"],["/static/media/DIS.b9dd9ec9.JPG","b9dd9ec98bb9df7767b3ff901efb9808"],["/static/media/DPZ.e604e3d3.JPG","e604e3d311802094d9e1d9968ab155f9"],["/static/media/EA.0f999c4f.JPG","0f999c4f71dce22a66d19533f4b7c4c6"],["/static/media/FB.0186d410.JPG","0186d4104d44a63679748aecf763b667"],["/static/media/FDX.8aa763da.JPG","8aa763da3beb33e8815a6195a066b2cd"],["/static/media/GILD.96b16af9.JPG","96b16af95043e1cf32dbb3141e301675"],["/static/media/GOOGL.a1300799.JPG","a1300799e35e24fd04af1a962f8ce675"],["/static/media/GS.b9f8a3e9.JPG","b9f8a3e985b983ec296606a28ac7117f"],["/static/media/HD.92146b5b.JPG","92146b5b3f18c2b531c72777437d410c"],["/static/media/IBM.e1ea3704.JPG","e1ea37044fde7671850273cf54db48e6"],["/static/media/JNJ.04c1efce.JPG","04c1efcea58332f070034bf70192af05"],["/static/media/JPM.c3f53e28.JPG","c3f53e28c80ed3d9483f9f1d24c7d033"],["/static/media/LOW.bb23cd2c.JPG","bb23cd2c407e16cc4a37d0e375ad7858"],["/static/media/LULU.3ade638d.JPG","3ade638dd8bebdddf6172001fb72c628"],["/static/media/MA.7bef6139.JPG","7bef613973d3b4917c06e4769acb34e2"],["/static/media/MCD.92f2e9aa.JPG","92f2e9aa335ef99348feb26abeaf0dde"],["/static/media/MSFT.b7bdbe1a.JPG","b7bdbe1aaba95d1e1b5e95655f43f907"],["/static/media/NFLX.660b3617.JPG","660b36177848a6786e2d1d802739b28f"],["/static/media/NKE.58d4c70d.JPG","58d4c70d93687b46b95e1b9216c95bc1"],["/static/media/NOW.67f1f331.JPG","67f1f3313dc7f69b6e14b23b8f212989"],["/static/media/NTES.872bf787.JPG","872bf7870c22b75f2cc6ecb26ce25721"],["/static/media/NVDA.1402b91f.JPG","1402b91fe1edd58dd46f604a0ed321cc"],["/static/media/PEP.269eed56.JPG","269eed564d58374df738ca02deaf225b"],["/static/media/PYPL.d30830c1.JPG","d30830c15fcf1ed363e7c25c7a5debe7"],["/static/media/QCOM.130e99a8.JPG","130e99a86c3b7d51e336ed23c4249fed"],["/static/media/ROKU.eeb1cc52.JPG","eeb1cc52572517ca1b224bc850603227"],["/static/media/SBUX.1f5133a4.JPG","1f5133a4caa5ab2b715216af0786cae6"],["/static/media/SM.8782ff85.JPG","8782ff8562e36aea406936e9a14c5ced"],["/static/media/SQ.0fafe229.JPG","0fafe229bef61a3a232c045c900324e3"],["/static/media/STZ.b8950733.JPG","b89507332e42b0fec8c2c03111ba3f56"],["/static/media/TGT.d768fe19.JPG","d768fe19e169204849bd3131f493bb45"],["/static/media/TSLA.01293f44.JPG","01293f447e072094dd3989e9a2c07843"],["/static/media/TTWO.f35bac39.JPG","f35bac397311eb5d205677698d57c83c"],["/static/media/TWLO.d4d64df6.JPG","d4d64df603dbbd240589048a250189be"],["/static/media/TXN.5a65fae6.JPG","5a65fae6f8cec62d4d21cb3ef700bdf9"],["/static/media/ULTA.f8a6f82c.JPG","f8a6f82c1548ebfe30a6c3874b0aaf26"],["/static/media/UNH.b4002886.JPG","b4002886ebbac07eda50526883b17d7f"],["/static/media/UPS.35b28fec.JPG","35b28fecce25e254cc494e661fa5a053"],["/static/media/V.2e7e3754.JPG","2e7e37540ae2e58bc24a558cefded4dd"],["/static/media/WMT.407db58b.JPG","407db58b02adc28e1ff241a4f399c09e"],["/static/media/WYNN.475c6f00.JPG","475c6f00ce07cd76d469f836e0bbf87a"],["/static/media/XLNX.bfa8d7e1.JPG","bfa8d7e1c0951e645d8e460de550cbad"],["/static/media/XOM.e79bab7f.JPG","e79bab7f16ac417a62650b3a5e8dad62"],["/static/media/paypal-donate-button.5687b713.png","5687b71375875d8618d399a4f265c702"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});