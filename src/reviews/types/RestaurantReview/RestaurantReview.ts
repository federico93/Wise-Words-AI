import Review from "../Review";
import RestaurantReviewScores from "../RestaurantReviewScores";

interface RestaurantReview extends Review {
    scores: RestaurantReviewScores;
}

export default RestaurantReview;
