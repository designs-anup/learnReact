import { NavLink } from "react-router"

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Shop",
        link: "/products"
    },
    {
        id: 3,
        name: "About",
        link: "/about"
    },
    {
        id: 4,
        name: "Blog",
        link: "/contact"
    }
]

const Navbar = () => {
    return(
        <>
            <div style={{display: "flex", marginBottom: "20px"}}>
                <span>HStore</span>
                <ul className='navLinkUI'>
                    {
                        MenuLinks.map((data, index) => (
                            <li key={index}>
                                <NavLink to={data.link}>{data.name}</NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div style={{display: "flex"}}>
                <span>HStore</span>
                <ul className='navLinkUI'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar