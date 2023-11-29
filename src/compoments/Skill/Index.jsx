import logoreact from '../../assets/img/logo_react.svg';
import logofirebase from '../../assets/img/logo_firebase.svg';
import logomangodb from '../../assets/img/logo_mangodb.svg';

function Skill() {
    return (
      <section>
        <h2>mes compétences</h2>
        <div>
          <img className='logoskill' src={logoreact} alt="logo de React" />
          <img className='logoskill' src={logofirebase} alt="logo de Firebase" />
          <img className='logoskill' src={logomangodb} alt="logo de Mangodb" />
        </div>       
      </section>
    )
  }
  
  export default Skill