import ReviewInterface from "../ReviewInterface";
import ProductReviewScoresInterface from "../ProductReviewScoresInterface";

interface ProductReviewInterface extends ReviewInterface {
    productName: string,
    scores: ProductReviewScoresInterface
};

export default ProductReviewInterface;
