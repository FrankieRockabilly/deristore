import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Import Leaflet
import 'leaflet/dist/leaflet.css';

const Maps = () => {
    // State untuk menyimpan ikon kustom
    const [customIcon, setCustomIcon] = useState(null);

    useEffect(() => {
        // Menentukan ikon kustom menggunakan gambar
        const icon = new L.Icon({
            iconUrl: 'https://cdn-icons-png.freepik.com/256/10577/10577714.png?semt=ais_hybrid', // Ganti dengan path gambar kamu
            iconSize: [40, 40], // Ukuran ikon
            iconAnchor: [20, 40], // Titik dasar ikon (di mana ikon akan "menempel")
            popupAnchor: [0, -40], // Posisi popup relatif terhadap ikon
        });

        // Set ikon kustom ke state
        setCustomIcon(icon);
    }, []);

    const position = [1.0913666442665555, 100.54752432702732]; // Koordinat untuk pusat peta

    return (
        <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
            {/* TileLayer untuk OpenStreetMap */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Marker untuk menunjukan lokasi */}
            {customIcon && (
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        Tiwi Ponsel Location
                    </Popup>
                </Marker>
            )}
        </MapContainer>
    );
};

export default Maps;
