var name=localStorage.getItem("name");

if (!window.indexedDB) {
  console.log("indexed db is not working...!");
}
var request=window.indexedDB.open("svitDB",1);
request.onerror=e=>{
  console.log(e);
}
request.onupgradeneeded=e=>{
  var dbname=e.target.result;
dbname.createObjectStore("cse",{keyPath:"name"});
  console.log("!upgraded...!");
}
request.onsuccess=e=>{
  var dbname=e.target.result;
  store=dbname.transaction("cse","readwrite").objectStore("cse");
var data=store.getAll(name);
data.onsuccess=e=>{
var res=e.target.result;
console.log(res);
var main=document.getElementById('mainDiv');
var left=document.createElement("div");
left.classList.add("leftDiv");
var name=document.createElement("hi");
name.textContent=res.name;
left.appendChild(name);
main.appendChild(left);
var hr=document.createElement("hr");
left.appendChild(hr);
var roll=document.createElement("p");
roll.textContent=res.roll;
left.appendChild(email);
var right=document.createElement("div");
right.classList.add("rightDiv");
var co=document.createElement("p");
co.textContent=res.co;
right.appendChild(co);
main.appendChild(right);


}

  console.log("success...!");
}
