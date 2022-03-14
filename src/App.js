import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { bookData1, bookData2 } from "./dummyData";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Book!</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='book' element={<Book bookData1={bookData1} />} />
        <Route path='book2' element={<Book2 bookData2={bookData2} />} />
      </Routes>
    </div>
  );
};

function Home() {
  return (
    <>
      <main>
        <h2>Choose a book!</h2>
      </main>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <Link to='/book'>Book</Link>
        </div>
        <div>
          <Link to='/book2'>Book2</Link>
        </div>
      </nav>
    </>
  );
}
function Book({ bookData1 }) {
  return (
    <>
      <main>
        <h2>Book 1</h2>
        <p>{bookData1}x</p>
      </main>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </>
  );
}

function Book2({ bookData2 }) {
  return (
    <>
      <main>
        <h2>Book 2</h2>
        <p>{bookData2}</p>
      </main>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </>
  );
}
export default App;
