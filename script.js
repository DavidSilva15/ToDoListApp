function testItem(){
    var input = document.querySelector('.input')
    if(input.value == ''){
        alert('Tarefa vazia! Adicione uma nova tarefa')
    }else{
        addTask()
        input.value = ''
    }
}

function addTask(){

    var input = document.querySelector('.input').value
    var tasks = document.querySelector('.task')
    
    var taskContent = document.createElement('div')
    taskContent.classList.add('task-content')
    
    var p = document.createElement('p')
    
    var taskContentBtn = document.createElement('div')
    taskContentBtn.classList.add('task-content-btn')
    
    var btnCheck1 = document.createElement('button')
    var i1 = document.createElement('i')
    i1.className = 'fa fa-check'

    var btnCheck2 = document.createElement('button')
    var i2 = document.createElement('i')
    i2.className = 'fa fa-pen'
    
    var btnCheck3 = document.createElement('button')
    var i3 = document.createElement('i')
    i3.className = 'fa fa-trash'
    
    p.textContent = input

    taskContent.appendChild(p)
    
    btnCheck1.appendChild(i1)
    btnCheck2.appendChild(i2)
    btnCheck3.appendChild(i3)

    taskContentBtn.appendChild(btnCheck1)
    taskContentBtn.appendChild(btnCheck2)
    taskContentBtn.appendChild(btnCheck3)

    taskContent.appendChild(taskContentBtn)

    tasks.appendChild(taskContent)

    addAndRemove()

    function addAndRemove(){
        btnCheck1.addEventListener('click', function(){
            p.style.textDecoration = 'line-through'
            p.style.color = 'gray'
            btnCheck1.style.backgroundColor = '#cccccc'
            btnCheck1.style.cursor = 'default'
        })

        btnCheck2.addEventListener('click', function(){
            var textUpdate = window.prompt()
            if(textUpdate == ''){
                alert('Não foram feitas alterações')
            }else{
                p.textContent = textUpdate
            }
        })
        
        btnCheck3.addEventListener('click', function(){
            this.parentNode.remove()
            p.parentNode.remove()
        })
    }
}