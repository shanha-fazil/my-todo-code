import React from 'react'
import './App.css'
import {useState} from 'react'
/*{ lists.map((value)=>{
  if(value.status){
  return(<h1>{value.text}</h1>)
}
return null
}
)
}*/
function App() {
  const [lists, setlists] = useState([])
  const [todo, setTodo] = useState('')
  var date = new Date()
  var today = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  
  var day = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var toDay = weekday[day.getDay()];
  //const [textColor, setTextColor] = useState('yellow');
  const removeTodo = (value)=>{
    console.log(value.id);
    console.log(lists)
    const newLists = lists.filter(list => list.id !== value.id)
    console.log(newLists);
    setlists(newLists)
    //const index = lists.findIndex(list => list.id == value.id)
    //console.log(index);
    //lists.splice(index)
    //console.log(lists);
  }
  /*const todoChecked = (value)=>{
    console.log(value.status);
    value.status == true ?  document.getElementById("todo1").style.color="green": document.getElementById("todo1").style.color="red"
  }*/
  const clearScreen = ()=>{
    document.getElementById('myInput').value = ''
  }
  return (
    <div className = "app">
    <div className = "mainHeading">
      <h1> ToDo lists </h1>
    </div>
    <div className = "subHeading">
      <br/>
      <h2> Whoop, it's 🌝 ☕ {toDay} </h2>
      <h3>{today}</h3>
    </div>
    <div className = "input">
      <input onChange = {(e)=>setTodo(e.target.value)} id="myInput" type="text" placeholder = "🖊️ Add item..." />
      <i onClick = {()=>{
        if(todo !== ""){ setlists([...lists, {id: Date.now(), text: todo, status: false}])}
        clearScreen()
        setTodo("")
      }}
        className = "fas fa-plus"></i>
    </div>
    <div className = "todos">
    { lists.map((value)=>{
          return(
            <div className = "todo">
            <div className = "left">
              <input onChange ={(e)=>{
                setlists(
                  lists.filter(obj2=>{
                    if(obj2.id === value.id){
                    obj2.status = e.target.checked}
                    return obj2
                  })
                )
              }
              }
              
              value = {value.status}
              type = "checkbox" name = "" id="" />
              <p className={value.status?"tododone":null}>{value.text}</p>
        </div>
        <div className = "right">
          <i onClick = {()=>removeTodo(value)} className = "fas fa-times"></i>
        </div>
      </div>
    )})}
    </div>
  </div>
);
}

export default App;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

      