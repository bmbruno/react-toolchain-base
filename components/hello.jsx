import React from 'react'

class HelloWorld extends React.Component {

    constructor() {
        super();
    }

    render () {
        return(
            <>
                <h1>Hello, World!</h1>
                <p>Welcome to your first React application.</p>
            </>
        );
    }
}

export { HelloWorld }