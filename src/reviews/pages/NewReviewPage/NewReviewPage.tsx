import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import RestaurantForm from "../../components/RestaurantForm";

import ReviewForm from "../../components/ReviewForm";
import { ReviewTypes } from "../../components/ReviewForm/ReviewForm";

const selectReviewTypeOptions = [
    {
        value: ReviewTypes.Restaurant,
        label: "Restaurant"
    },
    {
        value: ReviewTypes.Product,
        label: "Product"
    }
];

const NewReviewPage: React.FC = () => {
    const [reviewType, setReviewType] = React.useState<ReviewTypes>(ReviewTypes.Restaurant);

    return (
        <Container>
            <Box>
                <Typography variant="h2" align="center" gutterBottom>
                    Wise Words
                </Typography>
                <Typography variant="h4" gutterBottom>
                    New review
                </Typography>
                <FormControl
                    fullWidth
                    margin="normal"
                >
                    <TextField
                        id="review-type"
                        select
                        label="Review type"
                        helperText="Select the type of experience you want to review"
                        required
                        value={reviewType}
                        onChange={(e) => {
                            setReviewType(e.target.value as ReviewTypes);
                        }}
                    >
                        {selectReviewTypeOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>

                <ReviewForm type={reviewType} />
            </Box>
        </Container>
    );
}

export default NewReviewPage;
