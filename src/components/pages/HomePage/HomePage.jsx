import "./HomePage.scss";

import Slider from "../../Slider/Slider";
import Team from "../../Team/Team";
import GreatingBlock from "../../GreatingBlock/GreatingBlock";
import LatestPosts from "../../LatestPosts/LatestPosts";


const HomePage = () => {
  return (
    <div className="home__page">
      <GreatingBlock />
      <Slider />
      <Team />
      <LatestPosts/>
    </div>
  )
}

export default HomePage;