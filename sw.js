var cachename="pwa";
var filescache=[
  '/'
  '/index.html'
  'resume.html'
]
self.addEventListener('install',function(e){
  console.log("installed successfully.!");

e.waitUtill(
caches.open(cachename).then(function(cache){
  console.log("cathcing files from cache");
return ca.addAll(filescache);
})
)
})
self.addEventListener('activate',function(e){
  console.log("activate successfully.!");
  e.waituntill(
    caches.key().then(function(c){
      return Promise.all(c.map(function(thiscache){
        if(thiscache !==cahcename){
          return caches.delete(thiscache);
          console.log("service worker removing files");
        }
      }))
    }
  )
})
self.addEventListener('fetch',function(e){
  console.log("fetch successfully.!");
  fetch()
})
