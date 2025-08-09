import React from 'react'
import { Helmet } from 'react-helmet-async'
import Shop from '../../../pages/product/Shop';
import Slider from '../slider/Slider';


export default function Home() {
  return (
    <>
    <Helmet>
      <title>MakbulAgro||Home</title>
    </Helmet>
    <Slider/>
    <Shop/>
    </>
  )
}
