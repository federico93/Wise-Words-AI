import ReviewInterface from "../ReviewInterface";
import RestaurantReviewScoresInterface from "../RestaurantReviewScoresInterface";

interface RestaurantReviewInterface extends ReviewInterface {
    scores: RestaurantReviewScoresInterface
};

export default RestaurantReviewInterface;
