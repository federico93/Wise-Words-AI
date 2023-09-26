import ReviewScoresInterface from "../ReviewScoresInterface";

interface RestaurantReviewScoresInterface extends ReviewScoresInterface {
    cooking?: number | null,
    service?: number | null,
    ambient?: number | null,
    priceQuality?: number | null
};

export default RestaurantReviewScoresInterface;
