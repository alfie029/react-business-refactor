import {BookDetailModel} from "../models/data";

const getBookDetailByIsbn = async (isbn: String): Promise<BookDetailModel> => {
    const response = await fetch(`http://localhost:3000/books/${isbn}.json`);
    const bookDetail = await response.json();
    return bookDetail as BookDetailModel;
};

export {getBookDetailByIsbn};
