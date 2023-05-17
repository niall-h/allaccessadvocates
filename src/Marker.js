import React, { useState } from "react";
import { Marker, Popup } from "react-map-gl";
import markerImage from "./3dmarker.png";
import { Box, Typography } from "@mui/material";

export default function CustomMarker({ longitude, latitude, issue }) {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div>
      <Marker
        longitude={longitude}
        latitude={latitude}
        anchor="bottom"
        pitchAlignment="viewport"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          setPopupOpen(true);
        }}
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
      {popupOpen && (
        <Popup
          latitude={latitude}
          longitude={longitude}
          onClose={() => setPopupOpen(false)}
          closeButton={true}
          anchor="top-right"
        >
          <Box>
            <Typography variant="h6">Issue: {issue.title}</Typography>
            <Typography variant="body2">
              Description: {issue.description}
            </Typography>
          </Box>
        </Popup>
      )}
    </div>
  );
}
