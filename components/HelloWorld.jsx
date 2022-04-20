import React from 'react'
import ReactLinks from '/components/ReactLinks.jsx'

class HelloWorld extends React.Component {

    constructor() {
        super();
    }

    render () {
        return(
            <>
                <h1>Hello, World!</h1>
                <p>Welcome to your first React application.</p>

                <ReactLinks openNewWindow="true" />
            </>
        );
    }
}

export default HelloWorld