import React, { useState } from 'react'
import { connect} from 'react-redux'
import { addTodo,removeTodo,doneTodo} from '../actions'

const App = (props) => { 
  
  const [task, setTask] = useState("")
  
  const createTask = (e) => { 
    setTask(e.target.value)
  }

  const addTask = (e) => { 
    //===createTask使わず、ここでテキストボックスの要素を指定して取得するのもあり（DOM）
    if (task === '') return
    props.addTodo(task)
    //setTodo(todos => [...todos, { title: task, flg: false }])
    setTask('')
  }

  const removeTask = index => {
    props.removeTodo(index)
  }

  const doneTask = index => {
    props.doneTodo(index)
  }

  return (
    <div>
      <h1>todoリスト</h1>
      <input value={task} onChange={createTask} />
      <button onClick={(addTask)}>追加</button>
      <ul>
         { props.todo.map((todo, index) => (
           <li key={index}>
             {todo.complete ? <del>{todo.name}</del> : <span>{todo.name}</span>}
             <button onClick={() => doneTask(index) }>完了</button>
             <button onClick={() => removeTask(index)}>削除</button></li>
         ))}
      </ul>
    </div>
  )

}
const mapStateToProps = state => {
  return {todo:state.todo.lists}
}
const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)) ,
    removeTodo: (index) => dispatch(removeTodo(index)),
    doneTodo: (index) => dispatch(doneTodo(index))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)