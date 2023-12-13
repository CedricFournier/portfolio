import { Box } from "@mui/material"
import Presentation from "../../compoments/Presentation"
import Project from "../../compoments/Project"
import Skill from "../../compoments/Skill/Index"

function Home() {
    return (
      <Box component={'main'} margin={'0 auto'}>
        <Presentation />
        <Skill />
        <Project />
      </Box>
    )
  }
  
  export default Home