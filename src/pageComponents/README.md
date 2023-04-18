# Page Components

Each page in this app has a dedicated page component. This promotes separation of concerns and makes the code more modular and easier to manage.

The basic structure of each page component includes the following files:

1. <b>Component.tsx</b>: This is the main React component that represents the page. It contains the JSX code and handles the component's state and props.
2. <b>Component.module.scss</b>: This file contains all the styles used by this component, defined as CSS modules. This approach promotes modularity and encapsulation of styles.
3. <b>index.ts</b>: This file exports the component as a named export, which helps in having cleaner imports in other parts of the app.
4. <b>hooks.ts</b>: This file defines any custom hooks used by the component, which contains all the logic inside the component, if required. This promotes separation of concerns and makes the code more reusable and testable.
5. <b>consts.ts</b>: This file is used to define any constants that are specific to this component and used internally.

By following this structure, developers can easily find and manage the code specific to each page component, making it easier to maintain and update the app as needed.

This structure helps us develop and manage page components efficiently in your project.