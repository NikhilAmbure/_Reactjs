
function customRender(reactElement, container) {

    /*
    const domElement = document.createElement(reactElement.type) // element created
    domElement.innerHTML = reactElement.children
    // set attribute
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement) 
    */

    // Another efficient way to create element and set attributes
    const domElement = document.createElement(reactElement.type) // element created
    domElement.innerHTML = reactElement.children

    for(const prop in reactElement.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)

}

// tree representation of react element (under the hood)
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "click here to visit google"
}

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer)