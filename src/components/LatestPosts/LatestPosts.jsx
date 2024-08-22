import "./LatestPosts.scss";
import "./LatestPost.jsx";
import ButtonFactory from "../UI/Buttons/Buttons.jsx"

const LatestPosts = () => {
  return (
    <div className="LatestPost_container">
      <LatestPosts
        imageUrl="../../../assets/photos/clock.jpg"
        link="https://linkedin.com/in/aida-cave" />
      <LatestPosts
        imageUrl="../../../assets/photos/Headphones.jpg"
        link="https://linkedin.com/in/aida-cave" />
      <ButtonFactory
        type="grey"
      >
        View Blog
      </ButtonFactory>
    </div>
  )
}

export default LatestPosts