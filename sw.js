const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"林深时见璐"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"e8be566b40d7f2319f2195ff7b43ee0c",url:"./2019/10/12/LaTeX安装教程.html"},{revision:"59e3b4fea1dd825a29a2b7b407c72099",url:"./2019/10/12/搭建个人博客.html"},{revision:"1bab4da2393f6c2f7274e75d40758d1b",url:"./2020/01/28/微软系统使用手册.html"},{revision:"af010d70ee8f45f8fb386e9a2ee34a8a",url:"./2020/01/30/博客主题优化.html"},{revision:"b9c84bae1c09b5fd74c5abac4f3774a9",url:"./2020/02/09/Hexo博客部署PWA.html"},{revision:"cff69aa48cc6cc04eb4160c4c7a64553",url:"./2020/02/12/个人信息隐私保护的法律及技术双重角度思考.html"},{revision:"7e69dd520e30608d2ad11d72dc617b25",url:"./2020/02/17/Git专栏.html"},{revision:"39cb8e1658a9d8e3cbb8c385cfbe794b",url:"./2020/02/17/Markdown写作.html"},{revision:"1fa96fa3e12986b939501d14c56848c5",url:"./2020/02/23/Html系列.html"},{revision:"c9c684230bcb325acf0608dd25e7c526",url:"./2020/02/29/玩转树莓派（一）.html"},{revision:"7b9b7b337d87523cb4bc285c8ca47963",url:"./2020/03/24/玩转树莓派（二）.html"},{revision:"139b8edf7f1608b17946570fcc14a1c2",url:"./2020/06/16/Linux使用手册.html"},{revision:"d0e7154a1e0368526e1c0d5a7afd8af5",url:"./2020/06/18/定时自动获取动态公网IP.html"},{revision:"5dab0e432974227358813bb11fd9a28b",url:"./2020/06/30/B站投稿.html"},{revision:"16d644992480c7e1b5792f46a7c45ead",url:"./404.html"},{revision:"fc6705c99474345e3a4a819be05e8f16",url:"./about/index.html"},{revision:"2267c64e0fc468a479e00f50500a8ba4",url:"./archives/2019/10/index.html"},{revision:"14741dd0a8de86f98a8d5affc57be685",url:"./archives/2019/index.html"},{revision:"ba8509f0a3ff3340507192c362d1646e",url:"./archives/2020/01/index.html"},{revision:"d1ea8d3ace4ef43abc1c5454e6701698",url:"./archives/2020/02/index.html"},{revision:"2fadd7cdf7092887ac048e444b3b69aa",url:"./archives/2020/03/index.html"},{revision:"96a79e12ab8b8b72a8332079e0e8049e",url:"./archives/2020/06/index.html"},{revision:"151094cdc865c506263ec4d57ac812de",url:"./archives/2020/index.html"},{revision:"3f5aaa778ce22b3c716d8f893fe25c21",url:"./archives/2020/page/2/index.html"},{revision:"3ce233bc028f6703396456d25bf63402",url:"./archives/index.html"},{revision:"3e2cb7905df70677d6d2f2e92be8618d",url:"./archives/page/2/index.html"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"2670eb5607e074358676661988d2daf0",url:"./blogLog/index.html"},{revision:"7f7b13d5d2dc738b424dbd336ae2e398",url:"./categories/Handbook/index.html"},{revision:"f4c4e425c9fb0ad7b3c75c1c51dbfa36",url:"./categories/Handbook/Latex/index.html"},{revision:"6353b3f522a3d30fb2bf6e7b504d0ede",url:"./categories/Handbook/OS/index.html"},{revision:"bcff24ae0c55685443200bd6a150b96d",url:"./categories/Handbook/OS/Linux/index.html"},{revision:"4f5a560d338c50670fbab1984298e3ad",url:"./categories/Handbook/OS/Windows/index.html"},{revision:"4c204c84876171c5a9f3cd3661387956",url:"./categories/index.html"},{revision:"f6603ba2445477db897307f1b4be83f4",url:"./categories/学术/index.html"},{revision:"cdc880ece6968ff49315d18133d22323",url:"./categories/学术/法律/index.html"},{revision:"74ad34c036f8e96d077c45bba46433bb",url:"./categories/技术分享/Code/index.html"},{revision:"6ccebf31f3e7f3824ff416b6b8af6a05",url:"./categories/技术分享/Code/工具库/index.html"},{revision:"47b1ab87867d1b47f6f2d051d609c010",url:"./categories/技术分享/index.html"},{revision:"b79e08568032843b333dd1aa670cb7ea",url:"./categories/技术分享/Markdown/index.html"},{revision:"02776e863a36cbd1291134bb9b2c892b",url:"./categories/技术分享/前端/index.html"},{revision:"ae8349d9d09c58103a9a04cd6033ed8a",url:"./categories/技术分享/博客/index.html"},{revision:"6bba99afea99da7dc2ab3138aecd1d7e",url:"./categories/技术分享/树莓派/index.html"},{revision:"a519a87728fa18478bc94e76ee1558eb",url:"./categories/生活/index.html"},{revision:"bdf8e938a21940461fb7858fbb37389f",url:"./categories/生活/视频剪辑/index.html"},{revision:"4d3d66211a605072c79b190c353cb792",url:"./css/main.css"},{revision:"454bc56fd19872218bd1e02cb0a2ee3c",url:"./fonts/chinese-zodiac.woff2"},{revision:"1ab7175f3d624ee8497081a1b9d68d2e",url:"./guest/index.html"},{revision:"5dd9213af9e34dd070679e435bf36e78",url:"./index.html"},{revision:"13d5068b7c608684a54ba89be47f270f",url:"./js/algolia-search.js"},{revision:"9631924f730be981fe8f8c14eb2c0afe",url:"./js/bookmark.js"},{revision:"ab12b6c1c8c0942e41b90899a979b322",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"7853472ebb03e7cfa6ef710953af7f27",url:"./js/cursor/love.min.js"},{revision:"132ca5df84d23eaae20c38f712a2ac83",url:"./js/cursor/text.js"},{revision:"2e9f38867fa1f5a8988be716052c7c77",url:"./js/local-search.js"},{revision:"af3cc91ced18c5ef593f1d750812ade3",url:"./js/motion.js"},{revision:"c47528c6b7d3020a3dfd391c262dfebd",url:"./js/next-boot.js"},{revision:"ddbf5e290206e666bede5460cd254fe4",url:"./js/schemes/muse.js"},{revision:"cca41edb5ea3a6303f17c24610ad7174",url:"./js/schemes/pisces.js"},{revision:"eccfcd98115979851d7025dcbb051bb7",url:"./js/utils.js"},{revision:"2cab1bdb9153ae9c242ec0583a2d9582",url:"./leancloud_counter_security_urls.json"},{revision:"864a144dbbc956381a47679ec57ab06c",url:"./lib/anime.min.js"},{revision:"188dd1a7583ffab4da32757242993f36",url:"./lib/font-awesome/bower.json"},{revision:"f10ad922af6a586dc9f160da6f562861",url:"./lib/font-awesome/css/font-awesome.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./lib/font-awesome/css/font-awesome.min.css"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./lib/font-awesome/fonts/fontawesome-webfont.woff2"},{revision:"c1b8d079c7049879838d78e0b389965e",url:"./lib/velocity/velocity.min.js"},{revision:"444faf512fb24d50a5dec747cbbe39bd",url:"./lib/velocity/velocity.ui.min.js"},{revision:"e24695997ebb1bf6c44b34dca2697445",url:"./LoveHeart/css/default.css"},{revision:"148b82942060a79e305c1a9433bb0ea4",url:"./LoveHeart/index.html"},{revision:"bf793d486fd4b68e6c74d2663c11cfab",url:"./LoveHeart/js/functions.js"},{revision:"0bba994a307dd63a7103f2f5e442f2d1",url:"./LoveHeart/js/garden.js"},{revision:"10092eee563dec2dca82b77d2cf5a1ae",url:"./LoveHeart/js/jquery.js"},{revision:"5f1431000b778e0faa91d2337a6ffc7b",url:"./manifest.json"},{revision:"7b9fb7631f00cdb19aaa99d9cfb628ca",url:"./page/2/index.html"},{revision:"8525f5304e322bf6e6333414b999001e",url:"./tags/dynamic-IP/index.html"},{revision:"91b03a6d08eb7b408b3c72221b9997b7",url:"./tags/Git/index.html"},{revision:"10ee449a72667d441d9af699320f4aa8",url:"./tags/GitHub/index.html"},{revision:"f52afc78d243afe98dc91e878422385a",url:"./tags/Gitlab/index.html"},{revision:"481f3680ef6f9bc06636faf4223aca7e",url:"./tags/gulp/index.html"},{revision:"8437a7e85e38ee651fbb8f28be373b86",url:"./tags/Hexo/index.html"},{revision:"9bc3ae3664702641217c088e968faab7",url:"./tags/HTML/index.html"},{revision:"0331a69844451d027e362afa11fcf148",url:"./tags/index.html"},{revision:"8b3e0834c44a9a5f1657358510c75b14",url:"./tags/Latex安装/index.html"},{revision:"59bd288c3010651147535a14635d5f73",url:"./tags/Mist-v7-7-0/index.html"},{revision:"da86bc0d6a8e2576a6210f0406f7001c",url:"./tags/Next/index.html"},{revision:"535bb6bfd15c01a92d6c755e7a5adb97",url:"./tags/PWA/index.html"},{revision:"438174fdc338aa680f2a8aea9029c3ce",url:"./tags/Python3/index.html"},{revision:"c1e75c15d1e8d408656a857ec8b9ec33",url:"./tags/raspberry/index.html"},{revision:"c71f9e78ef78a39d6e08fe92931fbcc7",url:"./tags/SMTP/index.html"},{revision:"cc005c6e38eaa983b25845c6c3b98cfb",url:"./tags/V2ray/index.html"},{revision:"8488bf471d461316c2d170101c7d2850",url:"./tags/WAN/index.html"},{revision:"42ae6f98418b5ee72a7cb37526b74029",url:"./tags/Windows10/index.html"},{revision:"e0d66b3b0307049a2db76c12e93b027e",url:"./tags/写作/index.html"},{revision:"75f85b2ea118e1d9d0c90b3ef39d51ac",url:"./tags/动态IP/index.html"},{revision:"432a196d8b70e09594d780aff02a435d",url:"./tags/去水印/index.html"},{revision:"e6fe9f50521c56ee7570cd1f8322223f",url:"./tags/哔哩哔哩/index.html"},{revision:"b3e57f8ab5a57645b1300579dc2ae161",url:"./tags/微信/index.html"},{revision:"23b06a34c8aea3e3a4cd837f18f6fe8b",url:"./tags/操作系统/index.html"},{revision:"6da32ccb75606eb5184d4a8285986276",url:"./tags/树莓派/index.html"},{revision:"92d169e39e012c1b0b72f777e09e728d",url:"./tags/法律与技术/index.html"},{revision:"e12df4f7648127ab6ee242d138bd0428",url:"./tags/视频剪辑/index.html"},{revision:"c6d4846427402f91456c8414f58b31aa",url:"./tags/网络安全法/index.html"},{revision:"96f537c8eb5350b20ba6ade3120aeb37",url:"./tags/网络实名制/index.html"},{revision:"fb3dd1e1934f703645b4919e0a94dcf5",url:"./tags/腾讯视频/index.html"},{revision:"21ab3479c9a49b13b98164f0ba56ed44",url:"./tags/自定义主题/index.html"},{revision:"74ad79e422f7c0acb516f8b8a14a16e5",url:"./tags/远程桌面/index.html"},{revision:"d0f85d049ac0f21536a339fd518d4ab6",url:"./tags/透明网关/index.html"},{revision:"608f85c90edf963c4ff4d46bbbd565a9",url:"./tags/隐私保护/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();