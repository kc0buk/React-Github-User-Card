import React from 'react'

const FollowerCard = props => {
    console.log(props)
    return(
        <div className='card'>
            
            <h3 className='name'>{props.username}'s Followers</h3>
            {
                props.data.map( user => {
                    return (
                    <div className='card-info'>
                        <img src={user.avatar_url} />
                        <p className='username'>GitHub: <a href={user.html_url}>{user.login}</a></p>
                    </div>
                    )

                })
            }

        {/* <h3 className='name'>{props.data.name}</h3>
        
        <p>{`Location: ${props.data.location}`}</p>
        <p>{`Followers: ${props.data.followers}`}</p>
        <p>{`Following: ${props.data.following}`}</p>
        <p>{`Bio: ${props.data.bio}`}</p> */}
      
      </div>
    )
}


export default FollowerCard