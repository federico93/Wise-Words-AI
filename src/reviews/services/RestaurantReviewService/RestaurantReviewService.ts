import http from "../../../common/http-common";

import RestaurantReview from "../../types/RestaurantReview";

const create = (data: RestaurantReview) => {
    return http.post<RestaurantReview>("/reviews/restaurant", data);
};

const RestaurantReviewService = {
    create
};

export default RestaurantReviewService;
