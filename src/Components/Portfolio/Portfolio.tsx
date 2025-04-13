
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


    /**
     * Handles the onClick event for the img tags within each mywork-item.
     * Opens a new tab to the github page for the repository mentioned.
     * @param link : string : The link to the project's repository
     */
    function portfolioImgClickHandler(link: string) {
        window.open(link, '_blank')?.focus();
    }

    return (
        <div id="portfolio" className='portfolio'>
            <div className="portfolio-title">
                <h1>Portfolio</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {portfolio_data.map((key, index) => {
                    return (
                        <div className='mywork-item'>
                            <img key={index} src={key.w_img} alt="" onClick={() => portfolioImgClickHandler(key.w_link)} />
                            <div className="portfolio-tooltip">
                                <h3>{key.w_name}</h3>
                                <p>{key.w_desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="mywork-showmore" onClick={githubClickHandler}>
                My Github
            </div>
        </div>
    )
}

export default Portfolio