import raveImg from './RavePic1.jpg'
import missileCmdImg from './MissileCommand1.png'
import paxosImg from './paxosImg1.webp'
import websiteImg from './websiteImg1.png'

const portfolio_data: { w_no: number, w_name: string, w_img: string, w_link: string }[] = [
    {
        w_no: 1,
        w_name: "Rave",
        w_img: raveImg,
        w_link: "https://github.com/CandyXandy/Rave"
    },
    {
        w_no: 2,
        w_name: "Missile Command (Processing Recreation)",
        w_img: missileCmdImg,
        w_link: "https://github.com/CandyXandy/Missile-Command"
    },
    {
        w_no: 3,
        w_name: "Paxos Implementation Example",
        w_img: paxosImg,
        w_link: "https://github.com/CandyXandy/Paxos_example"
    },
    {
        w_no: 4,
        w_name: "Portfolio Website",
        w_img: websiteImg,
        w_link: "https://github.com/CandyXandy/CandyXandy.github.io"
    },

]

export default portfolio_data;