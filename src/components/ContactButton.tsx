import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <button className="border border-1 bg-light-green text-white px-4 py-2 rounded-md hover:bg-dark-pink hover:border-dark-pink hover:text-white transition-colors">
            <Link to={"/contact"} className="font-semibold">Contact Us</Link>
        </button>
    );
  };
  
  export default Contact;
  