### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a free-open source fron-end JavaScript framework, its used for building interaces based on components. This makes it faster to develope an app and would be goood to use for big projects or smaller projects that may have similair layout or components you plan on re-using in it.

- What is Babel?
Bable is a Javascript library that help convert the JSX into normal javascript text that the browser can understand.

- What is JSX?
JSX is an extension to the JavaScript lanquage, this providea a way to structure component rendering.

- How is a Component created in React?
Components are created in React, by seperating the code into another file, and rendering that code/component inside the app itself. They are smaller bits on code, gernerally something that will be used more then once in the app.

- What are some difference between state and props?
State allows us to store information in a way that we can increment it, or change it. Props are more static and cannot be changed. Changes in State also cause a re-render of the app, props again cannot do this because they cannot be changed.

- What does "downward data flow" refer to in React?
This is refering to how we can pass information into different components, when we break down the components we want the top level parent component to ideally handle the most data to pass on to smaller "dummy" components that just render. This create cleaner and more readable code.

- What is a controlled component?
Controlled components are controlled by react state, it recieves props from parent controller and its state is also the parent controller manages its state.

- What is an uncontrolled component?
An uncontrolled component manages its own state.

- What is the purpose of the `key` prop when rendering a list of components?
The key prop helps react properly keep track of the list information. This helps it better store and find information in the list especially when it is going to change.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
This can lead to duplication of the keys in the event we remove or manipulate the list, the keys are not considered "unique"

- Describe useEffect.  What use cases is it used for in React components?
useEffect better helps on control when we may want a component to re-render, or create some additional functionality once the component renders. A good example is in a form.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef allows us to have persistant values between renders. It can also store mutable values that do not cause a re-render when updated.

- When would you use a ref? When wouldn't you use one?
one possible case would be to focus on a particular element in the dom such as an input, you would use one to create an input, or as an onclick event.

- What is a custom hook in React? When would you want to write one?
custom hooks allow us to write are own use case, this comes in handy when we are using a hook or callback multiple times across our app.
