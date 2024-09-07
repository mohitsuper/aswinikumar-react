import React from 'react'
import Layout from '../../commponts/layout/Layout'
import Swiper from '../../commponts/swiper/Swiper'
import Category from '../../commponts/categroy/category'
import NewProducts from '../../commponts/NewProducts.jsx/N/NewProducts'
import TranDingProdus from '../../commponts/TrandingProducts.jsx/TranDingProdus'
import Benner from '../../commponts/Banner/Benner'
import ProductDesribe from '../../commponts/ProductDesribe/ProductDesribe'
import QuerySection from '../../commponts/QuerySection/QuerySection'

export default function Home() {
  return (
    <div>
        <Layout>
            <Swiper/>
            <Category/>
            <NewProducts/>
            <Benner Image={"./images/bennar/y2.JPG"}/>
            <TranDingProdus/>
            <Benner Image={"./images/bennar/y1.JPG"}/>
            <ProductDesribe/>
            <QuerySection/>
        </Layout>
    </div>
  )
}
