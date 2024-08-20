//declarar nuevo Map
const taskList = new Map()

//declarar elemento html
const section = document.getElementById('section')
section.addEventListener('change', function(event){

    //declarar input
    const taskInput = event.target.previousElementSibling

    if(event.target.type == 'checkbox' && event.target.checked){
        const taskId = taskInput.id
        const taskValue = taskInput.value

        if(taskValue === ''){
            alert('Definir tarea')
            event.target.checked = false
            return;
        }
        
        taskList.set(taskId, taskValue)

        taskInput.classList.add('done')

        console.log(taskList)

    }else if(event.target.type == 'checkbox' && !event.target.checked){
        const taskId = taskInput.id

        taskList.delete(taskId)
        taskInput.classList.remove('done')
        taskInput.value = ''

        console.log(taskList)

    }
})