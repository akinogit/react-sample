export const ADDTODO = 'addTodo'
export const REMOVETODO = 'removeTodo'
export const DONETODO = 'doneTodo'

export const addTodo = (task) => {
    return {
        type: ADDTODO,
        todo: {
            name: task,
            complete:false
        }
    }
}

export const removeTodo = (index) => {
    return {type:REMOVETODO,index:index}
}

export const doneTodo = (index) => {
    return {type:DONETODO,index:index}
}