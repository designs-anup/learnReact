import { useState } from "react"

// onChange = event handler used primarily with form emements 
// ex. <input>, <textarea>, <select>, <radio> 
// Triggers a function every time the value of the input changes

const OnChange = () => {
    const [name, setName] = useState('Guest')
    const [qnty, setQnty] = useState(0)
    const [comment, SetComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, SetShipping] = useState("Delivery")

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleQntyChange(e){
        setQnty(e.target.value)
    }

    function handleCommentChange(e){
        SetComment(e.target.value)
    }

    function handlePaymentChange(e){
        setPayment(e.target.value)
    }

    function handleShippingChange(e){
        SetShipping(e.target.value)
    }

    return(
        <>
            <h2>Learn On Change</h2>

            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={qnty} onChange={handleQntyChange} type="number" />
            <p>Quanity: {qnty}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instruction" />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Master">Master</option>
                <option value="Rupay">Rupay</option>
                <option value="UPI">UPI</option>
            </select>
            <p>Payment Mode: {payment}</p>

            <label><input type="radio" value="Pick Up" 
                    checked={shipping === "Pick Up"} 
                    onChange={handleShippingChange}/>Pick Up</label>
            <label><input type="radio" value="Delivery"
                    checked={shipping === "Delivery"} 
                    onChange={handleShippingChange}/>Delivery</label>
            <p>Shipping: {shipping}</p>
        </>
    )
}

export default OnChange