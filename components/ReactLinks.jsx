import React from 'react'

class ReactLinks extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {

        let target = (this.props.openNewWindow && this.props.openNewWindow == "true") ? "_blank" : "_self";

        return(
            <div>
                <h2>Useful React Resources</h2>
                <ul>
                    <li><a href="https://reactjs.org/docs/hello-world.html" target={target}>Hello World - React Docs</a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started" target={target}>MDN Web Docs: Getting started with React</a></li>
                    <li><a href="https://react-tutorial.app/" target={target}>React Tutorial</a></li>
                </ul>
            </div>
        );
    }
}

export default ReactLinks