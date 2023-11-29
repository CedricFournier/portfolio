import Contact from "../../compoments/Contact"
import Presentation from "../../compoments/Presentation"
import Project from "../../compoments/Project"
import Skill from "../../compoments/Skill/Index"

function Home() {
    return (
      <main>
        <Presentation />
        <Skill />
        <Project />
        <Contact />
      </main>
    )
  }
  
  export default Home