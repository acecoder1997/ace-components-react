import React from 'react';
import {Button} from './components'
import {ButtonSize, ButtonType} from "./components/Button/button";

function App() {
    return (
        <div className="App">
            <Button autoFocus btnType={ButtonType.Link} onClick={() => alert('click')}>default</Button>
            <Button disabled>disabled</Button>
            <Button btnType={ButtonType.Danger}>Danger</Button>
            <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large</Button>
            <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>Small</Button>
            <Button btnType={ButtonType.Link} href='https://www.baidu.com'>Baidu Link</Button>
            <Button btnType={ButtonType.Link} href='https://www.baidu.com' disabled>Disabled Link</Button>
            <h1>ace component</h1>
            <h2>ace component</h2>
            <h3>ace component</h3>
            <h4>ace component</h4>
            <h5>ace component</h5>
            <h6>ace component</h6>
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    );
}

export default App;
