const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"林深时见璐"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"4934fce83d8a5033bc97b4c81d6b95bc",url:"./404.html"},{revision:"08a505812e231b7c804bf11228b294aa",url:"./about/index.html"},{revision:"375ea1397eee14ff77bade5adedd465b",url:"./archives/2019/10/index.html"},{revision:"32f8c65296211024545928434f2354ad",url:"./archives/2019/index.html"},{revision:"68061098bae69f4d6eaf708b411ee9cf",url:"./archives/2020/01/index.html"},{revision:"64bc9eef3007f627387348032f6a440f",url:"./archives/2020/index.html"},{revision:"ebe9557f3e80dea5039078bec911c6f6",url:"./archives/index.html"},{revision:"e97c5c8f0e057cedca73460334ed6266",url:"./categories/Handbook/index.html"},{revision:"8ff6275e77d15867f3f58a48bebd7772",url:"./categories/Handbook/Latex/index.html"},{revision:"e699518f872b296824649ee3e5448495",url:"./categories/Handbook/Windows/index.html"},{revision:"8e86329aef5f7a18b63c2402f3a44ea3",url:"./categories/index.html"},{revision:"60452c8f2345d897a5ed73673b514cc2",url:"./categories/技术分享/index.html"},{revision:"2e6f6cce54cb162092520987a6775a28",url:"./categories/技术分享/博客搭建/index.html"},{revision:"29bacbbbc29336e1f61e65b2887b77cb",url:"./css/main.css"},{revision:"454bc56fd19872218bd1e02cb0a2ee3c",url:"./fonts/chinese-zodiac.woff2"},{revision:"cfa555fbeb11ba8fdca80c5cb31a3f7a",url:"./index.html"},{revision:"13d5068b7c608684a54ba89be47f270f",url:"./js/algolia-search.js"},{revision:"9631924f730be981fe8f8c14eb2c0afe",url:"./js/bookmark.js"},{revision:"2e9f38867fa1f5a8988be716052c7c77",url:"./js/local-search.js"},{revision:"af3cc91ced18c5ef593f1d750812ade3",url:"./js/motion.js"},{revision:"c47528c6b7d3020a3dfd391c262dfebd",url:"./js/next-boot.js"},{revision:"ddbf5e290206e666bede5460cd254fe4",url:"./js/schemes/muse.js"},{revision:"cca41edb5ea3a6303f17c24610ad7174",url:"./js/schemes/pisces.js"},{revision:"eccfcd98115979851d7025dcbb051bb7",url:"./js/utils.js"},{revision:"b79c82b8b5dd24193b3ccb29e516c54c",url:"./LaTeX搭建教程.html"},{revision:"99b23c231db9c282343c254da74d79a0",url:"./leancloud_counter_security_urls.json"},{revision:"864a144dbbc956381a47679ec57ab06c",url:"./lib/anime.min.js"},{revision:"188dd1a7583ffab4da32757242993f36",url:"./lib/font-awesome/bower.json"},{revision:"c495654869785bc3df60216616814ad1",url:"./lib/font-awesome/css/font-awesome.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./lib/font-awesome/css/font-awesome.min.css"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./lib/font-awesome/fonts/fontawesome-webfont.woff2"},{revision:"c1b8d079c7049879838d78e0b389965e",url:"./lib/velocity/velocity.min.js"},{revision:"444faf512fb24d50a5dec747cbbe39bd",url:"./lib/velocity/velocity.ui.min.js"},{revision:"014107ce6b3e156fb8364c17c97cad72",url:"./manifest.json"},{revision:"ecbc319ce055ee9553f485e382d20102",url:"./tags/GitHub/index.html"},{revision:"4a5ee8e4c049d897da52f9dd7f4e9296",url:"./tags/Hexo-Blog/index.html"},{revision:"32118c8162e6fd913dd42bdc3a592a75",url:"./tags/Hexo/index.html"},{revision:"1a1525ef251df5d6b1fd316823180850",url:"./tags/index.html"},{revision:"64485aa57eb6bf88b155ab1c0694ad4a",url:"./tags/Latex安装/index.html"},{revision:"21f9a083d31aa54cd35e9ae4fa88a4a8",url:"./tags/Mist/index.html"},{revision:"0ac287303299ab10cd8e6e2a72cc8f74",url:"./tags/Next/index.html"},{revision:"d19a1082bfa8b249176f9156253ea2ca",url:"./tags/Windows10/index.html"},{revision:"05f4308d39e9d3ea2d1c0923e8ff8f90",url:"./tags/博客/index.html"},{revision:"794b1f3bd414e378442e873548666a3b",url:"./tags/端口查看/index.html"},{revision:"21eba1b7a4838db468fc6215964602ea",url:"./Windows查看端口占用.html"},{revision:"c11f46b030e1787504d42fffa10999e1",url:"./博客优化.html"},{revision:"4a286deb281c1e3abfe0230391fdcfd2",url:"./搭建个人博客.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();