import { About, Experiences, Hero, Navbar, SectionWrapper } from "./components";

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
        </div>
    )
}

export default App