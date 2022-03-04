import { useReducer } from "react";
import { Map, Marker, Popup } from "mapbox-gl";
import { MapContext } from './MapContext';
import { mapReducer } from './MapReducer';

export interface MapState {
    isMapReady: boolean;
    map?: Map
}

const initialState: MapState = {
    isMapReady: false,
    map: undefined
}


interface Props {
    children: JSX.Element | JSX.Element[]
}


export const MapProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(mapReducer, initialState);

    const setMap = (map: Map) => {

        const myLocationPopup = new Popup()
            .setHTML(`<h4>Aqui estoy</h4>
                        <p>en algun lugar del mundo</p>`)

        new Marker({
            color:'#61DAFB'
        })
            .setLngLat( map.getCenter() )
            .setPopup(myLocationPopup)
            .addTo( map );

        dispatch({type:'setMap', payload:map});

    }

    return (
        <MapContext.Provider value={{
            ...state,
            //metodos
            setMap
        }}>
            {children}
        </MapContext.Provider>
    )
}








