import React from 'react'
import MainContext from '../Context'
import Provider from '../Provider'

import { Navigation } from '../components/navigation/navigation'
import { Team } from '../components/team/Team'
import { Contact } from '../components/contact/contact'
import { Header } from '../components/header/header'

const ConatctPage = () => {
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
                        <Team data = {MainContext.data.Team} />
                    )
                }
            </MainContext.Consumer>

            <MainContext.Consumer>
                {
                    (MainContext) => (
                        <Contact data = {MainContext.data.Contact} />
                    )
                }
               
            </MainContext.Consumer>

        </Provider>
    )
}

export default ConatctPage
