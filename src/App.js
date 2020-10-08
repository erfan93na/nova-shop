import React from "react";
import './Styles/style.scss';
import data from "./data";
import Products from "./Components/Products";
import Filters from "./Components/Filters";


class App extends React.Component {
      constructor() {
            super();
            this.state={products:data.products,size:"",sort:""};
            this.handleOrderChange=this.handleOrderChange.bind(this)
          this.handleSizeChange=this.handleSizeChange.bind(this)


      }
componentDidUpdate(prevProps, prevState, snapshot) {console.log(this.state)
}

    handleOrderChange(e){
          const value=e.target.value
        this.setState({sort:value,products:this.state.products.sort(function(a,b){return (value==="highest")?(b.price-a.price):
                (value=="lowest")?(a.price-b.price):a["_id"].slice(-1)-b["_id"].slice(-1)})})

    }
    handleSizeChange(e){
        const value=e.target.value

        this.setState({size:value,products:data.products.filter((item )=>(value==="")?{}:item["availableSizes"].indexOf(value.toUpperCase())!=-1)})
    }
render() {
const products=this.state.products
    return (
          <div className="grid-container">
                <header>
                      <a href="#">Nova Shop</a>
                </header>
                <main><div className="content">
                    <div className="main">
                        <Filters count={products.length} handleOrderChange={this.handleOrderChange} handleSizeChange={this.handleSizeChange}/>
                        <Products products={products}/></div>
                    <div className="sidebar"></div>
                </div>
                </main>
                <footer>Built with React & Redux.</footer>
          </div>
      )
}


}

export default App