import Card from './Components/Card.jsx';
import projects from './data.js';

function App(){
    const results = projects.map(e=><Card {...e}/>);
    return (
        <main>
        <h1>Projects</h1>
        <div className="container" id="container">{results}</div>  
        </main>
    )
}

export default App;