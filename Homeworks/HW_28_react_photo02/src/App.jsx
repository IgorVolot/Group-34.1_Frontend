import React, {useState } from 'react';
import './App.css';
import { friends } from './utils/constants.js';
import Content from './components/Content.jsx';

function App() {
    const [hero, setHero] = useState();

    if (hero) {
        return (
            <div className="App">
                <Content changeHero={setHero} friend={hero} size='large' />
            </div>
        );
    } else {
        return (
            <div className="App">
                {friends.map((f, i) => <Content changeHero={setHero} key={i} friend={f} />)}
            </div>
        );
    }



}

export default App;