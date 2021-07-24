import React from 'react';
import {Button, Alert, Menu, MenuItem, SubMenu} from './components'
import {ButtonSize, ButtonType} from "./components/Button/button";

function App() {
    return (
        <div className="App">
            <Menu defaultIndex={2} onSelect={(index) => console.log(index)}>
                <MenuItem index={1} disabled={true}>item 1</MenuItem>
                <MenuItem index={2}>item 2</MenuItem>
                <SubMenu title='SubMenu item 3'>
                    <MenuItem>SubMenu item 1</MenuItem>
                    <MenuItem>SubMenu item 2</MenuItem>
                    <MenuItem>SubMenu item 3</MenuItem>
                </SubMenu>
            </Menu>
            <Alert message='hello world!'/>
            <Alert type='success' message='hello world!'/>
            <Alert type='warning' message='hello world!'/>
            <Alert type='error' message='hello world!'/>
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

            <div className='code-parent' style={{position: "relative",backgroundColor:'#333',padding:'10px 30px'}}>
                <code> position: relative;</code>
                <div className='code-children' style={{position: "absolute",top:'calc(100% + 4px)',border:'2px solid red',backgroundColor:'#333',padding:'10px 30px'}}>
                    <code> position: absolute;</code>
                </div>
            </div>
        </div>
    );
}

export default App;
