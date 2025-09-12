const Students = (props) => {
    return(
        <>
            <div style={{border : '1px solid lavender'}}>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Is Student: {props.isStudent ? 'yes' : 'no'}</p>
            </div>
        </>
    )
}

export default Students