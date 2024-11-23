// 1.Select all elements
const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')
// 2.when submit add new element

form.addEventListener('submit', e =>{
    e.preventDefault() // it does not page refresh

    // console.log(input.value);

    // 1.creating a new item
    const item = document.createElement('div')
    item.innerText = input.value
    item.classList.add('list-item')

    // console.log(item);

    // 2.add item to the list
    list.appendChild(item)

    // clear input
    input.value = ""

    // eventListener to delete item when clicked

    item.addEventListener('click',() =>{
        list.removeChild(item)
        item.remove() //work exict the same 
    })

    
    
})

