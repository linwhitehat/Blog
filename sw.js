const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"林深时见璐"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"a09690ab17d781b4a760e47b77a32cf6",url:"./404.html"},{revision:"d88c63a8b064a9497cf13764bc9da4d5",url:"./about/index.html"},{revision:"477d3adbb194dd211b201afcd75cfc26",url:"./archives/2019/10/index.html"},{revision:"8633cbd394b78766bcf93710552b5594",url:"./archives/2019/index.html"},{revision:"1f4e2538f056714f8a424e1c60a9d404",url:"./archives/2020/01/index.html"},{revision:"b4712a408a18f289273a373b2a75bd60",url:"./archives/2020/02/index.html"},{revision:"0b582fc501e0aaeda6047ca1ebf74457",url:"./archives/2020/index.html"},{revision:"9fa9a90675ae54340ddaa1536893cac8",url:"./archives/index.html"},{revision:"6d73eb94ef4c0959ae474578f571dc4f",url:"./categories/Handbook/index.html"},{revision:"69fdac900d335c7dbf9ea84378af3fd4",url:"./categories/Handbook/Windows/index.html"},{revision:"5f27cafe65e16589bd8589aab66f2bf2",url:"./categories/index.html"},{revision:"b13692c3c30946fb91bdf59e3e9a9484",url:"./categories/Latex/index.html"},{revision:"3ea99d28028b243f23191eb0f10225c7",url:"./categories/技术分享/index.html"},{revision:"c1f083158aa9305766beefdd4f07be07",url:"./categories/技术分享/博客/index.html"},{revision:"e1eae7eddec115b0d0150362ba56c1f9",url:"./categories/法律/index.html"},{revision:"68b1f433a50f7b65f1ca4d3270417f2c",url:"./categories/法律/安全法/index.html"},{revision:"cc198dca2b4a6368517823311f344160",url:"./css/main.css"},{revision:"454bc56fd19872218bd1e02cb0a2ee3c",url:"./fonts/chinese-zodiac.woff2"},{revision:"3bbdd0e432a70b27e88866d892e2d07e",url:"./Hexo博客部署PWA.html"},{revision:"33d78714b721e68772b113cc6d4664fb",url:"./index.html"},{revision:"13d5068b7c608684a54ba89be47f270f",url:"./js/algolia-search.js"},{revision:"9631924f730be981fe8f8c14eb2c0afe",url:"./js/bookmark.js"},{revision:"2e9f38867fa1f5a8988be716052c7c77",url:"./js/local-search.js"},{revision:"af3cc91ced18c5ef593f1d750812ade3",url:"./js/motion.js"},{revision:"c47528c6b7d3020a3dfd391c262dfebd",url:"./js/next-boot.js"},{revision:"ddbf5e290206e666bede5460cd254fe4",url:"./js/schemes/muse.js"},{revision:"cca41edb5ea3a6303f17c24610ad7174",url:"./js/schemes/pisces.js"},{revision:"eccfcd98115979851d7025dcbb051bb7",url:"./js/utils.js"},{revision:"f635a6b4a1b16929ff14a972eab1f58e",url:"./LaTeX安装教程.html"},{revision:"62dd0db5c126bc760f45cf22a3e8f3d0",url:"./leancloud_counter_security_urls.json"},{revision:"864a144dbbc956381a47679ec57ab06c",url:"./lib/anime.min.js"},{revision:"188dd1a7583ffab4da32757242993f36",url:"./lib/font-awesome/bower.json"},{revision:"f10ad922af6a586dc9f160da6f562861",url:"./lib/font-awesome/css/font-awesome.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./lib/font-awesome/css/font-awesome.min.css"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./lib/font-awesome/fonts/fontawesome-webfont.woff2"},{revision:"c1b8d079c7049879838d78e0b389965e",url:"./lib/velocity/velocity.min.js"},{revision:"444faf512fb24d50a5dec747cbbe39bd",url:"./lib/velocity/velocity.ui.min.js"},{revision:"d2bbee26489198238c71b196ac920e0c",url:"./LoveHeart/css/default_dev.css"},{revision:"d2bbee26489198238c71b196ac920e0c",url:"./LoveHeart/css/default.css"},{revision:"1cce3cdc1d7b2d90ed045c5bd21089da",url:"./LoveHeart/index.html"},{revision:"e54c4c3bf2cb0589247b029821f952b4",url:"./LoveHeart/js/functions_dev.js"},{revision:"bf793d486fd4b68e6c74d2663c11cfab",url:"./LoveHeart/js/functions.js"},{revision:"f450b5e2edbd84e8d8243bf39755fa39",url:"./LoveHeart/js/garden_dev.js"},{revision:"0bba994a307dd63a7103f2f5e442f2d1",url:"./LoveHeart/js/garden.js"},{revision:"10092eee563dec2dca82b77d2cf5a1ae",url:"./LoveHeart/js/jquery.js"},{revision:"13fe9e11b26fb90d3f34c1f810b3a88d",url:"./manifest.json"},{revision:"f12724e226a32ba0c45bd6c981886083",url:"./tags/GitHub/index.html"},{revision:"c4a9215f8f9d08746870f078d5b7c11e",url:"./tags/gulp/index.html"},{revision:"5e8b4780fb2a96016164f84d457b84d6",url:"./tags/Hexo/index.html"},{revision:"d1799b2cef0d8c8f28e30cb6a07cd9d4",url:"./tags/index.html"},{revision:"b159adfc2507dabdc11cb2dab2642de2",url:"./tags/Latex安装/index.html"},{revision:"b792e5891d5f83f0012b415ac6e11e61",url:"./tags/Mist/index.html"},{revision:"e9e48937baf139b2713f36747e50fd68",url:"./tags/Next/index.html"},{revision:"7ae01536466896efad41f3517b132380",url:"./tags/PWA/index.html"},{revision:"c3757b6183891d75fec0c720b7137c96",url:"./tags/wifi/index.html"},{revision:"7a72aaa3f1fb085a818a7245ef141d02",url:"./tags/Windows10/index.html"},{revision:"a88901e5c946857d5cd29056130dca58",url:"./tags/内存型号/index.html"},{revision:"4fd6e809cb925f7d02635585fa48f6bd",url:"./tags/录屏/index.html"},{revision:"89cf3e1a0410bd744631db5761be72a8",url:"./tags/法律与技术/index.html"},{revision:"b0cee367e019426c877169d908f3d457",url:"./tags/端口占用查看/index.html"},{revision:"ca0b71b62c06a947cee6d8cabc16e5b5",url:"./tags/网络实名制/index.html"},{revision:"534d0e378ff1e44df2ad9304262e8335",url:"./tags/隐私保护/index.html"},{revision:"bf734d350bca58fdc71de0ef23e9c865",url:"./个人信息隐私保护的法律及技术双重角度思考.html"},{revision:"4efb001d6025da04f2dfc2139148a476",url:"./博客主题优化.html"},{revision:"2ccf6ad69951f50733b5e94b862950dc",url:"./微软系统使用手册.html"},{revision:"e55da2e7c5d2d6ad98dc4e701369a35d",url:"./搭建个人博客.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();