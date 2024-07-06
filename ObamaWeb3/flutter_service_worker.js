'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1d3bce1c6f7aa9661d92839b2204c95f",
"index.html": "02e43b6f1a3d02f7bf552d6f1487e8c6",
"/": "02e43b6f1a3d02f7bf552d6f1487e8c6",
"main.dart.js": "e26d895e40e8b3058d7688a471ffcec8",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "647fdb6d4bafda01770fdbd9cc188758",
"icons/Icon-192.png": "e951893ab11d4ccea464a1ffbef69775",
"icons/Icon-maskable-192.png": "e951893ab11d4ccea464a1ffbef69775",
"icons/Icon-maskable-512.png": "2567fd1d7baf4bada17e468f8d289018",
"icons/Icon-512.png": "2567fd1d7baf4bada17e468f8d289018",
"manifest.json": "55a043b012ed8d0f83e482775f9f6911",
"assets/AssetManifest.json": "4e0ea62badf5ec34f368b756e6549dbb",
"assets/NOTICES": "5f64ae44c198653ee357bc0cbfa3009e",
"assets/FontManifest.json": "128381ed47c9afc4e969d93a9138961f",
"assets/AssetManifest.bin.json": "6ffe337724dea6f72020ffe10135f229",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c091ac265d8d30c8081e1d50c3c581de",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "54137f0105881e19b4c01aba139410bf",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b467b7a27b31018e7f6512f4299e7479",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "cdaa5231bf046c79ad81cb45b76bd01b",
"assets/fonts/MaterialIcons-Regular.otf": "d163c513e44264fdeff8ab72e89bc2a6",
"assets/assets/images/DenisSilva.jpg": "f6820a308fdbeb516f7734cf013863da",
"assets/assets/images/nelson.jpg": "440202e0fdd5cd18ed4a7e7474812f4c",
"assets/assets/images/AmandaMaria.jpg": "4db39005f015a26da828b57b28fa89f8",
"assets/assets/images/DennysLeite.png": "c5c1c6ef03edd26eb258c290f5903304",
"assets/assets/images/remne.jpg": "07c820349738de249c379b236fe3bab9",
"assets/assets/images/gmail.png": "08e3a2cb34f01045696ef81b3439c512",
"assets/assets/images/MayaraCabral.jpg": "8fda67a3460e010a3a78b741ab92d154",
"assets/assets/images/img.jpg": "5d701bc29a06e9f31330ca5caaefc125",
"assets/assets/images/imd.png": "62f0fd081c764d908a04c270c34c5030",
"assets/assets/images/nopic.jpg": "9a176aa2bf0ab1e6a728b8ea9d3e8ff8",
"assets/assets/images/i1.png": "0b7044d0fc88112961e88d0af28dc0b8",
"assets/assets/images/gilfe.png": "2f9423261c7916bdd514c93460cafda2",
"assets/assets/images/prod.jpg": "2b5cc9e01145f080e71886e30de5cb25",
"assets/assets/images/test.png": "5b97a66ca5344816ee0a6c94159078e1",
"assets/assets/images/i2.png": "b0d6c0fdd8978018ff5b024c1a88bbb8",
"assets/assets/images/icone.png": "b062b33a2db4effa794be6d3a2ac8775",
"assets/assets/images/ufrn.png": "968b8b444bc0931ec51c8490d1183214",
"assets/assets/images/i3.png": "cfee4da19d1f9bfe61d554828179dc5f",
"assets/assets/images/logo.png": "5ec6f9a715056697cd3cd8f17367c4e3",
"assets/assets/images/animate.gif": "3d11d5626a6869895d4a3c374ab7c8df",
"assets/assets/images/Fl%25C3%25A1viaViana.jpg": "d531dd5801011d301c33a889c6684696",
"assets/assets/images/img2.jpg": "66667c9e79d19d622a78ec0028995c4a",
"assets/assets/images/ppgite.png": "ba0506b42a3406d77402d86ac6a2616f",
"assets/assets/images/i4.png": "42ac9bb301c76ebe1e601c57ef270932",
"assets/assets/images/sala-de-aula.png": "edbf361756c7190c509282676e884a5f",
"assets/assets/images/SaraSilva.png": "f90317d71d10a6c3bb582615fc6fca34",
"assets/assets/images/AnaCarolina.jpg": "b616b6aed0c8fea589f4384994bd70a1",
"assets/assets/images/not-found.png": "169f85e67b9b39591d06f74807367209",
"assets/assets/images/LucasToshio.jpg": "235e8f88411c32fbc122d878a93e9a8e",
"assets/assets/images/meet.png": "d81235519f61d2952b44a4ce89d67c20",
"assets/assets/images/GabrielBarreto.png": "b71d3ae755e435be6a3fab478aea4f3b",
"assets/assets/images/client.jpg": "60315df2e5c9f3c8349e76eba9752404",
"assets/assets/images/forms.png": "542c7937d116bead0e43c35fc9e4ffd6",
"assets/assets/images/IgorRauan.jpg": "bb8ce253593b6178d836f13ecbb0506f",
"assets/assets/images/GiluizaCatarina.jpeg": "100afba1775add2725f379c384606edb",
"assets/assets/fonts/Raleway-Regular.ttf": "d95649da7dfb965a289ac29105ce8771",
"assets/assets/fonts/Raleway-Italic.ttf": "5579b5fda3005b7d349336b3425b9f89",
"assets/assets/fonts/Raleway-Bold.ttf": "21c82294041b1504a5cbe4f566c8acd6",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
