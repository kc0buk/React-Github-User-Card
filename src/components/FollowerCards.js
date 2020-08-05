import React from 'react'

const FollowerCard = props => {
    console.log(props)
    return(
        <div className='card'>
            <div className='followerHeader'>
            <h3>{props.username}'s Followers</h3>
            </div>
            {
                props.data.map( user => {
                    return (
                    <div className='card-info'>
                        <img src={user.avatar_url} alt={user.login}/>
                        <p className='username'>GitHub: <a href={user.html_url}>{user.login}</a></p>
                    </div>
                    )

                })
            }
      
      </div>
    )
}


export default FollowerCard