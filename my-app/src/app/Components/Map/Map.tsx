//Map.tsx
"use client";
import style from '../../Styles/Home.module.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet';

function Map() {
    return(
        <div style={{ position: 'relative' }}> {/* Set position relative */}
            <img src='./images/Drone.png' className='w-30 h-32' style={{ position: 'absolute', top: 14, left: 35, zIndex: 999 }} /> 
            <img src='./images/Drone.png' className='w-30 h-32' style={{ position: 'absolute', top: 14, left: 35, zIndex: 999 }} /> 
          
            <img src='./images/Drone2.png' className='w-30 h-32' style={{ position: 'absolute', top: 54, left: 100, zIndex: 999 }} />
            <img src='./images/Drone2.png' className='w-30 h-32' style={{ position: 'absolute', top: 54, left: 100, zIndex: 999 }} />


            <img src='./images/Frame 1967.png'  style={{ position: 'absolute', top: 4, left: 200, zIndex: 999 }} /> 
            <img src='./images/Frame 1967.png'  style={{ position: 'absolute', top: 4, left: 200, zIndex: 999 }} /> 

            <img src='./images/Group 301.png'  style={{ position: 'absolute', top: 250, left: 34, zIndex: 999 }} /> 
            <img src='./images/Group 301.png'  style={{ position: 'absolute', top: 250, left: 34, zIndex: 999 }} /> 

            <img src='./images/Group 302.png'  style={{ position: 'absolute', top: 250, left: 180, zIndex: 999 }} />
            <img src='./images/Group 302.png'  style={{ position: 'absolute', top: 250, left: 180, zIndex: 999 }} />


            
            
            <MapContainer className={style.map} center={[31.582045, 74.329376]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
}

export default Map;
