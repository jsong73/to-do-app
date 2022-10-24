const bodyEl = document.querySelector("body");

fetch("/api/user")
.then((res) => {
return res.json();
})
.then((data) => {
console.log(data)
})

fetch("/api/tasks")
.then((res) => {
return res.json();
})
.then((data) => {
console.log(data)
})
