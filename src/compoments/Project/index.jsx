import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Project() {
  const {list} = useContext(UserContext);

    return (
      <section>
        <h2>Mes projets</h2>
        {list.map((item, index) => (
            <div key={index}>
              <img className='imgproject' src={item.data.urlimg} alt={item.data.title} />
              <h3>{item.data.title}</h3>
            </div>
        ))}
      </section>
    )
  }
  
  export default Project