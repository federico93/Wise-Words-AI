import ReviewScoresInterface from "../ReviewScoresInterface";

interface ProductReviewScoresInterface extends ReviewScoresInterface {
    delivery?: number | null,
    priceQuality?: number | null
};

export default ProductReviewScoresInterface;
