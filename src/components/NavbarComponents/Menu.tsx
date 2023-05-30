import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className="text-base md:text-sm font-semibold flex flex-col md:flex-row items-start gap-8 mb-3 py-4 md:mb-0 md:p-0">
            <Link to='/'>
                Home
            </Link>
            <Link to='/blogs'>
                Blogs
            </Link>
            <Link to='/dashboard'>
                Dashboard
            </Link>
            <Link to='/about-us'>
                About Us
            </Link>
        </div>
    );
}

export default Menu;