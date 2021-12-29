import React from 'react'
import MainContext from '../Context'
import  Provider  from '../Provider';

import { About } from '../components/about/about';
import { Navigation } from '../components/navigation/navigation';
import { Header } from '../components/header/header';
import { Contact } from '../components/contact/contact';
import { Testimonials } from '../components/testimonials/testimonials';

const AboutPage = () => {
    return (
        <Provider>
            <Navigation />

        <MainContext.Consumer>
            {
                (MainContext)=>(
                    <Header data = {MainContext.data.About} />
                )
            }
        </MainContext.Consumer>

        <MainContext.Consumer>
            {
                (MainContext)=>(
                    <About data = {MainContext.data.About} />
                )
            }
        </MainContext.Consumer>

        <MainContext.Consumer>
            {
                (MainContext)=>(
                    <Testimonials data = {MainContext.data.Testimonials} />
                )
            }
        </MainContext.Consumer>

        <MainContext.Consumer>
            {
                (MainContext)=>(
                    <Contact data = {MainContext.data.Contact} />
                )
            }
        </MainContext.Consumer>
        
        </Provider>
    )
}

export default AboutPage
