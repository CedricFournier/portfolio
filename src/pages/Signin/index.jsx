import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import Button, { BUTTON_TYPES } from "../../composants/Button"
import Field, { FIELD_TYPES } from "../../composants/Field";

function Signin() {
    const form = useRef();
    const { signIn } = useContext(UserContext);
    const navigate = useNavigate();
    const [validation, setValidation] = useState(false);

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            await signIn(
              form.current[0].value,
              form.current[1].value
            );
            setValidation(false)
            navigate("/admin");
          } catch {
            setValidation(true)
          }
    }

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form ref={form} onSubmit={e => handleForm(e)}>
                    <Field type={FIELD_TYPES.INPUT_MAIL} content="Username" id="username" defaultValue={"useremail"}  />
                    <Field type={FIELD_TYPES.INPUT_PASSWORD} content="Password" id="password" defaultValue={"userpswd"}  />
                    <div className="input-remember">
                        <label>
                            <input type="checkbox" id="remember-me" />
                            Remember me
                        </label>
                    </div>
                    {!validation ? 
                        <p id="errlogin">Erreur dans l’identifiant ou le mot de passe</p>
                        : 
                        null
                    }
                    <Button type={BUTTON_TYPES.SUBMIT} class="button sign-in-button" content="Sign in"/>
                </form>
            </section>
        </main>
    )
  }
  
  export default Signin