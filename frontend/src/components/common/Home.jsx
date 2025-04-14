import React from 'react'
import { Helmet } from 'react-helmet-async'
import Slider from '../slider/Slider';
import Product from './Product';


export default function Home() {
  return (
    <>
    <Helmet>
      <title>Home|Ecom</title>
    </Helmet>
    <Slider/>
    <Product/>
    </>
  )
}
