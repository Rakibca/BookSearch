import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import CreateBook from "./components/CreateBook";
import UpdateBookInfo from "./components/UpdateBookInfo";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<ShowBookList />} />
          <Route path="/show-book/:id" element={<ShowBookDetails />} />
          <Route path="/create-book" element={<CreateBook />} />
          <Route path="/edit-book/:id" element={<UpdateBookInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
