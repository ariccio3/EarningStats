"use strict";var precacheConfig=[["/index.html","301560138ceeb446ee3daf1b412618f2"],["/static/css/main.f5a96a40.css","2f26486876027029a734dea74ad7b2d2"],["/static/js/main.6fdecb96.js","68900a44cd57575e6525a367df2142b3"],["/static/media/AAPL.e6f6066e.JPG","e6f6066e4fe9c0e6b7132a3739e12c7f"],["/static/media/ADBE.85dd3a13.JPG","85dd3a1309c29c4b6b49f33182a79f6f"],["/static/media/ADSK.f3fef9c9.JPG","f3fef9c962c204f61f133ee2bdd2e2f3"],["/static/media/AMGN.f13a0e9d.JPG","f13a0e9dc725bf0d961ee76dbd9a9137"],["/static/media/AMZN.ab92ca4e.JPG","ab92ca4eedd76e495ce6677832070ba4"],["/static/media/AVGO.fde7fd9c.JPG","fde7fd9c990b4bcac790c633f5d4914d"],["/static/media/AXP.bc32c3bc.JPG","bc32c3bc27450f8ecd767b902b4e6621"],["/static/media/BA.6d7aee52.JPG","6d7aee52facdee80841b85fee4365a80"],["/static/media/BABA.993bab1f.JPG","993bab1f7eed45e709c216e2da2e512e"],["/static/media/BIDU.cb9dd3d8.JPG","cb9dd3d8892c7be936b260a16a76ec69"],["/static/media/BKNG.796b0218.JPG","796b0218009498d68535ff417f714b7f"],["/static/media/C.da525f08.JPG","da525f0884e3064e20aac51dd5632cec"],["/static/media/CAT.7ce58e4e.JPG","7ce58e4e2d71fe875ed12d0ff137da7f"],["/static/media/CELG.fbd59cdf.JPG","fbd59cdf46c338752aedf7465a132887"],["/static/media/CMG.d2fd1150.JPG","d2fd11504e12bcc91d00aab201e845a8"],["/static/media/COST.83f155cc.JPG","83f155cc1db524d52ed53c96bd59aa63"],["/static/media/CRM.7627fe42.JPG","7627fe428c14d4c7c91d118412d4c7d2"],["/static/media/CVX.9e047982.JPG","9e0479829e2ad8db951c4af653b938df"],["/static/media/DE.0fbceca2.JPG","0fbceca2dd12ee6c60bf43a35aab7f1a"],["/static/media/DIS.74bd24c8.JPG","74bd24c8336ac90c8f92aaefee4557fd"],["/static/media/EA.99d71831.JPG","99d71831ead9502f6b3085aa07271ec1"],["/static/media/FB.630c4af8.JPG","630c4af8f640e6f7d7bf6a951bdc5e04"],["/static/media/FDX.d6d1a7dc.JPG","d6d1a7dc44232b6da0c639291e15b4aa"],["/static/media/GILD.d7853ca8.JPG","d7853ca85d45a7a10330adcbad99ffe8"],["/static/media/GOOGL.cf2390ae.JPG","cf2390aeb0c63db1b79f7f0077f36f27"],["/static/media/GS.98f91125.JPG","98f91125188bc7b03c279b94383ddbce"],["/static/media/HD.3392dcff.JPG","3392dcff141a48df5495cc750a164d85"],["/static/media/IBM.41e8d4af.JPG","41e8d4af2f156b5690c92619a878a451"],["/static/media/JNJ.16754d84.JPG","16754d84755719dee1f5b4af7de311b7"],["/static/media/JPM.f38c5e60.JPG","f38c5e604c2dacc0b752a8cd8ee820cf"],["/static/media/LULU.97eb655f.JPG","97eb655f07ff7e766c317ecbfa6d5ce1"],["/static/media/MCD.1d9cc5a6.JPG","1d9cc5a6519efabe12bf227369e43341"],["/static/media/MSFT.41df78b1.JPG","41df78b1a706fe72fee7edf08240abc6"],["/static/media/MU.4e1c7c5d.JPG","4e1c7c5d4a98a1b35f79316bb2f29b32"],["/static/media/NFLX.2e604b3a.JPG","2e604b3a783d6f4b3182363690790fee"],["/static/media/NKE.ddda139a.JPG","ddda139aa627544f253047db8d1dbb6b"],["/static/media/NTES.de924be9.JPG","de924be959248edf7c0d7ae299960652"],["/static/media/NVDA.3ab95105.JPG","3ab95105f4178cf8287191b9d34e805a"],["/static/media/PEP.c16ecbb8.JPG","c16ecbb823b30010ed12d74486e72812"],["/static/media/PYPL.6ee1c7a4.JPG","6ee1c7a4584d1e16f24864b48343bc7b"],["/static/media/SM.60cc94f4.JPG","60cc94f4b4226d474d6696101640b339"],["/static/media/SQ.2df5af94.JPG","2df5af94b165869fbf2c3bc056c129f5"],["/static/media/STZ.6c75f47c.JPG","6c75f47c406b4748c2538697de2132a9"],["/static/media/TGT.beb88d89.JPG","beb88d89402837b472b6e881924eba90"],["/static/media/TSLA.87114f9d.JPG","87114f9d0b86c7e05ddf80c158dd0a0c"],["/static/media/TXN.5b69d702.JPG","5b69d70260e301ec32039a7d5f1a6445"],["/static/media/UPS.fdf51bee.JPG","fdf51bee4bbb127cd3b7f3affb9bee44"],["/static/media/V.eff1369f.JPG","eff1369fd4ccf68ea98ccd3d8f716284"],["/static/media/WMT.d471b566.JPG","d471b566ca3754898a839640f10f635e"],["/static/media/WYNN.738507b4.JPG","738507b4670df4c3115c689b6f8f2eac"],["/static/media/XOM.a2e6f962.JPG","a2e6f9627482ac04fdfc0e6a5c23dc51"],["/static/media/paypal-donate-button.5687b713.png","5687b71375875d8618d399a4f265c702"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});