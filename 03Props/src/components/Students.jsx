import PropTypes from 'prop-types'

const Students = (props) => {
    return(
        <>
            <div style={{border : '1px solid lavender'}}>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Student: {props.isStudent ? 'yes' : 'no'}</p>
            </div>
        </>
    )
}
// not working as expected
Students.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
// not working as expected
Students.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}


export default Students