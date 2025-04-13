import raveImg from './RavePic1.jpg'
import missileCmdImg from './MissileCommand1.png'
import paxosImg from './paxosImg1.webp'
import websiteImg from './websiteImg1.png'

const portfolio_data: { w_no: number, w_name: string, w_img: string, w_link: string, w_desc: string }[] = [
    {
        w_no: 1,
        w_name: "Rave",
        w_img: raveImg,
        w_link: "https://github.com/CandyXandy/Rave",
        w_desc: "Rave is a club management app, built with Vue and Express. It's designed to enable student clubs promote themselves, find new members, and keep their existing members updated. The app persists data in a PostgreSQL database."
    },
    {
        w_no: 2,
        w_name: "Missile Command (Processing Recreation)",
        w_img: missileCmdImg,
        w_link: "https://github.com/CandyXandy/Missile-Command",
        w_desc: "This is a recreation of the Atari 2600 video game Missile Command. Can be run inside the Processing IDE. This can be found at Processing Download Page."
    },
    {
        w_no: 3,
        w_name: "Paxos Implementation Example",
        w_img: paxosImg,
        w_link: "https://github.com/CandyXandy/Paxos_example",
        w_desc: "This is an implementation of the Paxos algorithm. We use the Paxos algorithm in this case to elect a president for the Adelaide Suburbs Council. The council is made up of 9 members, any of which can be elected president. However, the council members are prone to acting arbitrarily and may not be reliable."
    },
    {
        w_no: 4,
        w_name: "Portfolio Website",
        w_img: websiteImg,
        w_link: "https://github.com/CandyXandy/CandyXandy.github.io",
        w_desc: "This project is a single page web application built with HTML, CSS, and Typescript, using the React.JS framework to enable reactivity. It features a description about me, my work, where I'm from, and what I am capable of as a software engineer. It is also possible to send me an email through an on-page form that utilises the web3 api to handle messages."
    },

]

export default portfolio_data;