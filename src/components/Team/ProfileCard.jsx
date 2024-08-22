const ProfileCard = (props) => {
  return (
    <div className="profile-card">
    <img src={props.imageUrl} alt={props.name} />
    <p>{props.position}</p>
    <h2>{props.name}</h2>
    <div className="social-links">
      {props.linkedin && <a href={props.linkedin}>
        <img src="../../../assets/company_icons/In.svg" alt="" />
        <i className="fab fa-linkedin"></i></a>}
      {props.twitter && <a href={props.twitter}>
        <img src="../../../assets/company_icons/GitHub.svg" alt="" />
        <i className="fab fa-twitter"></i></a>}
      {props.email && <a href={`mailto:${props.email}`}>
        <img src="../../../assets/company_icons/twitter.svg" alt="" />
        <i className="fas fa-envelope"></i></a>}
    </div>
  </div>

  );
};

export default ProfileCard;