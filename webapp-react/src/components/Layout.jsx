import { Link } from "react-router-dom"

function Layout() {
    return (
        <>
            {/* navbar chiara con ombra sottile */}
            <nav className="navbar navbar-expand-lg sticky-top shadow-sm">
                <div className="container">
                    <Link className="navbar-brand" to="/">MovieApp</Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Layout
