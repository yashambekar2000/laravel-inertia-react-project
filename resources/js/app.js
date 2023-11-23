// resources/js/app.js
import React from 'react';
import { render } from 'react-dom';
import { InertiaApp } from '@inertiajs/inertia-react';
// import Login from './Pages/Auth/Login';  // Import the Login component

const app = document.getElementById('app');

render(
  <InertiaApp
    initialPage={JSON.parse(app.dataset.page)}
// Adjust the path based on your project structure
resolveComponent={(name) => import(`./Pages/Auth/${name}`).then((module) => module.default)}
  />,
  app
);
// render(<Login />, document.getElementById('login-container'));