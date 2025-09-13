const List = (props) => {

    // const fruits = ["apple", "orange", "banana", "coconut", "pineapple"]
    // const listItems = fruits.map((fruit)=>(<li>{fruit}</li>))

    /*
    const fruits = [{id:1, name: "apple", calaries: 95}, 
                    {id:2, name: "orange", calaries: 45}, 
                    {id:3, name: "banana", calaries: 105}, 
                    {id:4, name: "coconut", calaries: 159}, 
                    {id:5, name: "pineapple", calaries: 37}]
    */

    // fruits.sort((a,b) => (a.name.localeCompare(b.name))) // ALPHABETICAL
    // fruits.sort((a,b) => (b.name.localeCompare(a.name))) // REVERSE ALPHABETICAL
    // fruits.sort((a,b) => (a.calaries - b.calaries)) // NUMERIC
    // fruits.sort((a,b) => (b.calaries - a.calaries)) // REVERSE NUMERIC
    
    // const listItems = fruits.map((fruit)=>(<li key={fruit.id}>{fruit.name} : <strong>{fruit.calaries}</strong></li>))

    // const lowCalFruit = fruits.filter((fruit) => (fruit.calaries < 100))
    // const listItems = lowCalFruit.map((fruit)=>(<li key={fruit.id}>{fruit.name} : <strong>{fruit.calaries}</strong></li>))

    const category = props.category
    const itemList = props.items
    const listItems = itemList.map((fruit)=>(<li key={fruit.id}>{fruit.name} : <strong>{fruit.calaries}</strong></li>))

    return(
        <>
            <h3>{category}</h3>
            <ul>{listItems}</ul>
        </>
    )
}
// seems not working
List.defaultProps = {
    category: "Category",
    items: []
}

export default List