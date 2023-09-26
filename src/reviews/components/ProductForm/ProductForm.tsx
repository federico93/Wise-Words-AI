import React from 'react';

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import SatisfactionRating from "../SatisfactionRating";

import ProductReviewInterface from "../../interfaces/ProductReviewInterface";
import ProductReviewService from "../../services/ProductReviewService";

interface ProductFormProps {
    review?: ProductReviewInterface,
    onReviewChange?: any
};

const ProductForm: React.FC<ProductFormProps> = ({ review, onReviewChange }: ProductFormProps) => {
    const [store, setStore] = React.useState(review?.location ?? "");
    const [productName, setProductName] = React.useState(review?.productName ?? "");
    const [deliveryScore, setDeliveryScore] = React.useState<number | null>(review?.scores.delivery ?? null);
    const [priceQualityScore, setPriceQualityScore] = React.useState<number | null>(review?.scores.priceQuality ?? null);
    const [loading, setLoading] = React.useState<boolean>(false);

    const generateReview = () => {
        const data = {
            location: store,
            productName: productName,
            scores: {
                delivery: deliveryScore,
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
                    productName: response.data.productName,
                    scores: {
                        overall: response.data.scores.overall,
                        delivery: response.data.scores.delivery,
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
                label="Store name"
                required
                fullWidth
                margin="dense"
                value={store}
                onChange={(e) => {
                    setStore(e.target.value);
                }}
            />

            <TextField
                id="product-name"
                label="What did you buy?"
                required
                fullWidth
                margin="dense"
                value={productName}
                onChange={(e) => {
                    setProductName(e.target.value);
                }}
            />

            <SatisfactionRating
                label="Rate the delivery"
                defaultValue={deliveryScore}
                onChange={(value) => {
                    setDeliveryScore(value);
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

export default ProductForm;
