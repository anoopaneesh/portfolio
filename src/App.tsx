import { About, Contact, Experiences, Hero, Navbar, Projects, SectionWrapper, Skills, StarCanvas } from "./components";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <SectionWrapper id="about">
                <About />
            </SectionWrapper>
            <SectionWrapper id="experiences">
                <Experiences />
            </SectionWrapper>
            <SectionWrapper id="skills">
                <Skills />
            </SectionWrapper>
            <SectionWrapper id="works">
                <Projects />
            </SectionWrapper>
            <div className="relative z-0">
                <SectionWrapper id="contact">
                    <Contact />
                </SectionWrapper>
                <StarCanvas />
            </div>
        </div>
    )
}

export default App