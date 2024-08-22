import ButtonFactory from "../UI/Buttons/Buttons";
import "./GreatingBlock.scss"

const GreatingBlock = () => {
  return (
    <div className="greeting__block">
      <img src="../../../assets/photos/woman.jpg" alt="" />
      <h1>How to rapidly test any experience!</h1>
      <ButtonFactory
        type="grey">
        <span className="greeting__play-icon"></span>
        Episode page
      </ButtonFactory>
      <span className="greeting__text">LISTEN ON</span>
      <div className="greeting__link">
        <div className="greeting__link-spot">
          <a href="#"><img src="../../../assets/company_icons/spotify_ico.svg" alt="" /></a>
        </div>
        <div className="greeting__link-icloud">
          <a href="#"><img src="../../../assets/company_icons/cloud_ico.svg" alt="" /></a>
        </div>
        <div className="greeting__link-apple">
          <a href="#"> <img src="../../../assets/company_icons/apple_ico.svg" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default GreatingBlock;