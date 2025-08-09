const BoxComponent = (props) => {
  // console.log(props);
  
  const {children, title, bgColor, textColor, boxHeight, large} = props

  return(
    <>
    <div style={{
      backgroundColor : bgColor, 
      color : textColor,
      height : boxHeight ? boxHeight+"px" : "50px",
      fontSize : (large === true) ? "30px" : "12px"
      }}>{title}</div>
    <div>{children}</div>
    </>
  )
}

export default BoxComponent