const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"林深时见璐"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"a5763353be859f33e027d922d1d3ddc7",url:"./2019/10/12/LaTeX安装教程.html"},{revision:"ac997360f01c4cd91d46538bec7b3814",url:"./2019/10/12/搭建个人博客.html"},{revision:"d47bfb1a0de64560967f33dc52893bb8",url:"./2020/01/28/微软系统使用手册.html"},{revision:"fb694a1a63118bfc27c4707b51f56e19",url:"./2020/01/30/博客主题优化.html"},{revision:"57cfe1b4151b2d31759ba4f9274539d2",url:"./2020/02/09/Hexo博客部署PWA.html"},{revision:"1ad2c642b230c0f2037aa4898e7eb975",url:"./2020/02/12/个人信息隐私保护的法律及技术双重角度思考.html"},{revision:"81fffd155a28afbd0be81e95bc8c263e",url:"./2020/02/17/Git专栏.html"},{revision:"dca42ba5dd89802f008d9baa664146c7",url:"./404.html"},{revision:"1c50a0816de6512ed7836cbf3c4430d4",url:"./about/index.html"},{revision:"034b128609ff933d734172852b2dd996",url:"./archives/2019/10/index.html"},{revision:"126992482d49d61147b536412e21e279",url:"./archives/2019/index.html"},{revision:"e3ad06bb51ed3111cd8cbb29e0820e73",url:"./archives/2020/01/index.html"},{revision:"4cafbe205aa5f4ff82e69156e32c268d",url:"./archives/2020/02/index.html"},{revision:"ab8bea9dbbd5d017086e5efb75a6f015",url:"./archives/2020/index.html"},{revision:"0271ffc712bb2e8a8dbfc39b8acaf9d6",url:"./archives/index.html"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"fa052ff4d82b6aa6e0077ec22c681dd0",url:"./blogLog/index.html"},{revision:"203a1540d9d9cff6439dd35e6cec8b96",url:"./categories/Git/index.html"},{revision:"16a0873d657ecc4fcdda74aba67e8e70",url:"./categories/Handbook/index.html"},{revision:"8fabc21914a76a3b9ccf25f8ba544b8d",url:"./categories/Handbook/Windows/index.html"},{revision:"aa88fe9d844e405af133060c3fa373f9",url:"./categories/index.html"},{revision:"fd614a210d21f37b015c459a78ba6ab3",url:"./categories/Latex/index.html"},{revision:"5b82afc97e453c6a31d7c582902d4761",url:"./categories/技术分享/index.html"},{revision:"1ed94765006d43c50b8414403a9d0dd4",url:"./categories/技术分享/博客/index.html"},{revision:"9d9c0ea0c5b249455a4d62b8f258d12f",url:"./categories/法律/index.html"},{revision:"6176b867454a2374192ddc06135167c0",url:"./categories/法律/安全法/index.html"},{revision:"c32940eee33c29fca49677e1f07d8fbb",url:"./css/main.css"},{revision:"454bc56fd19872218bd1e02cb0a2ee3c",url:"./fonts/chinese-zodiac.woff2"},{revision:"c07009dffef5a507eec2bfcfdd96aafa",url:"./guest/index.html"},{revision:"0ae3baa40011ec6ad1f7fbf584b66ff8",url:"./index.html"},{revision:"13d5068b7c608684a54ba89be47f270f",url:"./js/algolia-search.js"},{revision:"9631924f730be981fe8f8c14eb2c0afe",url:"./js/bookmark.js"},{revision:"2e9f38867fa1f5a8988be716052c7c77",url:"./js/local-search.js"},{revision:"af3cc91ced18c5ef593f1d750812ade3",url:"./js/motion.js"},{revision:"c47528c6b7d3020a3dfd391c262dfebd",url:"./js/next-boot.js"},{revision:"ddbf5e290206e666bede5460cd254fe4",url:"./js/schemes/muse.js"},{revision:"cca41edb5ea3a6303f17c24610ad7174",url:"./js/schemes/pisces.js"},{revision:"eccfcd98115979851d7025dcbb051bb7",url:"./js/utils.js"},{revision:"a4219f0d6dd5a7a3cc102c442f064f2b",url:"./leancloud_counter_security_urls.json"},{revision:"864a144dbbc956381a47679ec57ab06c",url:"./lib/anime.min.js"},{revision:"188dd1a7583ffab4da32757242993f36",url:"./lib/font-awesome/bower.json"},{revision:"f10ad922af6a586dc9f160da6f562861",url:"./lib/font-awesome/css/font-awesome.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./lib/font-awesome/css/font-awesome.min.css"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./lib/font-awesome/fonts/fontawesome-webfont.woff2"},{revision:"c1b8d079c7049879838d78e0b389965e",url:"./lib/velocity/velocity.min.js"},{revision:"444faf512fb24d50a5dec747cbbe39bd",url:"./lib/velocity/velocity.ui.min.js"},{revision:"d2bbee26489198238c71b196ac920e0c",url:"./LoveHeart/css/default.css"},{revision:"4d3f1aab749ef03c4109d962159fa44e",url:"./LoveHeart/index.html"},{revision:"bf793d486fd4b68e6c74d2663c11cfab",url:"./LoveHeart/js/functions.js"},{revision:"0bba994a307dd63a7103f2f5e442f2d1",url:"./LoveHeart/js/garden.js"},{revision:"10092eee563dec2dca82b77d2cf5a1ae",url:"./LoveHeart/js/jquery.js"},{revision:"13fe9e11b26fb90d3f34c1f810b3a88d",url:"./manifest.json"},{revision:"08d94d318dc03c0594267274df1b28f5",url:"./tags/CPU/index.html"},{revision:"77a4a7387e5744f2450519dcd6da2c72",url:"./tags/Git/index.html"},{revision:"2d883967e73e88586f2e8d81c40a1330",url:"./tags/Github/index.html"},{revision:"9db551da59533416518f431fc12dc371",url:"./tags/Gitlab/index.html"},{revision:"163120b260a3e399116cae8eeba87d2c",url:"./tags/gulp/index.html"},{revision:"2e8aeab3ad16394a5439dab0f72a6a94",url:"./tags/Hexo/index.html"},{revision:"7f61b4ae003e6532cf864c9e47a1ad93",url:"./tags/index.html"},{revision:"a320d1983869237d07543e3f075ad35d",url:"./tags/Latex安装/index.html"},{revision:"d2127ba48b0ce1d32a862820ee1ed980",url:"./tags/Mist-v7-7-0/index.html"},{revision:"bdcfde5c84eaa88182941e11ea9e4f61",url:"./tags/Next/index.html"},{revision:"47f68cca0147b64478003e039a460c77",url:"./tags/PWA/index.html"},{revision:"228fb7383cd3f1b383156c9a33ab6bcc",url:"./tags/wifi/index.html"},{revision:"9b163d4aaca98b935f65482381b88d83",url:"./tags/Windows10/index.html"},{revision:"8d49d9e95e9c25f379f02766d567b8ba",url:"./tags/内存型号/index.html"},{revision:"e2d2c6ee2c32b724c933f764cc722696",url:"./tags/录屏/index.html"},{revision:"f450fda2262bf7c5cfafd07e2acfb97a",url:"./tags/法律与技术/index.html"},{revision:"07a771cae5fb1d25022cf9b4037328fb",url:"./tags/端口占用查看/index.html"},{revision:"d9c7a79b9b076822b5b045453860b1f9",url:"./tags/网卡/index.html"},{revision:"789a58d77aa03c1bd74e1acbe93d4f2f",url:"./tags/网络实名制/index.html"},{revision:"f0d5734c05e8448cd7ad5a0c37585642",url:"./tags/自定义主题/index.html"},{revision:"1e1c2e432ab47bc9665ff9cdffc9c1fa",url:"./tags/隐私保护/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();