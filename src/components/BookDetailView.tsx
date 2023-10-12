import React, {useState, useEffect} from "react";
import {Container, Text, Button, Name, Author, Price} from "./Common";
import {AsyncLoadingState, BookDetailModel} from "../models";


interface BookDetailViewProps {
    isbn: String,
}


const BookDetailView = ({isbn}: BookDetailViewProps) => {
    const [loadingState, setLoadingState] = useState<AsyncLoadingState>(AsyncLoadingState.Loading);
    const [book, setBook] = useState<BookDetailModel | null>();

    useEffect(() => {
        const fetchBookDetailAsync = async () => {
            const response = await fetch(`http://localhost:3000/books/${isbn}.json`);
            return await response.json();
        };
        fetchBookDetailAsync()
            .then((book) => {
                setBook(book);
                setLoadingState(AsyncLoadingState.Loaded)
            })
            .catch(() => setLoadingState(AsyncLoadingState.Error));
    }, [isbn]);

    if (loadingState == AsyncLoadingState.Loading) {
        return <Text>Loading...</Text>
    } else if (loadingState == AsyncLoadingState.Error) {
        return <Text>Error</Text>
    }

    if (!book) {
        return <Text>NotFound</Text>
    }

    const onSubmit = () => {
        // ... submit logic here
    };

    return (
        <Container>
            <Name value={book.name}/>
            <Author value={book.author}/>
            <Price value={book.discountPrice || book.price}/>
            <Button onClick={onSubmit}>Buy</Button>
        </Container>
    );
};

export default BookDetailView;
