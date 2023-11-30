const insert = document.querySelector('.insert')

window.addEventListener("keydown",(event) => {
    insert.innerHTML = `
    <div class="key">
    ${event.key === ' ' ? "space" : event.key}
    <h3>event.key</h3>
</div>
<div class="key">
    ${event.keyCode}
    <h3>event.keyCode</h3>
</div>
<div class="key">
    ${event.code}
    <h3>event.code</h3>
</div>`
console.log(event)
});