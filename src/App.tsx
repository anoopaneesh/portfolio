import { About, Experiences, Hero, Navbar, Projects, SectionWrapper, Skills } from "./components";

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
        </div>
    )
}

export default App