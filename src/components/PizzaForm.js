import React from "react"

const PizzaForm = (props) => {



  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={
                props.pizzaToEdit.topping
              }
              onChange={props.handleToppingChange}
              />
        </div>
        <div className="col">
          <select onChange={props.handleSizeChange} value={props.pizzaToEdit.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value={"Vegetarian"} onChange={props.handleVegChange} checked={props.pizzaToEdit.vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" onChange={props.handleVegChange} checked={!props.pizzaToEdit.vegetarian ? true : false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.handlePizzaEdit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
