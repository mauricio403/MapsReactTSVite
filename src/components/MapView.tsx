import React, { useContext, useLayoutEffect, useRef } from 'react'
import { Loading } from './';
import { PlacesContext, MapContext } from '../context';
import mapboxgl from 'mapbox-gl';

export const MapView = () => {

  const {isLoading, userLocation} = useContext( PlacesContext );

  const {map,isMapReady,setMap} = useContext(MapContext);

  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
   
    if(!isLoading) {
      const map = new mapboxgl.Map({
        container: mapDiv.current!, // container ID
        style: 'mapbox://styles/mapbox/light-v10', // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14 // starting zoom
        });

        setMap(map);
    }
   
  }, [isLoading])

 

  if(isLoading){
    return (
      <Loading></Loading>
    )
  }


  return (
    <div ref={mapDiv}
      style={{
        height:'100vh',
        width:'100vw',
        position:'fixed',
        top:0
      }}
    >
      {
        userLocation?.join(',')
      }
    </div>
  )
}
