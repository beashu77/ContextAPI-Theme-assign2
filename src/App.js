// import Navbar0 from './Pre-components/Navbar';
// import Body0 from './Pre-components/Body';
// import React,{useReducer} from "react";
// import './App.css';
// const  reducer = (counter,action)=>{
//   switch(action.type){
//     case 'INCREMENT':{
//        return counter +1;
//     }
//     case "DECREMENT":{
//     return counter -1;
//     }
//     default:{
//       return counter;
//     }
//   }
// }
// function App() {
//   const [counter,dispatch] = useReducer(reducer,0);
//   return (
//     <div className="App">
//      {/* PRE-CLASS */}
//       {/* <Navbar0/>
//       <Body0/> */}
//       Counter:{counter}
//       <div>
//         <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
//         <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
//       </div>
//     </div>
//   );
// }
// export default App;







import React, { useContext } from 'react';
import './App.css';
import Navbar from './Class-components/Navbar';
import Body from './Class-components/Body';
import { ThemeContext } from './Class-contexts/ThemContext';
import Footer from './Class-components/Footer';


const App = () => {
 
const {isLight}=useContext(ThemeContext)
  return (
    <div className={`App ${isLight ? "light":"dark"}`}>
     
      <Navbar/>
      <Body/>
      <Footer/>
      
     
      
    </div>
  )
}

export default App;
