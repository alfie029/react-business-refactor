import React from "react";
import {Container, Text, Button, Name, Author, Price} from "./commons";
import {AsyncLoadingState} from "../models/views";
import useBookDetail from "../hooks/useBookDetail";

interface BookDetailViewProps {
    isbn: String,
}

const BookDetailView = ({isbn}: BookDetailViewProps) => {
    const {loadingState, book} = useBookDetail(isbn);

    if (loadingState === AsyncLoadingState.Loading) {
        return <Text>Loading...</Text>
    } else if (loadingState === AsyncLoadingState.Error) {
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
            <Price value={book.price}/>
            <Button onClick={onSubmit}>Buy</Button>
        </Container>
    );
};

export default BookDetailView;
