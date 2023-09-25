import ReviewScores from "../ReviewScores";

interface Review {
    id?: number | null,
    location: string,
    scores: ReviewScores,
    generatedText?: string | null 
}

export default Review;
