import React from 'react'
import Layout from '../../components/layout/Layout.jsx'
import HeroSection from '../../components/heroSection/HeroSection.jsx'
import Category from '../../components/category/Category.jsx'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard.jsx'
import Track from '../../components/track/Track.jsx'
import Testimonial from '../../components/testimonial/Testimonial.jsx'

function HomePage() {
    return (
        <Layout>
            <HeroSection />
            <Category />
            <HomePageProductCard />
            <Track />
            <Testimonial />
        </Layout>
    )
}

export default HomePage