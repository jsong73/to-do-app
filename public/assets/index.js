const bodyEl = document.querySelector("body");

fetch("/api/user")
.then((res) => {
return res.json();
})
.then((data) => {
console.log(data)
for(let i = 0;  i < data.length; i++){
   const hTag = document.createElement("h");
   hTag.textContent =  data[i].email;
   bodyEl.append(hTag);
}
})

fetch("/api/tasks")
.then((res) => {
return res.json();
})
.then((data) => {
console.log(data)
    const pTag = document.createElement("p");
    pTag.textContent = data[0].tasks[0].description;
    console.log(data[0].tasks[0]);
    bodyEl.append(pTag)

})
