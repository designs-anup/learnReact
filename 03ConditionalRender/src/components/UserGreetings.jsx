import PropTypes from 'prop-types'

function UserGreetings(props){
    /*
    if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    
    return <h2>Please log in to continue</h2>
    */

    const welcomeMessage = <h2 className="welcomeMsg">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="lginPrompt">Please log in to continue</h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt)

}

// doest not work as expected
UserGreetings.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

// doest not work as expected
UserGreetings.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreetings