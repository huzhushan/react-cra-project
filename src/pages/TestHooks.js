import React, {createRef, useCallback, useMemo, memo,  useState, useRef, useEffect, createContext } from 'react';
import { Prompt } from 'react-router'
import Child from './Child'

export const ThemeContext = createContext()

const themes = {
  light: {
    color: '#fff',
    background: '#f12'
  }
};

const A = (props) => {
  console.log('A1')
  return <div>A</div>
}

const B = memo((props) => {
  console.log('B1')
  return <div>B</div>
})

const App = function() {
  const inputEl = useRef(null); 
  const [count, setCount] = useState(1)
  const refFromUseRef = useRef()
  const refFromCreateRef = createRef()

  if (!refFromUseRef.current) {
    refFromUseRef.current=count
  }
  if (!refFromCreateRef.current) {
    refFromCreateRef.current=count
  }

  useEffect(() => {
    inputEl.current.focus()
  }, [])

  
  

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  useEffect(() => {
    setA(1)
  }, [])
 
  const add = useCallback(() => {
    console.log('b', b)
  }, [b])
 
  const name = useMemo(() => {
    return b + 'xuxi'
  }, [b])

  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <input ref={inputEl} />
      <div>{count}</div>
      <div>useRef:{refFromUseRef.current}</div>
      <div>createRef:{refFromCreateRef.current}</div>
      <button onClick={() => setCount(prev => prev+1)}>+1</button>

      <ThemeContext.Provider value={themes.light}>
        <Child />
      </ThemeContext.Provider>

      <A />
      <B add={add} name={name} />
      
      <Prompt
        message = {(location)=>{
          if(!isOpen) {
            let leave = window.confirm("您确定要离开该页面吗?")          
            if(!leave) {
              return false
            }          
          }else {
            setOpen(false)
            return false
          }
        }}
      />
    </>
  );
}
 
export default App;