import './App.css';
import React, {useState, useEffect} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("変更されてます")
  }, [count])

  const kansu = () => { 
    setCount(0)
    console.log("呼ばれてますよ")
  }

  return (
    <>
      <p>{`${count}回クリックされました`}</p>
      <div >
        <button onClick={()=>setCount((prev) => prev + 1)}>
          ボタン
        </button>
        <button onClick={kansu}>
          リセット
        </button>
      </div>
    </>
  )
}

export default App