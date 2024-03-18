import React from 'react'
import './App.css'
import img1 from '../src/assets/img/Group 1.svg'
import img2 from '../src/assets/img/Group.svg'
import img3 from '../src/assets/img/Frame 24.png'
import img4 from '../src/assets/img/Group (1).svg'
import img5 from '../src/assets/img/Group (2).svg'
import img6 from '../src/assets/img/Group 14.svg'

function App() {
    return (
        <div className='App'>
            <header className="header">
                <div className="header__1 flex">
                    <img src={img1} alt="img1" />
                    <h1 className='text-white ml-3'>Start</h1>
                </div>
                <ul className='flex justify-end items-center mt-[-40px]'>
                    <li><a href="#" className='text-white px-5'>Home</a></li>
                    <li><a href="#" className='text-white px-5'>Portfolio</a></li>
                    <li><a href="#" className='text-white px-5'>Services</a></li>
                    <li><a href="#" className='text-white px-5'>Contact</a></li>
                </ul>
            </header>
            <section className="main">
                <div className="right float-right mt-[-40px]">
                    <img src={img2} alt="" className='' />
                </div>
                <div className="left">
                    <h2 className='text-white'>WELCOME</h2>
                    <h1 className='text-white mt-5'>Lorem ipsum dolor sit <br /> amet consectetur</h1>
                    <p className='text-white mt-7'>Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Suscipit nemo hic quos, ab, dolor aperiam nobis <br /> cum est eos error ipsum, voluptate culpa nesciunt <br /> delectus iste?</p>
                    <button className='mt-10'>Explore</button>
                </div>
            </section>
            <section className="partners">
                <h1>PARTNERS</h1>
                <h2>Lorem Ipsum Dolor</h2>
                <h3>Lorem ipsum, dolor sit amet consectetur <br />
                    adipisicing elit.</h3>
                <img className='m-auto mt-[40px]' src={img3} alt="" />
                <div className="flex">
                    <div className="mt-10">
                        <img src={img4} alt="" />
                    </div>
                    <div className="fir  float-right ml-[100px] mt-[100px]">
                        <h5>
                            Lorem ipsum dolor sit <br /> amet consectetur
                        </h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos <br /> error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <button className='mt-10'>Learn More</button>
                    </div>
                </div>
                <div className="flex">
                    <div className="fir  float-left ml-[100px] mt-[150px]">
                        <h5>
                            Lorem ipsum dolor sit <br /> amet consectetur
                        </h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos <br /> error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <button className='mt-10 '>Learn More</button>
                    </div>
                    <div className="   float-right ml-[100px] mt-[0px]">
                        <img src={img5} alt="" />
                    </div>
                </div>
                <section className="team">
                    <h1>TEAM</h1>
                    <h2>Our Talents</h2>
                    <h3>Lorem ipsum, dolor sit amet consectetur <br />
                        Suscipit nemo hic quos, ab,</h3>
                    <ul className='flex justify-evenly mt-[50px]'>
                        <li>
                            <img src={img6} alt="" />
                            <h6>Peg Legge</h6>
                            <p>CEO</p>
                        </li>
                        <li>
                            <img src={img6} alt="" />
                            <h6>Richard Guerra</h6>
                            <p>CTO</p>
                        </li>
                        <li>
                            <img src={img6} alt="" />
                            <h6>Alexandra Stolz</h6>
                            <p>DESIGNER</p>
                        </li>
                        <li>
                            <img src={img6} alt="" />
                            <h6>Janet Bray</h6>
                            <p>DEVELOPER</p>
                        </li>
                    </ul>
                    <button>VIEW TEAM</button>
                </section>
            </section>
            <footer>
                <h1 className='text-white text-center'>© Start, 2022. All rights reserved.</h1>
            </footer>
        </div >
    )
}

export default App