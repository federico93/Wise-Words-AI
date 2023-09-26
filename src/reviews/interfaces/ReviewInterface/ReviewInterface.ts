import ReviewScoresInterface from "../ReviewScoresInterface";

interface ReviewInterface {
    id?: number | null,
    location: string,
    scores: ReviewScoresInterface,
    generatedText?: string | null 
};

export default ReviewInterface;
