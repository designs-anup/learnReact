function Card({username, email='not available'}){
    return(
        <>
            <div>
                <h2>Name of the player is {username}</h2>
                <ul>
                    <li>Email id : {email}</li>
                </ul>
            </div>
        </>
    )
}

export default Card