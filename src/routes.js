/* eslint-disable react-in-jsx-scope */
// Dependencies
import React from 'react';
// dos metodos, Route Switch
//con switch se ejecuta lo correspondiente, luego sale para no seguir ejecutando nada mas.
import { Route, Switch } from 'react-router-dom';

// Components
import App from './Component/App';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Page404 from './Component/Page404';

// appRoutes, las rutas funcionaran con un switch, cuando haga match con alguna ruta la ejecutara y no ejecutara otras.
//todo lo que genera el routes lo va a regresar en el children del componente app 
//children es un prop de react, es todo lo que esta dentro de las etiquetas.

// funcion para hacer wrap del componente 
const AppRoutes = () =>
	<App>
		<Switch>
			<Route path='/about' component={About} />
			<Route path='/contact' component={Contact} />
			<Route path='/' component={Home} />
			<Route component={Page404} />
		</Switch>
	</App>;

export default AppRoutes;