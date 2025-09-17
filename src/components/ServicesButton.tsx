import { Link } from "react-router-dom";

const Services = () => {
    return (
            <button className="border border-1 border-gray-400 px-4 py-2 rounded-md hover:bg-dark-pink hover:border-dark-pink hover:text-white transition-colors">
                <Link to={"/services"} className="font-semibold">Our Services</Link>
            </button>
    );
  };
  
  export default Services;
  