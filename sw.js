const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"林深时见璐"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"f941a96ac7b7b63f1d01f7c1d76c14b2",url:"./2019/10/12/LaTeX安装教程.html"},{revision:"7f4340a390bef6cd8f0ef4a31edcad65",url:"./2019/10/12/搭建个人博客.html"},{revision:"f0ae901c78b4b47bea8040525b0fd990",url:"./2020/01/28/微软系统使用手册.html"},{revision:"46e434f98d5fc6b535104c9e52a98e6e",url:"./2020/01/30/博客主题优化.html"},{revision:"f04d56dd5e971ff12d00c3d951ce2138",url:"./2020/02/09/Hexo博客部署PWA.html"},{revision:"63c71ae792f727a47beec1a52335b2f3",url:"./2020/02/12/个人信息隐私保护的法律及技术双重角度思考.html"},{revision:"0a4c857e4c400cdfc2761fd424d57ba9",url:"./2020/02/17/Git专栏.html"},{revision:"e42dcfb1cbf9456ac1a01b07cebcd016",url:"./404.html"},{revision:"9ab8ef94bd33659c3cfd17a05a6e5f6e",url:"./about/index.html"},{revision:"8a9dd3a678cfd63accc62c60de2db605",url:"./archives/2019/10/index.html"},{revision:"c6592f76cf7ebe08d72e60d1e120ae5c",url:"./archives/2019/index.html"},{revision:"dde6d63ba2e63ff05e2588b20d8dcad3",url:"./archives/2020/01/index.html"},{revision:"12d8189091cd956dea93940a55a2e644",url:"./archives/2020/02/index.html"},{revision:"f103b041174816f683b749803eb57b13",url:"./archives/2020/index.html"},{revision:"1d02eb0574c2ad061f64e9576f538f79",url:"./archives/index.html"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"c5fe02291b5ced8fd0c1d6efa632671b",url:"./blogLog/index.html"},{revision:"0f940e2e4bc45e82ca6fce76099e2b8e",url:"./categories/Git/index.html"},{revision:"0b82341eaf4eca664e4e53cfdb6ff8d7",url:"./categories/Handbook/index.html"},{revision:"99ffe9859b8fdbba198c600f4cfc6f56",url:"./categories/Handbook/Windows/index.html"},{revision:"835d234c515c9c55d7a49557b16702c3",url:"./categories/index.html"},{revision:"28263a4ef13b8afe80e5beb288229ed9",url:"./categories/Latex/index.html"},{revision:"180f7214d6efb6871d370b1ba02f291a",url:"./categories/技术分享/index.html"},{revision:"be30566f34880a3f979fbe92fd1a8dc0",url:"./categories/技术分享/博客/index.html"},{revision:"69680b1472405a8522f804de742587e8",url:"./categories/法律/index.html"},{revision:"a585b342db6dc6cab4240ce4bda64334",url:"./categories/法律/安全法/index.html"},{revision:"2247635c43277e4edbb39cc504d742db",url:"./css/main.css"},{revision:"454bc56fd19872218bd1e02cb0a2ee3c",url:"./fonts/chinese-zodiac.woff2"},{revision:"d664cdd307a0d14659a5babc9731440d",url:"./guest/index.html"},{revision:"f410600744e316b95b05f0bb040f2c19",url:"./index.html"},{revision:"13d5068b7c608684a54ba89be47f270f",url:"./js/algolia-search.js"},{revision:"9631924f730be981fe8f8c14eb2c0afe",url:"./js/bookmark.js"},{revision:"2e9f38867fa1f5a8988be716052c7c77",url:"./js/local-search.js"},{revision:"af3cc91ced18c5ef593f1d750812ade3",url:"./js/motion.js"},{revision:"c47528c6b7d3020a3dfd391c262dfebd",url:"./js/next-boot.js"},{revision:"ddbf5e290206e666bede5460cd254fe4",url:"./js/schemes/muse.js"},{revision:"cca41edb5ea3a6303f17c24610ad7174",url:"./js/schemes/pisces.js"},{revision:"eccfcd98115979851d7025dcbb051bb7",url:"./js/utils.js"},{revision:"d3282a11f143e41ebf909bf79aea438f",url:"./leancloud_counter_security_urls.json"},{revision:"864a144dbbc956381a47679ec57ab06c",url:"./lib/anime.min.js"},{revision:"188dd1a7583ffab4da32757242993f36",url:"./lib/font-awesome/bower.json"},{revision:"f10ad922af6a586dc9f160da6f562861",url:"./lib/font-awesome/css/font-awesome.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./lib/font-awesome/css/font-awesome.min.css"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./lib/font-awesome/fonts/fontawesome-webfont.woff2"},{revision:"c1b8d079c7049879838d78e0b389965e",url:"./lib/velocity/velocity.min.js"},{revision:"444faf512fb24d50a5dec747cbbe39bd",url:"./lib/velocity/velocity.ui.min.js"},{revision:"d2bbee26489198238c71b196ac920e0c",url:"./LoveHeart/css/default.css"},{revision:"d8ba038de51139b7a7892807db714525",url:"./LoveHeart/index.html"},{revision:"bf793d486fd4b68e6c74d2663c11cfab",url:"./LoveHeart/js/functions.js"},{revision:"0bba994a307dd63a7103f2f5e442f2d1",url:"./LoveHeart/js/garden.js"},{revision:"10092eee563dec2dca82b77d2cf5a1ae",url:"./LoveHeart/js/jquery.js"},{revision:"13fe9e11b26fb90d3f34c1f810b3a88d",url:"./manifest.json"},{revision:"2f28134936cf0818c7004a041c2bb56f",url:"./tags/CPU/index.html"},{revision:"a0016cf1d4f1c579cdd80af5e0c157ef",url:"./tags/Git/index.html"},{revision:"17e6e6f8713364347bc4f4d9e2ce53e3",url:"./tags/GitHub/index.html"},{revision:"02bce9cb4530da6bb60435bb8b0f9557",url:"./tags/Gitlab/index.html"},{revision:"9978d388f5f15c49298462ade7a28744",url:"./tags/gulp/index.html"},{revision:"98676642f8c4937af35b10d1605bca0d",url:"./tags/Hexo/index.html"},{revision:"f99f08a45ea55136b79003510cd2765c",url:"./tags/index.html"},{revision:"0e860a01633e2694c9f40b1f53dad433",url:"./tags/Latex安装/index.html"},{revision:"e564822e50d555a3f796968792a25039",url:"./tags/Mist-v7-7-0/index.html"},{revision:"b95f421a7f7c52b5e7bb50cc5b53a052",url:"./tags/Next/index.html"},{revision:"1fe5693b20b0e7460f3af67ef1736b77",url:"./tags/PWA/index.html"},{revision:"43cdd2ac834ee2ae2c165ab314db36ff",url:"./tags/wifi/index.html"},{revision:"cb9ca5801779fb145b8a34dfe57d5e59",url:"./tags/Windows10/index.html"},{revision:"749161fdf8cac6f76fd2fad046757f5c",url:"./tags/内存型号/index.html"},{revision:"6bd91655bc62880ee410ce15ebe9424e",url:"./tags/录屏/index.html"},{revision:"cd9260e1fe3ac3fa7ed7465c67b97415",url:"./tags/法律与技术/index.html"},{revision:"18720412cae99b90a8998acd4a87b0b3",url:"./tags/端口占用查看/index.html"},{revision:"9decf0e05591d2a42af04a6cc768e606",url:"./tags/网卡/index.html"},{revision:"c842a272d6282e2ba3d14c248e280a21",url:"./tags/网络实名制/index.html"},{revision:"26252153cc1a1be743d86cea4a821cdd",url:"./tags/自定义主题/index.html"},{revision:"45137e028c5a37076bf183f236a1a63b",url:"./tags/隐私保护/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();