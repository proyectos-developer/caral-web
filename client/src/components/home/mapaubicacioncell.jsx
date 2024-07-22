import React from 'react'
import GoogleMapReact from 'google-map-react';

import location from '../../assets/iconos/mapa/location.png'

export default function MapaUbicacionCell({proporcional}) {
    
    const AnyReactComponent = ({ text }) => <img src={location} style={{width: 34 / proporcional, height: 48 / proporcional}}/>;
 
    const defaultProps_1 = {
        center: {
          lat: -12.2547532,
          lng: -76.8877542
        },
        zoom: 14
      };

    return (
        <div style={{width: '100%', paddingTop: 50 / proporcional, paddingBottom: 50 / proporcional}}>
            <div className='' style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
                <div style={{width: '100%', height: 400 / proporcional}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyCwoATN7RLTSy4jWO_iK4rQbHXfeNHFuxs" }}
                        defaultCenter={defaultProps_1.center}
                        defaultZoom={defaultProps_1.zoom}
                    >
                        <AnyReactComponent
                            lat={-12.2547532}
                            lng={-76.8877542}
                            text="Almacen Paul Poblet"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    )
}
