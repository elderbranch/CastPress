import "./Header.scss"
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__container" id="header">
        <div
          onClick={() => {
            navigate("/")
          }}
          className="header__logo">
          <ReactSVG src="assets/Logo.svg" />
        </div>
        <div className="header__nav">
          <div className="header__nav-container">
            <div className="header__episodes">EPISODES
              <ReactSVG
              className="header__burger_icon"
              src="assets/burger_icon.svg"/>
            </div>
            <div className="header__blog">BLOG</div>
            <div className="header__contact">CONTACT</div>
            <div className="header__donate">
              DONATE</div>
            <>
            <ReactSVG 
            className="header__search-button"
              src="../../assets/icons/search_icon.svg"
              onClick={() => {
                navigate("/search");
              }}
            />
            </>
          </div>
        </div>
      </div>
      <div className="header__line"></div>
    </div>
  )
}

export default Header