import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    pizzaToEdit: {}
  }

  componentDidMount(){
    fetch('http://localhost:3001/pizzas')
    .then(resp => resp.json())
    .then(pizzas => this.setState({pizzas}))
  }

  handleEdit = (id) => {
    this.setState({
      pizzaToEdit: this.state.pizzas.find(pizza => pizza.id === id)
    })
  }

  handleToppingChange = (e) => {

    const newPizza = {...this.state.pizzaToEdit, topping: e.target.value}

    this.setState({
      pizzaToEdit: newPizza
    })

  }


  handleSizeChange = (e) => {

    const newPizza = {...this.state.pizzaToEdit, size: e.target.value}

    this.setState({
      pizzaToEdit: newPizza
    })

  }

  handleVegChange = (e) => {

    if (e.target.value === "Vegetarian"){
      const newPizza = {...this.state.pizzaToEdit, vegetarian: true}

      this.setState({
        pizzaToEdit: newPizza
      })
    } else {
        const newPizza = {...this.state.pizzaToEdit, vegetarian: false}

        this.setState({
          pizzaToEdit: newPizza
        })
    }
  }

  handlePizzaEdit = (e) => {
    e.preventDefault()

    fetch(`http://localhost:3001/pizzas/${this.state.pizzaToEdit.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(this.state.pizzaToEdit)
    })
    .then(resp => resp.json())
    .then(json => {

      const newPizzas = this.state.pizzas.map(pizza => {
        return pizza.id === json.id ? json : pizza
      })

      this.setState({
        pizzas: newPizzas
      })

    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleVegChange={this.handleVegChange} handleSizeChange={this.handleSizeChange} handleToppingChange={this.handleToppingChange} pizzaToEdit={this.state.pizzaToEdit} handlePizzaEdit={this.handlePizzaEdit}/>
        <PizzaList handleEdit={this.handleEdit} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
