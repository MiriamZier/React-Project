import logo from './logo.svg';
import './App.css';
import { MyLogin } from './components/Mylogin';
import { Myregister } from './components/Myregister';
import { MyRouting } from './components/Myrouting';
import { Provider } from 'react-redux';
import { MyProvider } from './ourcontex';
import stor from './redux/stor';
import { useState } from 'react';
import { ListRecipies } from './components/Home';


function App() {

  const [list, setlist] = useState([
    { name: "esty", id: "325976470" },
    { name: "sara", id: "064975428" },
    { name: "shay", id: "049166820" },
    { name: "esty", id: "325976470" },
  ])
  const Adduser = (addPersson) => {
  setlist(x => x.concat(addPersson))
  }
  const transfer = {
    list: list,
    onadd: Adduser,
    sellist:(list)=>{setlist(list)}
    }
  return <div className="App">
    <MyProvider value={transfer}> 
    <Provider store={stor}> 
      {/* <ListRecipies></ListRecipies> */}
      <MyRouting></MyRouting>
    </Provider></MyProvider>
    
  </div>

}

export default App;
