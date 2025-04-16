import React from 'react'
import { Helmet } from 'react-helmet-async'
import Product from '../../../pages/product/Product';
import Slider from '../Slider/Slider';


export default function Home() {
  return (
    <>
    <Helmet>
      <title>MakbulAgro||Home</title>
    </Helmet>
    <Slider/>
    <Product/>
    </>
  )
}
