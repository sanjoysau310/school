import React from 'react'
import { About } from './About'
import { Clients } from './Clients'
import { Feature } from './Feature'
import { Service } from './Service'
import { TagLine } from './TagLine'

export const Home = () => {
    return (
        <div>
            <TagLine />
            <Feature />
            <About />
            <Service />
            <Clients />
        </div>
    )
}
