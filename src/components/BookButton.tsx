import { Link } from "react-router-dom";

const Book = () => {
    return (
        <button className="bg-dark-green text-white px-4 py-2 rounded-md hover:bg-dark-pink transition-all">
            <Link to={"/book"} className="font-semibold">BOOK AN APPOINTMENT</Link>
        </button>
    );
  };
  
  export default Book;
  