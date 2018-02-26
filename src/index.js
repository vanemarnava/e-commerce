
// Dependencies
import React from 'react';
// metodo render()
import { render } from 'react-dom';
// metodo BrowserRouter convertirlo a router
import { BrowserRouter as Router } from 'react-router-dom';

// Routes/rutas
import AppRoutes from './routes';
// import registerServiceWorker from './registerServiceWorker';

// assets
import './index.css';

render (
	<Router>
		<AppRoutes />
	</Router>, 
	document.getElementById('root')
);

