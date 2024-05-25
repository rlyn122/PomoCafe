import "./NavBar.css"

function NavBar(props) {
    const { loggedIn, setLoggedIn } = props;

    return (

        <nav className='navBar'>

            <a href="/" className="site-title">PomoCafe</a>
            <div className="NavOp">
                <a href="/SignUp">SignUp</a>
                {loggedIn ? <a href="/Logout">Logout</a> : <a href="/Login">Login</a>}
            </div>

        </nav>

    );
}
export default NavBar;