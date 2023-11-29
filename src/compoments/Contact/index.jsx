import Field, { FIELD_TYPES } from '../../composants/Field';

function Contact() {
    return (
      <section>
        <form>
            <Field 
                type={FIELD_TYPES.INPUT_TEXT} 
                content="Nom : " 
                id="name" 
                disabled="disabled" 
            />
            <Field 
                type={FIELD_TYPES.INPUT_TEXT} 
                content="Email : " 
                id="email" 
                disabled="disabled" 
            />
        </form>
      </section>
    )
  }
  
  export default Contact