import { CurrentUserContext } from "contexts/currentUser"
import { useContext } from "react"
import { NavLink } from "react-router-dom"

const FeedToggler = ({ tagName }) => {
    const [currentUserState] = useContext(CurrentUserContext)
    
	return (
    <div className="feed-toggler">
        <ul className="nav nav-pills outline-active">
            {currentUserState.isLoggedIn && (<li className="nav-item">
                <NavLink to="/feed" className="nav-link">
                    Your Feed
                </NavLink>
            </li>)}
            <li className="nav-item">
                <NavLink to="/" className="nav-link" exact>
                    Global Feed
                </NavLink>
            </li>
            {tagName && (
                <li className="nav-item">
                    <NavLink to={`/tags/${tagName}`} className="nav-link" exact>
                        <i className="ion-pound" />
                        {tagName}
                    </NavLink>
                </li>
            )}
        </ul>
    </div>)
}

export default FeedToggler
