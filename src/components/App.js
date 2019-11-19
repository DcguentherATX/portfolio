import React from 'react';
import Navigation from './Navigation';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Blog from './Blog';
import Footer from './Footer';

class App extends React.Component {
    constructor(props) {
        super(props);

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
                <Blog />
                <Footer />
            </>
        );
    }
}

export default App;