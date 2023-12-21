import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <h2>
                <Link to={'/students/list'}>Home</Link> |
                <Link to={'/students/add'}>Create</Link> |
                <Link to={'/admin'}>Admin</Link>

            </h2>
            <hr/>
        </>
    )
}
export default Navbar;