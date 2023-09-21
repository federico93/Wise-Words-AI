import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import RestaurantForm from "./reviews/components/RestaurantForm";

import './App.css';

const reviewTypes = [
    {
        value: "restaurant",
        label: "Restaurant"
    }
];

function App() {
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
                        defaultValue="restaurant"
                        disabled
                        required
                    >
                        {reviewTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
                <RestaurantForm />
            </Box>
        </Container>
    );
}

export default App;
