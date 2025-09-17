import { Link } from "react-router-dom";

const FAQ = () => {
    return (
        <button className="border border-1 border-gray-400 px-4 py-2 rounded-md hover:bg-dark-pink hover:border-dark-pink hover:text-white transition-colors">
            <Link to={"/questions"} className="font-semibold">FAQs</Link>
        </button>
    );
  };
  
  export default FAQ;
  