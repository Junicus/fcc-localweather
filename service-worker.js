"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/fcc-localweather/index.html","2ab3759a532c296df4a0246e44905d9e"],["/fcc-localweather/static/css/main.86cad159.css","ffdd0ec504573ecde5916774f6cf7da1"],["/fcc-localweather/static/js/main.75108545.js","fcfec2d61c4d33fe17f6ec91a41e24dd"],["/fcc-localweather/static/media/daylight-background.a4f9f4cc.jpg","a4f9f4cc8bd8b44d9cefea4feab58b8e"],["/fcc-localweather/static/media/default-background.87e25c15.jpg","87e25c1573443fd40053d432cdfe48b1"],["/fcc-localweather/static/media/night-background.9e4c428d.jpg","9e4c428d4936c6f2b5a7355b2446a938"],["/fcc-localweather/static/media/rainy-background.fed3cb95.jpg","fed3cb95bf1bcddf5fdb62c800aa4e4f"],["/fcc-localweather/static/media/snow-background.1414c30b.jpg","1414c30b2f94b80e91b91922a2383a6f"],["/fcc-localweather/static/media/weathericons-regular-webfont.1cd48d78.woff2","1cd48d78f06d33973d9d761d426e69bf"],["/fcc-localweather/static/media/weathericons-regular-webfont.4618f0de.ttf","4618f0de2a818e7ad3fe880e0b74d04a"],["/fcc-localweather/static/media/weathericons-regular-webfont.4b658767.eot","4b658767da6bd92ce2addb3ce512784d"],["/fcc-localweather/static/media/weathericons-regular-webfont.8cac70eb.woff","8cac70ebda3f23ce472110d9f21e8593"],["/fcc-localweather/static/media/weathericons-regular-webfont.ecaf8b48.svg","ecaf8b481729b18f6a8494d9f691cdae"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/fcc-localweather/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});