import React from 'react'

const Follower = ({ avatar_url : img , html_url, login}) => {
  return (
    <article className="card">
      <img src={img} alt="user" />
      <h4>{login}</h4>
      <a href={html_url} className="btn">view profile</a>
    </article>
  )
}

export default Follower
