const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"林深时见璐"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"8601a5c8608530f98015123d5c330369",url:"./404.html"},{revision:"d0bb8c35971fa78bb5cd9ca37230653f",url:"./about/index.html"},{revision:"c4fdd28a274430511351aea0f37a8889",url:"./archives/2019/10/index.html"},{revision:"55ea1690cd19decbd7b8f6b7c96ba7b4",url:"./archives/2019/index.html"},{revision:"fefdc1cb21443c14486ae0364f1eaaed",url:"./archives/2020/01/index.html"},{revision:"cc952872e1c849cb198a85f68d9780b4",url:"./archives/2020/index.html"},{revision:"7164a797c025277a0dbad888534ad06e",url:"./archives/index.html"},{revision:"077b86caf293d16f1ae4a92df3cd13f7",url:"./categories/Handbook/index.html"},{revision:"cceeba5c3c7ec42432c85de583b72fae",url:"./categories/Handbook/latex/index.html"},{revision:"f2d7317de608016d0abee3fca4f2daa1",url:"./categories/Handbook/Windows/index.html"},{revision:"252b0695ae174513c939441af81f946e",url:"./categories/index.html"},{revision:"7f9a24ef5916e9016534af2df328c372",url:"./categories/技术分享/index.html"},{revision:"176e81f1764b21820ec37ec411636e5d",url:"./categories/技术分享/博客搭建/index.html"},{revision:"ffcee95016f5e97e5ee4f00b22e50b35",url:"./css/main.css"},{revision:"454bc56fd19872218bd1e02cb0a2ee3c",url:"./fonts/chinese-zodiac.woff2"},{revision:"96ab9c3a99b7aa85aea0fa51ba7b3dd4",url:"./index.html"},{revision:"13d5068b7c608684a54ba89be47f270f",url:"./js/algolia-search.js"},{revision:"9631924f730be981fe8f8c14eb2c0afe",url:"./js/bookmark.js"},{revision:"2e9f38867fa1f5a8988be716052c7c77",url:"./js/local-search.js"},{revision:"af3cc91ced18c5ef593f1d750812ade3",url:"./js/motion.js"},{revision:"c47528c6b7d3020a3dfd391c262dfebd",url:"./js/next-boot.js"},{revision:"ddbf5e290206e666bede5460cd254fe4",url:"./js/schemes/muse.js"},{revision:"cca41edb5ea3a6303f17c24610ad7174",url:"./js/schemes/pisces.js"},{revision:"eccfcd98115979851d7025dcbb051bb7",url:"./js/utils.js"},{revision:"bef7338214aac604f775a984ed3a3bc3",url:"./LaTeX搭建教程.html"},{revision:"3e9b710d0c9e70a785e607bda33bfbcd",url:"./leancloud_counter_security_urls.json"},{revision:"864a144dbbc956381a47679ec57ab06c",url:"./lib/anime.min.js"},{revision:"188dd1a7583ffab4da32757242993f36",url:"./lib/font-awesome/bower.json"},{revision:"c495654869785bc3df60216616814ad1",url:"./lib/font-awesome/css/font-awesome.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./lib/font-awesome/css/font-awesome.min.css"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./lib/font-awesome/fonts/fontawesome-webfont.woff2"},{revision:"c1b8d079c7049879838d78e0b389965e",url:"./lib/velocity/velocity.min.js"},{revision:"444faf512fb24d50a5dec747cbbe39bd",url:"./lib/velocity/velocity.ui.min.js"},{revision:"24a1cdb3a02086b5efe581296e5da569",url:"./manifest.json"},{revision:"36230d5efd9c1401e324af5383c40b1a",url:"./tags/GitHub/index.html"},{revision:"58ddba01478aad6d13034b3eb8b24b17",url:"./tags/Hexo-Blog/index.html"},{revision:"e766e507c63785b46c708500ced143f9",url:"./tags/Hexo/index.html"},{revision:"5e213e710da545aa5af6a259aaa406d7",url:"./tags/index.html"},{revision:"24eb7478677e933165d4d2593db4336f",url:"./tags/Latex安装/index.html"},{revision:"5eb97bfa798568e78ace81ca754703aa",url:"./tags/Mist/index.html"},{revision:"642448c6ada4f3fca03c1daabcd52650",url:"./tags/Next/index.html"},{revision:"7e70bc0cfa86e6641df34a5215ce43b6",url:"./tags/Windows10/index.html"},{revision:"a2b337fcc614374dcca7a0083d418ae2",url:"./tags/博客/index.html"},{revision:"ae25262d64714dabfb0d9e9a89aa75a7",url:"./tags/端口查看/index.html"},{revision:"84d760b8b35e757dc2d87f3d9e42ab96",url:"./Windows查看端口占用.html"},{revision:"43142193e4d2e1aca1d0d8bb007c8112",url:"./博客优化.html"},{revision:"d8e5be26b93acc1c0b79b3617cb320ce",url:"./搭建个人博客.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();