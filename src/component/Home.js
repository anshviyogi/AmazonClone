import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
        <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/MI/Under1499_Tallhero_3000x1200._CB634138928_.jpg'/>

        {/* Creating Products */}
        {/* id,title,price,ratings,image */}
        <div className='home__row'>
        <Product
        id='1'
        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
        price = {521}
        ratings={5}
        image='https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg'
        />

      <Product
        id='2'
        title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life"
        price = {349}
        ratings={3}
        image='https://images-na.ssl-images-amazon.com/images/I/516pmXNNmCL._SX324_BO1,204,203,200_.jpg'
        />
        </div>

        <div className='home__row'>

        <Product
        id='3'
        title="realme narzo 50A (Oxygen Blue , 4GB RAM + 64 GB Storage)"
        price = {10499}
        ratings={3}
        image='https://m.media-amazon.com/images/I/81Ke5qtC6oL._SX569_.jpg'
        />

        <Product
        id='4'
        title="JBL Quantum 100, Wired Over Ear Gaming Headphones with mic for PC, Mobile, Laptop, PS4"
        price = {1999}
        ratings={5}
        image='https://images-eu.ssl-images-amazon.com/images/I/41qsdfQBoZL._SX300_SY300_QL70_FMwebp_.jpg'
        />

        <Product
        id='5'
        title="Apple iPhone 13 Pro (128GB) - Sierra Blue"
        price = {107900}
        ratings={4}
        image='https://m.media-amazon.com/images/I/31TCJmM4+mL._SX342_SY445_.jpg'
        />
        </div>

        <div className='home__row'>
        <Product
        id='6'
        title="2021 Apple iMac with 4.5K Retina Display (24-inch/60.96 cm, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB) - Green"
        price = {119999}
        ratings={5}
        image='https://m.media-amazon.com/images/I/61eoyE0l9gS._SX679_.jpg'
        />
        </div>
    </div>
  )
}

export default Home