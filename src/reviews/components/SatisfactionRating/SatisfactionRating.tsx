import React from "react";

import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import Rating from "@mui/material/Rating";

interface SatisfactionRatingProps {
    label: string,
    defaultValue?: number | null,
    onChange?: (value: number | null) => any;
};

function SatisfactionRating({ label, defaultValue, onChange }: SatisfactionRatingProps) {
    const [value, setValue] = React.useState<number | null>(defaultValue ?? null);

    return (
        <Box
            sx={{ display: 'flex', flexDirection: 'column', my: 1 }}
        >
            <FormLabel>{label}</FormLabel>
            <Rating
                size="large"
                value={value}
                onChange={(e, newValue) => {
                    setValue(newValue);
                    onChange?.(newValue);
                }}
            />
        </Box>
    );
}

export default SatisfactionRating;
