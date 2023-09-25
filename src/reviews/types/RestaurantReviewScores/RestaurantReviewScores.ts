import ReviewScores from "../ReviewScores";

interface RestaurantReviewScores extends ReviewScores {
    cooking?: number | null,
    service?: number | null,
    ambient?: number | null,
    priceQuality?: number | null,
}

export default RestaurantReviewScores;
