import "./NavBar.css"

function NavBar() {
    return (

        <nav className='navBar'>

            <a href="/" className="site-title">PomoCafe</a>
            <ul className="NavOp">
                <li><a href="/SignUp">SignUp</a></li>
                <li><a href="/Login">Login</a></li>
            </ul>

        </nav>

    );
}
export default NavBar;