import React, {Component} from 'react';
import './App.css';
import {Header} from './components/Header'
import {SkillsListContainer} from './containers/SkillsListContainer'
import {Game} from './hex/Game';

new Game();

class App extends Component {
    constructor(props){
        super(props);
        this.state = {"skillCardsList" : []}
    }

    render() {
        return (
            <div>
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="columns is-12">
                            <div className="column is-6">
                                <SkillsListContainer  cardsPerLine={2}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;



