import React from 'react';
import Navigation from './Navigation';
import AboutMe from './AboutMe';

class App extends React.Component {
    constructor() {
        super();

        this.state = {

        };

        //bind methods here


    }

    render() {
        return (
            <div>
                <Navigation />
                <AboutMe />
            </div>
        );
    }
}

export default App;