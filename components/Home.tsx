import React, { FC } from 'react'
import Nav from './Nav'
interface user {
    mail: string,
    name: string,
    image: string
}
import JokeBox from './JokeBox';

const Home: FC<user> = ({mail, name, image}): JSX.Element => {
    return(
        <main>
            <Nav mail={mail} name={name} image={image} />
            <JokeBox />
        </main>
    )
};

export default Home