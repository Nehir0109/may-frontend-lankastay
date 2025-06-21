
import mapboxgl from 'mapbox-gl';

import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import React, { useEffect, useRef } from 'react';
import { clamp } from 'date-fns';


mapboxgl.accessToken = 'pk.eyJ1Ijoic2V5bWFndW5heXkiLCJhIjoiY21iczQxejRmMGN0ZDJrc2Q5N3lldG5ycyJ9.ieaLLlzL_ucr-lEfJCcOxQ'; 

const LocationMap = ({ setFieldValue }) => {



  const mapRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [28.9784, 41.0082], // İstanbul
      zoom: 12,
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
    });

    map.addControl(directions, 'top-left');

    // Harita ilk yüklendiğinde varsayılan rota 
    // directions.setOrigin([28.9795, 41.0151]); // Başlangıç
    // directions.setDestination([28.9768, 41.0055]); // Varış

    // Rota seçildiğinde lokasyon bilgisi Formik'e aktarılır
    directions.on('route', (e) => {
      const dest = e.route[0].legs[0].steps.slice(-1)[0].maneuver.location;
      const formatted = `${dest[1]},${dest[0]}`; // lat, lng
      setFieldValue('location', formatted);
    });

    return () => map.remove();
  }, [setFieldValue]);


  return <div ref={mapRef} className="navigasyon" style={{width: '500px' , height: '300px', marginTop: '10px' }} /> ;
// style={{width: '500px', height: '300px', marginTop: '10px' }}
};

export default LocationMap;