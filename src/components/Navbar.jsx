import { Link } from "react-router-dom"
function Nav(){
    return(
        <nav>
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
        <Link to="/users/iman">IMAN</Link>
        <Link to="/users/mrbeat">Mr Beast</Link>
      </nav>

    )
}
export default Nav