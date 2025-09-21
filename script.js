let todoList = document.querySelector(".todoInput")
let addBtn = document.querySelector(".add")
let list = document.querySelector('ul')


addBtn.addEventListener('click' ,()=>{
        let myItem =todoList.value
        todoList.value = '';

        let listItem = document.createElement('li');
        // let listCheck = document.createElement('input');
        // listCheck.type = "radio";
        let listTittle = document.createElement("label")
        let listBtn = document.createElement('button');


        list.appendChild(listItem)
        listTittle.textContent = myItem;
        listBtn.textContent = 'Delete';
        // listItem.appendChild(listCheck)
        listItem.appendChild(listTittle);
        listItem.appendChild(listBtn)
        console.log(list);


    listBtn.addEventListener('click',()=>{
          list.removeChild(listItem);
        })
        todoList.focus();
       
        if (myItem === '') {
                alert('Enter Item')
                list.style.display = 'none';
                
        } else {
                list.style.display = 'block';
        }

       

});