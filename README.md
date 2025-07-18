# Context-API

This React code creates a counter app using context and state. The main `App` component keeps track of a number called `count` using `useState`. This count is shared with child components using `Context.Provider`. Inside the child components, `useContext` is used to read the current count value. The `CountRender` component displays the count, and the `Buttons` component lets you increase or decrease it. Overall, it shows how to share data between components without passing it through every level manually.

