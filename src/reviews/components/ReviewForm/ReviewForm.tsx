import React from "react";

import RestaurantForm from "../RestaurantForm";
import ProductForm from "../ProductForm";

import ReviewInterface from "../../interfaces/ReviewInterface";
import RestaurantReviewInterface from "../../interfaces/RestaurantReviewInterface";
import ProductReviewInterface from "../../interfaces/ProductReviewInterface";

export enum ReviewTypes { 
    Restaurant = "RESTAURANT",
    Product = "PRODUCT"
};

interface ReviewFormProps {
    type?: ReviewTypes
};

const ReviewForm: React.FC<ReviewFormProps> = ({ type }: ReviewFormProps) => {
    const [review, setReview] = React.useState<ReviewInterface | null>(null);

    const buildRestaurantReview = (review: RestaurantReviewInterface) => {
        return {
            id: review.id,
            location: review.location,
            scores: {
                overall: review.scores.overall,
                cooking: review.scores.cooking,
                service: review.scores.service,
                ambient: review.scores.ambient,
                priceQuality: review.scores.priceQuality
            },
            generatedText: review.generatedText
        } as RestaurantReviewInterface;
    }

    const buildProductReview = (review: ProductReviewInterface) => {
        return {
            id: review.id,
            location: review.location,
            productName: review.productName,
            scores: {
                overall: review.scores.overall,
                delivery: review.scores.delivery,
                priceQuality: review.scores.priceQuality
            },
            generatedText: review.generatedText
        } as ProductReviewInterface;
    }

    const onReviewChange = (newReview: ReviewInterface) => {
        setReview(newReview);
    };

    switch (type) {
        case ReviewTypes.Restaurant:
            const restaurantReview: RestaurantReviewInterface | undefined = review ? buildRestaurantReview(review as RestaurantReviewInterface) : undefined;
            return <RestaurantForm review={restaurantReview} onReviewChange={onReviewChange} />;
        case ReviewTypes.Product:
            const productReview: ProductReviewInterface | undefined = review ? buildProductReview(review as ProductReviewInterface) : undefined;
            return <ProductForm review={productReview} onReviewChange={onReviewChange} />;
        default:
            return null;
    }
}

export default ReviewForm;
