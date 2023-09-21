import React from 'react';

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import SatisfactionRating from "../SatisfactionRating";

function RestaurantForm() {
    const [locationName, setLocationName] = React.useState("");
    const [cookingScore, setCookingScore] = React.useState<number | null>(null);
    const [serviceScore, setServiceScore] = React.useState<number | null>(null);
    const [ambientScore, setAmbientScore] = React.useState<number | null>(null);
    const [priceQualityScore, setPriceQualityScore] = React.useState<number | null>(null);

    return (
        <FormControl
            fullWidth
        >
            <TextField
                id="location-name"
                label="Restaurant's name"
                required
                fullWidth
                margin="dense"
                value={locationName}
                onChange={(e) => {
                    setLocationName(e.target.value);
                }}
            />

            <SatisfactionRating
                label="Rate the cooking"
                defaultValue={cookingScore}
                onChange={(value) => {
                    setCookingScore(value);
                }}
            />

            <SatisfactionRating
                label="Rate the service"
                defaultValue={serviceScore}
                onChange={(value) => {
                    setServiceScore(value);
                }}
            />

            <SatisfactionRating
                label="Rate the ambient"
                defaultValue={ambientScore}
                onChange={(value) => {
                    setAmbientScore(value);
                }}
            />

            <SatisfactionRating
                label="How appropiate is the price considering the overall experience?"
                defaultValue={priceQualityScore}
                onChange={(value) => {
                    setPriceQualityScore(value);
                }}
            />

            <Box textAlign="center">
                <Button
                    variant="contained"
                    sx={{
                        my: 2,
                        maxWidth: 300
                    }}
                    onClick={() => {
                        console.log({
                            location: locationName,
                            scores: {
                                cooking: cookingScore,
                                service: serviceScore,
                                ambient: ambientScore,
                                priceQuality: priceQualityScore
                            }
                        });
                    }}
                >
                    Generate
                </Button>
            </Box>
        </FormControl>
    );
}

export default RestaurantForm;
