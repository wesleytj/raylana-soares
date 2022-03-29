import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import './style.scss';

function Location() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCrdibpn6muY8-fuEdB0o4j6XHr6xUNffU"
    })

    const position = {
        lat: -29.747826,
        lng: -51.150079
    }

    return (
        <div className='container'>
            {
                isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={{ width: '50%', height: '300px' }}
                        center={position}
                        zoom={15}
                    >
                        <Marker position={ position } options={{
                            label: {
                                text: "Raylana Soares - Designer de Unhas",
                                className: "label-marker"
                            }
                        }}/>
                    </GoogleMap>
                ) : <></>
            }
        </div>
    );
}

export default Location;