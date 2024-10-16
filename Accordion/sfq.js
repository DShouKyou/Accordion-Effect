// 获取所有item
let items = document.querySelectorAll('.item')

function setAcitve() {
    items.forEach((item) => {
        item.classList.remove('active')
    })
    this.classList.add('active')
}

items.forEach((item) => {
    item.addEventListener('click', setAcitve)
})