const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"林深时见璐"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"f02707bc9fe5397b51580a99cc3dff4c",url:"./2019/10/12/LaTeX安装教程.html"},{revision:"a85c5ac29657ea7765ff6c777b350151",url:"./2019/10/12/搭建个人博客.html"},{revision:"0a7aff441b00d8d3f633611c9de83a57",url:"./2020/01/28/微软系统使用手册.html"},{revision:"947facbbbfe59cc4bab4b38c2f636520",url:"./2020/01/30/博客主题优化.html"},{revision:"6fe08aa4bad220cb77f338e3068c672c",url:"./2020/02/09/Hexo博客部署PWA.html"},{revision:"61c2f1845ba58c160aa8e57413e5dba1",url:"./2020/02/12/个人信息隐私保护的法律及技术双重角度思考.html"},{revision:"465fb393d47a16f09ad7f7ebdbbdb02a",url:"./2020/02/17/Git专栏.html"},{revision:"1ccac92fa296e064ba4d65b741081e4a",url:"./2020/02/17/Markdown写作.html"},{revision:"6212b21a623bbb8ad53c34caa4795ea3",url:"./2020/02/23/Html系列.html"},{revision:"12e24d0f266b30d911d69ed1276f289c",url:"./2020/02/29/玩转树莓派（一）.html"},{revision:"0dc8e53f9f89de508fcf45993889a60b",url:"./2020/03/24/玩转树莓派（二）.html"},{revision:"60c60e782bb657e72f5229835a734446",url:"./404.html"},{revision:"36ec437169da0426d3c80a664e10bb15",url:"./about/index.html"},{revision:"b4cadadd48b52d8bd604f0b8628557b7",url:"./archives/2019/10/index.html"},{revision:"42f4a2635cb4eec91342de1e8e7aed56",url:"./archives/2019/index.html"},{revision:"0b012809abdf58870ccd8b8a27461c47",url:"./archives/2020/01/index.html"},{revision:"bff978970921ff0f6b23ca494c688be7",url:"./archives/2020/02/index.html"},{revision:"e3e75c6d0076427a6b52e9dd4d3ac593",url:"./archives/2020/03/index.html"},{revision:"2c11f151d6bbdd71e3e428a015c4539f",url:"./archives/2020/index.html"},{revision:"6b192ce997e284a29980f26376504929",url:"./archives/index.html"},{revision:"f5011c7e582078b93c4c1f19b45c820f",url:"./archives/page/2/index.html"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"e10d6ee1ad93e2b3989eeee63aa0e324",url:"./blogLog/index.html"},{revision:"293b6798fc2f7026d5fed04d86e82ad9",url:"./categories/Handbook/index.html"},{revision:"66e8e7ca90996d4de0f3e716a15677ca",url:"./categories/Handbook/Latex/index.html"},{revision:"b3b701a2ba104f177f1de37698379985",url:"./categories/Handbook/OS/index.html"},{revision:"0d69a4ffa8c91597ab2edb0ee67cf127",url:"./categories/Handbook/OS/Windows/index.html"},{revision:"d4a0a1aeae7931d7730040a68108a19d",url:"./categories/index.html"},{revision:"e8522f1ffcb05a3539391c5a015cbc31",url:"./categories/学术/index.html"},{revision:"3758e05843d0c9cca3a3194ca52d3ad6",url:"./categories/学术/法律/index.html"},{revision:"4d0d362274989d9076e2b513aa6c5953",url:"./categories/技术分享/Code/index.html"},{revision:"38e4adaeff5eb92fba6d6afe81d2578f",url:"./categories/技术分享/index.html"},{revision:"f5c994a49f42e41048130c5ebb73c549",url:"./categories/技术分享/Markdown/index.html"},{revision:"e416e5e488c00c996ff205d6c41dcdd0",url:"./categories/技术分享/前端/index.html"},{revision:"cb3a5340007698bb7ce208a5ee24df5a",url:"./categories/技术分享/博客/index.html"},{revision:"6c17ae097b227e5d20540b848c007fbe",url:"./categories/技术分享/树莓派/index.html"},{revision:"1255bc0f0ebf40969a60d788ef7c9a06",url:"./css/main.css"},{revision:"454bc56fd19872218bd1e02cb0a2ee3c",url:"./fonts/chinese-zodiac.woff2"},{revision:"acb6499bc55ae0b676144610d326cbab",url:"./guest/index.html"},{revision:"e50a150541a3ad07cc5d3cee86ccf0f2",url:"./index.html"},{revision:"13d5068b7c608684a54ba89be47f270f",url:"./js/algolia-search.js"},{revision:"9631924f730be981fe8f8c14eb2c0afe",url:"./js/bookmark.js"},{revision:"ab12b6c1c8c0942e41b90899a979b322",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"7853472ebb03e7cfa6ef710953af7f27",url:"./js/cursor/love.min.js"},{revision:"132ca5df84d23eaae20c38f712a2ac83",url:"./js/cursor/text.js"},{revision:"2e9f38867fa1f5a8988be716052c7c77",url:"./js/local-search.js"},{revision:"af3cc91ced18c5ef593f1d750812ade3",url:"./js/motion.js"},{revision:"c47528c6b7d3020a3dfd391c262dfebd",url:"./js/next-boot.js"},{revision:"ddbf5e290206e666bede5460cd254fe4",url:"./js/schemes/muse.js"},{revision:"cca41edb5ea3a6303f17c24610ad7174",url:"./js/schemes/pisces.js"},{revision:"eccfcd98115979851d7025dcbb051bb7",url:"./js/utils.js"},{revision:"094a006388d768b96f7c87c471e4f109",url:"./leancloud_counter_security_urls.json"},{revision:"864a144dbbc956381a47679ec57ab06c",url:"./lib/anime.min.js"},{revision:"188dd1a7583ffab4da32757242993f36",url:"./lib/font-awesome/bower.json"},{revision:"f10ad922af6a586dc9f160da6f562861",url:"./lib/font-awesome/css/font-awesome.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./lib/font-awesome/css/font-awesome.min.css"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./lib/font-awesome/fonts/fontawesome-webfont.woff2"},{revision:"c1b8d079c7049879838d78e0b389965e",url:"./lib/velocity/velocity.min.js"},{revision:"444faf512fb24d50a5dec747cbbe39bd",url:"./lib/velocity/velocity.ui.min.js"},{revision:"e24695997ebb1bf6c44b34dca2697445",url:"./LoveHeart/css/default.css"},{revision:"5d00f6045d75e3c8a19e48881d5c59d8",url:"./LoveHeart/index.html"},{revision:"bf793d486fd4b68e6c74d2663c11cfab",url:"./LoveHeart/js/functions.js"},{revision:"0bba994a307dd63a7103f2f5e442f2d1",url:"./LoveHeart/js/garden.js"},{revision:"10092eee563dec2dca82b77d2cf5a1ae",url:"./LoveHeart/js/jquery.js"},{revision:"5f1431000b778e0faa91d2337a6ffc7b",url:"./manifest.json"},{revision:"f75c0518cd7e0edb145b5afdcbdf7ba2",url:"./page/2/index.html"},{revision:"9b8448ee010a24062ebe0059775dc02c",url:"./tags/Git/index.html"},{revision:"8a9393e018c0305b44c55eeba475856e",url:"./tags/GitHub/index.html"},{revision:"c732774f239504f20c3588daf00d67b1",url:"./tags/Gitlab/index.html"},{revision:"06ee06013e05e8f1586d0cfcb5c3878f",url:"./tags/gulp/index.html"},{revision:"7a393800b8521b3ce811d190276d3af4",url:"./tags/Hexo/index.html"},{revision:"61b1865ca32e7670d4db609deae48199",url:"./tags/HTML/index.html"},{revision:"728a3ccb19ebf32c1795d504bc0d2eba",url:"./tags/index.html"},{revision:"93c88eca7716c8c12428f133d9b6a2da",url:"./tags/Latex安装/index.html"},{revision:"ce24422cb51cbd925ff7b4af6d095da0",url:"./tags/Mist-v7-7-0/index.html"},{revision:"a9bddbd920fb984a20c7d06f9a4691f3",url:"./tags/Next/index.html"},{revision:"18a115960ec38ad861a16f42e935282e",url:"./tags/PWA/index.html"},{revision:"e643fc07e137553869239b8c14769e59",url:"./tags/raspberry/index.html"},{revision:"87532272367a28fc52f765bf06827a6d",url:"./tags/V2ray/index.html"},{revision:"ed0846a216917e8176edd19b49be2ccb",url:"./tags/Windows10/index.html"},{revision:"d61a7ac12436da7a3e7e78c3f0ae061e",url:"./tags/写作/index.html"},{revision:"1c2e65dd3aed635c300cf552df3cbf22",url:"./tags/操作系统/index.html"},{revision:"9ac6a614318765bd1a448291de6a12e0",url:"./tags/树莓派/index.html"},{revision:"ead0220a7623ec609490497d5e93ef3e",url:"./tags/法律与技术/index.html"},{revision:"f33960111d25f9a61ea2df2f10649adf",url:"./tags/网络安全法/index.html"},{revision:"d05f18ea246b91e56186d8a828068850",url:"./tags/网络实名制/index.html"},{revision:"2b2fc140fb519fc7a0743e0ac5ebe141",url:"./tags/自定义主题/index.html"},{revision:"3f4e6facaeff7debc96eff21d1282038",url:"./tags/透明网关/index.html"},{revision:"4d5dbc81ac44a39593b286fdcd426826",url:"./tags/隐私保护/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();