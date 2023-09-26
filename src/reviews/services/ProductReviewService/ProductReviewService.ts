import http from "../../../common/http-common";

import ProductReviewInterface from "../../interfaces/ProductReviewInterface";

const create = (data: ProductReviewInterface) => {
    return http.post<ProductReviewInterface>("/reviews/product", data);
};

const ProductReviewService = {
    create
};

export default ProductReviewService;
