import React from 'react';
import './App.css';
import BookDetailView from "./components/BookDetailView";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h3 style={{fontSize: 18}}>
                    ISBN: 9781492056348
                </h3>
                <div style={{fontSize: 36, marginTop: 20}}>
                    <BookDetailView isbn={'9781492056348'}/>
                </div>
            </header>
        </div>
    );
}

export default App;
