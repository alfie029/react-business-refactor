import {useState, useEffect} from "react";
import {AsyncLoadingState, BookDetailViewModel} from "../models/views";
import {getBookDetailViewModelByIsbn} from "../business/bookDetailHandler";

const useBookDetail = (isbn: String) => {
    const [loadingState, setLoadingState] = useState<AsyncLoadingState>(AsyncLoadingState.Loading);
    const [book, setBook] = useState<BookDetailViewModel | null>();

    useEffect(() => {
        getBookDetailViewModelByIsbn(isbn)
            .then((book) => {
                setBook(book);
                setLoadingState(AsyncLoadingState.Loaded);
            })
            .catch(() => setLoadingState(AsyncLoadingState.Error));
    }, [isbn]);

    return {loadingState, book};
};

export default useBookDetail;
