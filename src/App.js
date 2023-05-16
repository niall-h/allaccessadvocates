import React from "react";
import Map, { Layer, Marker } from "react-map-gl";
import markerImage from "./3dmarker.png";

const mapboxAccessToken =
  "pk.eyJ1Ijoibmh0ZXQiLCJhIjoiY2xobzJhdHZmMXI4cTNtbHIyNWYwcHZpdCJ9.OBYsMDOF2Ns3Pnqt_p-i9Q";

export default function App() {
  const bounds = [
    [-117.2566, 32.865],
    [-117.2103, 32.885],
  ];

  const buildingsLayer = {
    id: "add-3d-buildings",
    source: "composite",
    "source-layer": "building",
    filter: ["==", "extrude", "true"],
    type: "fill-extrusion",
    minzoom: 11,
    paint: {
      "fill-extrusion-color": "#aaa",

      // Use an 'interpolate' expression to
      // add a smooth transition effect to
      // the buildings as the user zooms in.
      "fill-extrusion-height": [
        "interpolate",
        ["linear"],
        ["zoom"],
        15,
        0,
        15.05,
        ["get", "height"],
      ],
      "fill-extrusion-base": [
        "interpolate",
        ["linear"],
        ["zoom"],
        15,
        0,
        15.05,
        ["get", "min_height"],
      ],
      "fill-extrusion-opacity": 0.6,
    },
  };

  return (
    <Map
      initialViewState={{
        longitude: -117.23,
        latitude: 32.8776,
        zoom: 14.67,
      }}
      style={{ width: "100%", height: "80vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={mapboxAccessToken}
      pitch={50}
      maxBounds={bounds}
      antialias={true}
    >
      <Layer {...buildingsLayer} />
      <Marker
        longitude={-117.23}
        latitude={32.8776}
        anchor="bottom"
        pitchAlignment="viewport"
      >
        <img
          src={markerImage}
          alt="marker"
          style={{
            height: "60px",
            width: "60px",
          }}
        />
      </Marker>
    </Map>
  );
}
