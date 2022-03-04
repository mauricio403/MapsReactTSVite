import { useContext } from "react"
import { MapContext } from '../context/map/MapContext';
import { PlacesContext } from '../context/places/PlacesContext';

export const BtnMyLocations = () => {

  const {map, isMapReady} = useContext(MapContext);
  const {userLocation} = useContext(PlacesContext);

  const onClick = () => {

    if(!isMapReady) {
      throw new Error ('El mapa no esta listo aun !!');
    }

    if(!userLocation) {
      throw new Error ('No hay ubicacion de ususario!?');
    }

    map?.flyTo({
      zoom:14,
      center: userLocation
    })


  }

  return (
    <button className="btn btn-primary"
    onClick={onClick}
        style={{
            position: 'fixed',
            top:'20px',
            right: '20px',
            zIndex:999
        }}
    >
        Mi Ubicación  
    </button>
  )
}
