import './App.css';
import Answer from './components/Answer';
// import Hello from './components/Hello';
// Component -> Function that returns JSX
// JSX code HTML inside JS
function App() {

  let info = [
    {name:"Jagdish", place:"Bihar"},
    {name:"Anshu", place:"Rajasthan"},
    {name:"Yuvraj", place:"Kamothe"},
    {name:"Daya", place:"Mumbai"},
    {name:"Naresh", place:"Bedi"},
    {name:"Wadekar", place:"Aurangabad"}
  ]
  return (
    <div className="App">
        {/* <Hello></Hello> */}
        {/* <Answer name = "Jagdish" from = "India"/>
        <Answer name = "Anshu" from = "India"/>
        <Answer name = "Yuvraj" from = "India"/> */}
        
        {/* <Answer {...info[0]} />
        <Answer {...info[1]} />
        <Answer {...info[2]} />
        <Answer {...info[3]} />
        <Answer {...info[4]} />
        <Answer {...info[5]} /> */}



        {info.map((user) => (
          <Answer {...user}/>
        ))}
    </div> 
  );
}

export default App;
