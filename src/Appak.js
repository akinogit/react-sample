import './App.css';

import React,{ Component ,useState,useEffect} from "react";
import NropTypes from 'prop-types';
//class App extends Component {
  // todoView(e) {
  //   console.dir(e.target.previousElementSibling.value)
  // }
  // render() {
  //   const task = [
  //     { id: 1, title: '概要作成' },
  //     { id: 2, title: '画面設計作成' },
  //     { id: 3, title: '詳細設計作成' },
  //     { id: 4, title: 'コーディング' },
  //     { id: 5, title: 'テスト' },
      
  //    ]
    //const result = task.map((n, index) => { return <div>ID:{n.id},TITLE:{n.title},INDEX:{index}</div>})
    //======================================
    // const result2 = task.filter(n => {
    //   return n.id%2 !== 0
    // }).map((n, index) => { return <div>ID:{n.id},TITLE:{n.title},INDEX:{index} <button onClick={() => { console.log(n.id)}}>button</button></div> })
    // return (<div>{result2}</div>)
  //   const result2 = task.filter(n => {
  //     return n.id%2 !== 0
  //   }).map((n, index) => { return <div> <input type="text"></input><button onClick={this.todoView}>button</button> </div>})
  //   return (<div>{result2}</div>)
  //   //return (<button onClick={() => { console.log("click") }}>ボタン</button>);
  //   //=======================================
  // }

  //render() { return <div>親です<Ko /><Ko2 /></div> }
//}
// //関数コンポーネント
// const Ko = () => { 
//   return <span>子です<Mago /></span>
// }
// const Ko2 = () => { 
//   return <span>子2です</span>
// }
// //関数コンポーネント
// const Mago = () => { 
//   const mozi = hoo()
//   return <span>孫です{mozi}</span>
// }
// //関数
// const hoo = () => { 
//   return 'hoo'
// }
// const Menbers = [
//   { id: 1, name: "taro" },
//   { id: 2  },
//   { name: "saburo" },
//   { id: 4, name: "shiro" }
// ]
// //親コンポーネント
// const App = () => { 
//   return (
//     <div>
//       {
//         Menbers.map((men, index) => { 
//         return <Menber key={index}  name={men.name} id={men.id} />
//        })
//       }
//       <Parent />
//     </div>
//   )
// }
// //子コンポーネント
// const Menber = props => {
//  return <div>I'm {props.name},ID:{props.id}</div>
// }
// Menber.defaultProps = {
//   name:"nanasi"
// }
// Menber.propTypes = {
//   name: NropTypes.string,
//   id: NropTypes.number.isRequired
// }
// //子コンポーネント
// const Child = props => {
//   return<span>{props.children}</span>
// }
// //親コンポーネント
// const Parent = () => {
//   return<Child>ここの内容が表示される</Child>
// }


// const App = () => { 
//   const tasks = [
//       { id: 1, title: '概要作成' },
//       { id: 2, title: '画面設計作成' },
//       { id: 3, title: '詳細設計作成' },
//       { id: 4, title: 'コーディング' },
//       { id: 5, title: 'テスト' }]
//   const [count, setCount] = useState(100)
//   const [task, setTask] = useState(tasks)
//   return (<React.Fragment>
//     <p>{count}</p>
//     <button onClick={() => { setCount(preCount => preCount + 1) }}>+1</button>
//     {/* {tasks.map((ts) => { <div>{ts.id}</div> })} */}
//     {console.log(task)}
//     <button onClick={() => setTask(prev => [...prev, { id:6,title: "Jordan" }]) }>+1</button>
    
//   </React.Fragment>)
// }

const App = () => { 
  const todolist = [
      { title: '概要作成' ,flg:false},
      { title: '画面設計作成' ,flg:false},
      { title: '詳細設計作成' ,flg:false},
      { title: 'コーディング' ,flg:false},
    { title: 'テスト', flg: false }]
  //とりあえず完了flgも入れておく（使わないけど）表示切り替え用

  const [todos, setTodo] = useState(todolist)
  
  const [task, setTask] = useState("")
  
  const createTask = (e) => { 
    setTask(e.target.value)
  }

  const addTask = (e) => { 
    //===createTask使わず、ここでテキストボックスの要素を指定して取得するのもあり（DOM）
    if (task === '') return
    setTodo(todos => [...todos, { title: task, flg: false }])
    setTask('')
  }

  const removeTask = index => { 
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodo(newTodos)
  }

  useEffect(() => {
    console.log('副作用関数が実行されました！')
  },[todos])
  

  return (
    <div>
      <h1>todoリスト</h1>
      <input value={task} onChange={createTask} />
      <button onClick={addTask}>追加</button>
      <ul>
         { todos.map((todo, index) => (
          <li key={ index }>{ todo.title } <button onClick={ () => removeTask(index) }>削除</button></li>
         ))}
      </ul>
    </div>
  )

}

export default App;
