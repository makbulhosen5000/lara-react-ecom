import React, { Component } from 'react'
import { Helmet } from 'react-helmet-async'


export class ProductDetails extends Component {
  render() {
    return (
      <>
          <Helmet>
                <title>MakbulAgro||Product Details</title>
          </Helmet>
          <div className='container'>
            <h1>Product Details</h1>
            <p>Product details will be displayed here.</p>
     
          </div>
      </>
    )
  }
}

export default ProductDetails