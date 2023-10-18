import Card from './Components/Card.jsx';
import projects from './data.js';

function App(){
    const results = projects.map(e=><Card {...e}/>);
    return (
        <main>
        <h1>Design To Code Solutions</h1>
        <div className="container" id="container">{results}</div>  
        </main>
    )
}

export default App;
