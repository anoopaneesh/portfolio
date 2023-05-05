import { About, Experiences, Hero, Navbar, SectionWrapper, Skills } from "./components";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <SectionWrapper id="about">
                <About />
            </SectionWrapper>
            <SectionWrapper id="works">
                <Experiences />
            </SectionWrapper>
            <SectionWrapper id="skills">
                <Skills />
            </SectionWrapper>
        </div>
    )
}

export default App