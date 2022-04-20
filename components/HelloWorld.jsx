import React from 'react'
import ReactLinks from '/components/ReactLinks.jsx'

class HelloWorld extends React.Component {

    constructor() {
        super();

        this.state = {
            today: new Date()
        }

    }

    formatDate(date) {

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        return `${month}/${day}/${year}`;

    }

    render () {
        return(
            <>
                <h1>Hello, World!</h1>
                <p>Today's date is {this.formatDate(this.state.today)}</p>
                <p>Welcome to your first React application.</p>

                <ReactLinks openNewWindow="true" />
            </>
        );
    }
}

export default HelloWorld