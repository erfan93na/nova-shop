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
        this.setState({sort:e.target.value})

    }
    handleSizeChange(e){
        this.setState({size:e.target.value})
    }
render() {
          const sort=this.state.sort; const size=this.state.size

   let products=data.products.sort(function(a,b){return (sort==="highest")?(b.price-a.price):
        (sort=="lowest")?(a.price-b.price):data.products}).filter((item,ind,array)=>size===""?{}:item["availableSizes"].indexOf(size.toUpperCase())!=-1)
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