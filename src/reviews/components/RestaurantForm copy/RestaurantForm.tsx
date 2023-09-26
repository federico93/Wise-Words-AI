import React from 'react';

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import SatisfactionRating from "../SatisfactionRating";

import RestaurantReviewInterface from "../../interfaces/RestaurantReviewInterface";
import ProductReviewService from "../../services/RestaurantReviewService";

interface RestaurantFormProps {
    review?: RestaurantReviewInterface,
    onReviewChange?: any
};

const RestaurantForm: React.FC<RestaurantFormProps> = ({ review, onReviewChange }: RestaurantFormProps) => {
    const [restaurant, setRestaurant] = React.useState(review?.location ?? "");
    const [cookingScore, setCookingScore] = React.useState<number | null>(review?.scores.cooking ?? null);
    const [serviceScore, setServiceScore] = React.useState<number | null>(review?.scores.service ?? null);
    const [ambientScore, setAmbientScore] = React.useState<number | null>(review?.scores.ambient ?? null);
    const [priceQualityScore, setPriceQualityScore] = React.useState<number | null>(review?.scores.priceQuality ?? null);
    const [loading, setLoading] = React.useState<boolean>(false);

    const generateReview = () => {
        const data = {
            location: restaurant,
            scores: {
                cooking: cookingScore,
                service: serviceScore,
                ambient: ambientScore,
                priceQuality: priceQualityScore
            }
        };

        setLoading(true);

        ProductReviewService.create(data)
            .then((response: any) => {
                setLoading(false);

                onReviewChange?.({
                    id: response.data.id,
                    location: response.data.location,
                    scores: {
                        overall: response.data.scores.overall,
                        cooking: response.data.scores.cooking,
                        service: response.data.scores.service,
                        ambient: response.data.scores.ambient,
                        priceQuality: response.data.scores.priceQuality
                    },
                    generatedText: response.data.generatedText
                });
            })
            .catch((e: Error) => {
                setLoading(false);

                console.log(e);
            });
    };

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
                value={restaurant}
                onChange={(e) => {
                    setRestaurant(e.target.value);
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
                    onClick={generateReview}
                    disabled={loading}
                >
                    Generate
                </Button>
            </Box>
        </FormControl>
    );
}

export default RestaurantForm;
