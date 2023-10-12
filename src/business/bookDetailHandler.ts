import {BookDetailViewModel} from "../models/views";
import {BookDetailModel} from "../models/data";
import {getBookDetailByIsbn} from "../api/bookDetail";

const parseBookDetail = (bookDetail: BookDetailModel): BookDetailViewModel => {
    return {
        name: bookDetail.name,
        author: bookDetail.author,
        price: bookDetail.discountPrice || bookDetail.price,
    }
};

const getBookDetailViewModelByIsbn = async (isbn: String): Promise<BookDetailViewModel> => {
    return parseBookDetail(await getBookDetailByIsbn(isbn));
}

export {
    getBookDetailViewModelByIsbn,
};
