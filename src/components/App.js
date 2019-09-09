import React from 'react';
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import Projects from './Projects';

class App extends React.Component {
    constructor() {
        super();

        this.state = {

        };

        //bind methods here


    }

    render() {
        return (
            <>
                <Navigation />
                <AboutMe />
                <Projects />
            </>
        );
    }
}

export default App;