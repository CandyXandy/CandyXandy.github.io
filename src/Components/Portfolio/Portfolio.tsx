
import './Portfolio.css'
import theme_pattern from '../../assets/theme_pattern.svg'

import portfolio_data from '../../assets/Portfolio Entries/portfolio_data.ts'


const Portfolio = () => {

    /**
     * Handles the onClick event for the "My Github" button.
     * Sets the current location to navigate to the given URL.
     */
    const githubClickHandler = () => {
        location.href = 'https://github.com/CandyXandy';
    }


    return (
        <div id="portfolio" className='portfolio'>
            <div className="portfolio-title">
                <h1>Portfolio</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {portfolio_data.map((key, index) => {
                    return <img key={index} src={key.w_img} alt="" />
                })}
            </div>
            <div className="mywork-showmore" onClick={githubClickHandler}>
                My Github
            </div>
        </div>
    )
}

export default Portfolio