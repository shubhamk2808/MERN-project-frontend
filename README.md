# MERN-project-frontend
React, Typecscript project (chat app)

Clone this repository:
https://github.com/shubhamk2808/MERN-project-frontend.git

cd MERN-project-frontend
Install project dependencies:

npm install
Running the Development Server
To start the development server and run your app locally, use the following command:

npm start
This will start the development server and open your app in your default web browser.

Building for Production
To build your app for production, use the following command:
npm run build
This will generate optimized production-ready files in the dist directory.

Technologies Used
technologies and tools using in your project, such as React, Webpack, Babel, Typescript etc.

npx eslint .
Run ESLint: to run lint and prettier command

npx tsc
To compile your TypeScript files, run the TypeScript compiler (tsc) using the following command:

npm run format
To run prettier command

npm run clean
To remove node_modules and all realted caches


temp:-

const Wrapper = styled(Paper)(({ theme }) => ({
    '.message': {
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        maxWidth: '70%',
        alignSelf: 'flex-start',
    },
    '.userMessage': {
        alignSelf: 'flex-end',
        backgroundColor: '#e1ffc7',
    },
}));

const Wrapper = styled(Backdrop)`
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
`


// Checking commit
