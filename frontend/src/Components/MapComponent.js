import React from "react";
import {
    GoogleMap,
    useLoadScript,
    InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import "@reach/combobox/styles.css";

const libraries = ["places"];
const mapContainerStyle = {
    height: "500px",
    width: "1000px",
    borderRadius: "10px",
    top: "100px",
};
const options = {
    disableDefaultUI: true,
    zoomControl: true,
};
const center = {
    lat: 46.7712,
    lng: 23.6236,
};

export default function App() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    const [selected, setSelected] = React.useState(null);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
        <div className="googleMapClass">
            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
                options={options}
                onLoad={onMapLoad}
            >
                {selected ? (
                    <InfoWindow
                        position={{ lat: selected.lat, lng: selected.lng }}
                        onCloseClick={() => {
                            setSelected(null);
                        }}
                    ></InfoWindow>) : null}
            </GoogleMap>
        </div>
    );
}

function Search({ panTo }) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 43.6532, lng: () => -79.3832 },
            radius: 100 * 1000,
        },
    });

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
        } catch (error) {
            console.log("😱 Error: ", error);
        }
    };

    return (
        <div className="search">
        </div>
    );
}