const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"林深时见璐"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"0509e6f16986e9ada2755bc75d624b59",url:"./2019/10/12/LaTeX安装教程.html"},{revision:"e6536b7bf15c432608ddcb87bcf05a6a",url:"./2019/10/12/搭建个人博客.html"},{revision:"6673835306fb19beef10d05389c63ca7",url:"./2020/01/28/微软系统使用手册.html"},{revision:"82fea79ccb51b35af983e1f217ec191a",url:"./2020/01/30/博客主题优化.html"},{revision:"b625250c28d04209a01ed5c42fa70e07",url:"./2020/02/09/Hexo博客部署PWA.html"},{revision:"0b9db7da5c425cb7d1316880ab2a7401",url:"./2020/02/12/个人信息隐私保护的法律及技术双重角度思考.html"},{revision:"ba05dd84e336e2348ef8f44f18e02c08",url:"./2020/02/17/Git专栏.html"},{revision:"1062b7c995964283be2b46ddcb9c7cf8",url:"./2020/02/17/Markdown写作.html"},{revision:"144f4dd9af11e07bdce32c412a7ed78b",url:"./2020/02/23/Html系列.html"},{revision:"cfc890ee47965166eac71fc431db77f0",url:"./2020/02/29/玩转树莓派（一）.html"},{revision:"f9db1b965e86d3a301b452db1b74fb6c",url:"./2020/03/24/玩转树莓派（二）.html"},{revision:"c1f2c5be82bda817f5d070205bc01414",url:"./404.html"},{revision:"6930b15b32c9fc7e034e0832c0969ff6",url:"./about/index.html"},{revision:"a9992d0bd5c05548462c9c6a6fa61ada",url:"./archives/2019/10/index.html"},{revision:"7d5eefd296c3e8185973c6f7bb243be3",url:"./archives/2019/index.html"},{revision:"1838d881297d3239d95255876bb2dabb",url:"./archives/2020/01/index.html"},{revision:"fd5babfe3cb81ae918447e591f15aa19",url:"./archives/2020/02/index.html"},{revision:"dd533a611d8dc1678be251bc14f6bcca",url:"./archives/2020/03/index.html"},{revision:"a6c0357ad0cc74e4a44d8a11a0d37739",url:"./archives/2020/index.html"},{revision:"e4c42cccd1cb6da1dc2e3aa6590a97e5",url:"./archives/index.html"},{revision:"b570056282a50de05442c40a4b52ca26",url:"./archives/page/2/index.html"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"5364dbcb80f2913cb176b4f7293dc5d2",url:"./blogLog/index.html"},{revision:"1475dff17561bb38df10e24cbd1699ff",url:"./categories/Handbook/index.html"},{revision:"8601d0b8fcae181b59456d41817ec1eb",url:"./categories/Handbook/Latex/index.html"},{revision:"c83ccc1107f120232d50405031cdc2d4",url:"./categories/Handbook/Windows/index.html"},{revision:"6cb7d18d85650c2603d1c909fd0dc1a9",url:"./categories/Handbook/Windows/OS/index.html"},{revision:"f9f1f6487276afaba6c850015d73db30",url:"./categories/index.html"},{revision:"9cd92444a669c086f7f09dc82d4a1a53",url:"./categories/学术/index.html"},{revision:"b1e72efba11c5ec2a7f4f588762071cf",url:"./categories/学术/法律/index.html"},{revision:"cc02f2c26a9e141575f4fdbd03af3082",url:"./categories/技术分享/Code/index.html"},{revision:"94eb34aaaca7650af224feb091a08bc1",url:"./categories/技术分享/index.html"},{revision:"094381ef346b4259c598fe4453709315",url:"./categories/技术分享/Markdown/index.html"},{revision:"d9d07d2769bf2db561fd055469c6ca8b",url:"./categories/技术分享/前端/index.html"},{revision:"a6abdb75f445932b202b130b5b93c938",url:"./categories/技术分享/博客/index.html"},{revision:"c9763d3145618419188bed963b14fbf8",url:"./categories/技术分享/树莓派/index.html"},{revision:"f51b0a4f2c8a3d8de99beffa2568a46c",url:"./css/main.css"},{revision:"454bc56fd19872218bd1e02cb0a2ee3c",url:"./fonts/chinese-zodiac.woff2"},{revision:"bd382333b5f8d452d65c3a64010bdad7",url:"./guest/index.html"},{revision:"cd7a9e996ea7496810cb11c4f7e20e08",url:"./index.html"},{revision:"13d5068b7c608684a54ba89be47f270f",url:"./js/algolia-search.js"},{revision:"9631924f730be981fe8f8c14eb2c0afe",url:"./js/bookmark.js"},{revision:"ab12b6c1c8c0942e41b90899a979b322",url:"./js/cursor/explosion.min.js"},{revision:"18f343ad0277ea0eac2eabf5bb7229ad",url:"./js/cursor/fireworks.js"},{revision:"7853472ebb03e7cfa6ef710953af7f27",url:"./js/cursor/love.min.js"},{revision:"132ca5df84d23eaae20c38f712a2ac83",url:"./js/cursor/text.js"},{revision:"2e9f38867fa1f5a8988be716052c7c77",url:"./js/local-search.js"},{revision:"af3cc91ced18c5ef593f1d750812ade3",url:"./js/motion.js"},{revision:"c47528c6b7d3020a3dfd391c262dfebd",url:"./js/next-boot.js"},{revision:"ddbf5e290206e666bede5460cd254fe4",url:"./js/schemes/muse.js"},{revision:"cca41edb5ea3a6303f17c24610ad7174",url:"./js/schemes/pisces.js"},{revision:"eccfcd98115979851d7025dcbb051bb7",url:"./js/utils.js"},{revision:"2e58320b6725c51c8617fa654a921cb3",url:"./leancloud_counter_security_urls.json"},{revision:"864a144dbbc956381a47679ec57ab06c",url:"./lib/anime.min.js"},{revision:"188dd1a7583ffab4da32757242993f36",url:"./lib/font-awesome/bower.json"},{revision:"f10ad922af6a586dc9f160da6f562861",url:"./lib/font-awesome/css/font-awesome.css"},{revision:"269550530cc127b6aa5a35925a7de6ce",url:"./lib/font-awesome/css/font-awesome.min.css"},{revision:"af7ae505a9eed503f8b8e6982036873e",url:"./lib/font-awesome/fonts/fontawesome-webfont.woff2"},{revision:"c1b8d079c7049879838d78e0b389965e",url:"./lib/velocity/velocity.min.js"},{revision:"444faf512fb24d50a5dec747cbbe39bd",url:"./lib/velocity/velocity.ui.min.js"},{revision:"e24695997ebb1bf6c44b34dca2697445",url:"./LoveHeart/css/default.css"},{revision:"4491f342afdcdcd037dbb5ade7525e3b",url:"./LoveHeart/index.html"},{revision:"bf793d486fd4b68e6c74d2663c11cfab",url:"./LoveHeart/js/functions.js"},{revision:"0bba994a307dd63a7103f2f5e442f2d1",url:"./LoveHeart/js/garden.js"},{revision:"10092eee563dec2dca82b77d2cf5a1ae",url:"./LoveHeart/js/jquery.js"},{revision:"5f1431000b778e0faa91d2337a6ffc7b",url:"./manifest.json"},{revision:"39005e1951dba4e3c38d68b4bd3cce6d",url:"./page/2/index.html"},{revision:"9b93f5215a5a55e9479b0c3af24d3615",url:"./tags/Git/index.html"},{revision:"59c69d4411cbe020dfc945b74af7564d",url:"./tags/Github/index.html"},{revision:"a08204cdf5b5a099b96e86a3256c43ac",url:"./tags/Gitlab/index.html"},{revision:"74c9023660c54cb458125831d10f4765",url:"./tags/gulp/index.html"},{revision:"d6eacb6146cab9848153f388161401a5",url:"./tags/Hexo/index.html"},{revision:"2cd130c0204365ee879f3243448fdad7",url:"./tags/HTML/index.html"},{revision:"c1346a739be37dd4036d994c54b26e86",url:"./tags/index.html"},{revision:"38c73ad2ea16838e5298db1a0065cdbc",url:"./tags/Latex安装/index.html"},{revision:"1ceb93cab2e4a878a3a7a3c7aac87992",url:"./tags/Mist-v7-7-0/index.html"},{revision:"913d978c5c5d3d8ccb5b895d6e251f1a",url:"./tags/Next/index.html"},{revision:"549daeb0c2cea3fed2a10d0270d07a67",url:"./tags/PWA/index.html"},{revision:"13777c234a942ad9f600f45ecb2c36e9",url:"./tags/raspberry/index.html"},{revision:"6dd4bbd0e70f940e5e91e560b6e4e3f2",url:"./tags/V2ray/index.html"},{revision:"67aff378b7795af0d33a3e2cbddbd45a",url:"./tags/Windows10/index.html"},{revision:"81c6400eb111060b20db4886e823100e",url:"./tags/写作/index.html"},{revision:"011af846f287424062c75760fd5c2e1a",url:"./tags/操作系统/index.html"},{revision:"81173da3972980ad6b2af4e3c0df77e8",url:"./tags/树莓派/index.html"},{revision:"c338b7fa6e2aa895b72ac424f90b7f9d",url:"./tags/法律与技术/index.html"},{revision:"f7f72c634f0ba52c089a8872d8b5f33f",url:"./tags/网络安全法/index.html"},{revision:"caec718cabe0784d45272ba758549fb8",url:"./tags/网络实名制/index.html"},{revision:"d73ec81d1b5129ffa830c791ac7a76a2",url:"./tags/自定义主题/index.html"},{revision:"1096804dbf2f6b6712eaf858aa5fcaf8",url:"./tags/透明网关/index.html"},{revision:"451adf1b8b13d5511c98cfbc5e015226",url:"./tags/隐私保护/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();