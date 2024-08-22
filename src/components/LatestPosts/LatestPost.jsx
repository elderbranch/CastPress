const LatestPost = (props) => {
  return (
    <div className="profile-card">
      <img src={props.imageUrl} alt={props.name} />
      <h2>{props.title}</h2>
      <p>{props.date}</p>
      <div className="link">Read more</div>
    </div>
  )
}

export default LatestPost