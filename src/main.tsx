import React from 'react'
import ReactDOM from 'react-dom'
import { MapsApp } from './MapsApp';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoibWF1YmxhY2swNTExIiwiYSI6ImNsMGI2cXFsZzBmcGczY3Bvb20yMXVuOGoifQ.h9702m7xfFtPVsrG_S9Dzw';


if(!navigator.geolocation) {
  alert('Tu navegador no tiene opcion de geolocation');
  throw new Error('Tu navegador no tiene opcion de Geolocation')
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
)
