import React from 'react'
import MainContext from '../Context'
import Provider from '../Provider'

import { Navigation } from '../components/navigation/navigation'
import { Header } from '../components/header/header'
import { Services } from '../components/services/services'
import { Gallery } from '../components/gallery/gallery'

const ServicePage = () => {
    return (
        <Provider>

            <Navigation />

            <MainContext.Consumer>
                {
                    (MainContext) => (
                        <Header data = {MainContext.data.Header} />
                    )
                }
            </MainContext.Consumer>

            <MainContext.Consumer>
                {
                    (MainContext) => (
                        <Services data = {MainContext.data.Services} />
                    )
                }
            </MainContext.Consumer>

            <MainContext.Consumer>
                {
                    (MainContext) => (
                        <Gallery data = {MainContext.data.Gallery} />
                    )
                }
            </MainContext.Consumer>
        </Provider>
    )
}

export default ServicePage
