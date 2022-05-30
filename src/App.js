import React  from "react";
import Header  from "./components/Header";


function App() {
  /* const name='awad' */
  return (
  <div className="container">
      {/* <h1>hello {name==='awad' ? 'good' :'not good'}</h1>  */}
    <Header title='first react project reach minute 1:15' />
    
  </div>
    
  );
}


/* class App extends React.Component{
  render(){
    return(
      <Header />
      )
  }
} */
export default App