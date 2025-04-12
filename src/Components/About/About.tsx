
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">

                <div className="about-right">
                    <p>
                        Driven and personable graduate from the University of Adelaide (6.35/7 GPA) transitioning from a career in
                        sales and hospitality to technology, combining technical expertise with proven collaborative skills. Experienced
                        in back-end micro-service development in Go at Deloitte as well as legacy system modernisation using Java at the
                        Australian Bureau of Statistics, including DevOps integration and implementation with rigorous testing frameworks.
                        A laser-focused team player who is passionate about delivering scalable, efficient solutions while thriving in
                        dynamic and agile environments.
                    </p>
                    <div className="about-skills">
                        <div className="about-skill"><p>Programming: Go (Golang), Java, JavaScript, SQL (PL/SQL), SAS, Python, C++, C#, C</p></div>
                        <div className="about-skill"><p>Frameworks/Libraries: Spring Framework, Swing, Vue.js, Node.js, react.js, gRPC</p></div>
                        <div className="about-skill"><p>Databases/ORM: JDBC, PostgreSQL, MySQL</p></div>
                        <div className="about-skill"><p>DevOps/Cloud: Docker, Kubernetes, Jenkins, Maven, Git, CI/CD Pipelines</p></div>
                        <div className="about-skill"><p>Practices: Agile/Scrum, Test-Driven Development (TDD), Legacy System Modernisation, RESTful APIs</p></div>
                        <div className="about-skill"><p>Soft Skills: Client Needs Analysis, Cross-Functional Collaboration, Process Optimisation, Technical Mentorship</p></div>
                    </div>
                </div>





            </div>
            <div className="about-experience">
                <div className="about-title">
                    <h1>Experience</h1>
                    <img src={theme_pattern} alt="" />
                </div>

                <div className="about-job">
                    <h2>Intern @ Deloitte</h2>
                    <h3>Jan 2025 - Feb 2025</h3>
                    <p>
                        Engineered a Go micro-service leveraging generative AI to parse unstructured documents
                        and create constraint-rich database schemas, reducing manual schema design time by ~40%.
                        Implemented gRPC for inter-service communication, containerised using Docker, and
                        orchestrated with Kubernetes for scalable load balancing across distributed systems.
                        Achieved 96% validation accuracy for parsed entity relationships and constraints
                        during testing. Integrated into Deloitte`s Optimal Reality platform to streamline
                        schema design for enterprise clients.
                    </p>
                </div>
                <div className='about-job'>
                    <h2>Development and Programming Officer @ Australian Bureau of Statistics</h2>
                    <h3>Nov 2023 - Jul 2024</h3>
                    <p>
                        Spearheaded the modernisation of legacy systems by re-engineering OpenText Team Developer
                        applications into scalable Java solutions utilising Swing, Spring-boot, and JDBC, achieving
                        enterprise-grade performance and maintainability. The initial application designed to
                        replace a mission-critical legacy module exceeded stakeholder expectations, leading to
                        project ownership and the development of 3 additional applications that streamlined
                        data processing workflows. Leveraged DevOps practices to automate CI/CD pipelines
                        with Jenkins and Maven, ensuring testing compliance and reducing deployment errors
                        within my team by 30%. Expanded expertise in database integration, utilising SAS
                        for statistical analysis and PL/SQL to optimise legacy data migration. Collaborated
                        with cross-functional teams to align applications with ABS data governance standards.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About