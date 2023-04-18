# Project Description

This is a front-end assignment where you are required to build 4 pages - Login, Dashboard, User page, and User details page. The design for these pages can be found at [this Figma link](https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/Frontend-Testing?node-id=5530%3A0). The user pages will pull data from a mock API with 500 records. You will also need to use local storage or indexedDB to store and retrieve user details on the user details page. The page must be mobile responsive. 


## Tech Stack

### The following tech stack is required for this project:
<div style="display:flex;flex-direction:column;gap:10px;">
<div style="display:flex; align-items:center">
  <img src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="Next.js" style="margin-right: 10px; width:40px"/>
  Next.js as the UI framework
</div>

<div style="display:flex; align-items:center">
  <img src="https://img.icons8.com/color/48/000000/typescript.png" alt="TypeScript" style="margin-right: 10px; width:40px"/>
  TypeScript as the language of choice
</div>

<div style="display:flex; align-items:center">
  <img src="https://img.icons8.com/color/48/000000/sass.png" alt="SCSS" style="margin-right: 10px; width:40px"/>
  SCSS for style processing
</div>
</div>
<br/>

### Some other technologies that were used are as follows:


<div style="display:flex;flex-direction:column;gap:10px;">
<div style="display:flex; align-items:center">
  <img src="https://jwt.io/img/pic_logo.svg" alt="JWT" style="margin-right: 10px; width:40px"/>
  JSON Web Token (JWT) for authentication
</div>

<div style="display:flex; align-items:center">
  <img src="https://camo.githubusercontent.com/272811d860f3fab0dd8ff0690e2ca36afbf0c96ad44100b8d42dfdce8511679b/68747470733a2f2f6178696f732d687474702e636f6d2f6173736574732f6c6f676f2e737667" alt="Axios" style="margin-right: 10px; width:40px"/>
  Axios for making HTTP requests
</div>

<div style="display:flex; align-items:center">
 <img src="https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png" style="margin-right: 10px;width:40px;"/>

  React Query for managing data fetching and caching
</div>

<div style="display:flex; align-items:center">
  <img src="https://iconape.com/wp-content/files/qa/371510/svg/371510.svg" alt="Storybook" style="margin-right: 10px; width:40px"/>
  Storybook for developing UI components in isolation
</div>

<div style="display:flex; align-items:center">
  <img src="https://static-00.iconduck.com/assets.00/cypress-icon-512x512-zi8589rq.png" alt="Cypress" style="margin-right: 10px; width:40px"/>
  Cypress for end-to-end testing of the application
</div>
</div>
<br>

## Getting Started

To get started with the project, you will need to do the following:

1. Clone the repository to your local machine
2. Install dependencies by running `pnpm install`
3. Run the development server by running `pnpm run dev`
4. Visit `http://localhost:3000` in your browser to view the application

You will be redirected to the login page. The login page has authentication implemtented using JWT.
To enter the app, you have two options.
1. When running locally, you can have ADMIN_EMAIL, ADMIN_PASSWORD set in your env file and those will be used.
2. Use the default values
```
email='admin@lendsqr.com'
password='password1234'
```

## Usage

The Login page is the starting point for the application.<br>
If you already logged in before(by checking the token in your local storage),<br>
visiting the app base route will take you to the dashboard page,<br>
otherwise you will be redirected to the login page.<br>

From there, you can click on users and go to the users route.<br>
All the users are cached in indexedDb, and the cache is invalidated every 1 minute.<br>
 Clicking on a user/using the action button will take you to the User details page. <br>
The user details will also be stored indexedDB in a separate collection, and invalidated every 1 minute. 


## Structure of the app
- [Assets](./src/assets/README.md)
- [Consts](./src/consts/README.md)
- [Page Components](./src/pageComponents/README.md)
- [Service](./src/service/README.md)
- [Shared](./src/shared/README.md)
- [Styles](./src/styles/README.md)

## Known Issues and Limitations

As with any project, there may be some limitations or known issues that you should be aware of. At the moment, none have been reported. If you encounter any issues while working on the project, please feel free to report them.


## Additional Information

If you have any additional questions or concerns about the project, please feel free to reach out to the project maintainers.

