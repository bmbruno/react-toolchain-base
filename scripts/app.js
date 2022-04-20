import React from 'react'
import { createRoot } from 'react-dom/client'
import HelloWorld from '/components/HelloWorld.jsx'

// Using the React 18 'createRoot' method in place of ReactDom.render() from React 17 and earlier
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<HelloWorld/>);