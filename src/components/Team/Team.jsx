import ProfileCard from "./ProfileCard";
import "./ProfileCard.scss"

const Team = () => {
  return (
    <div className="team">
      <ProfileCard
        imageUrl="../../../assets/photos/woman2.png"
        name="Aida Cave"
        position="POSITION"
        linkedin="https://linkedin.com/in/aida-cave"
        twitter="https://twitter.com/aida-cave"
        email="aida.cave@example.com"
      />
      <ProfileCard
        imageUrl="../../../assets/photos/man.png"
        name="Nick Carleton"
        position="POSITION"
        linkedin="https://linkedin.com/in/nick-carleton"
        twitter="https://twitter.com/nick-carleton"
        email="nick.carleton@example.com"
      />
    </div>
  );
};

export default Team;