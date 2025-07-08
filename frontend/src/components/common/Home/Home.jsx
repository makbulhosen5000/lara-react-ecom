import React from 'react'
import { Helmet } from 'react-helmet-async'
import LatestProducts from '../../../pages/product/LatestProducts';
import Slider from '../Slider/Slider';
import FeaturesProducts from '../../../pages/product/FeaturedProducts';


export default function Home() {
  return (
    <>
    <Helmet>
      <title>MakbulAgro||Home</title>
    </Helmet>
    <Slider/>
    <LatestProducts/>
    <FeaturesProducts/>
    </>
  )
}
