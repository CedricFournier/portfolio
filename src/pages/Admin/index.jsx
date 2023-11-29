import Getproject from "../../compoments/Getproject"
import Postproject from "../../compoments/Postproject"

function Admin() {
    return (
      <main>
        <section className="admin-section">
          <h2>AJOUTER UN PROJET</h2>
          <Postproject />
        </section>
        <section className="admin-section">
          <h2>GERER LES PROJETS</h2>
          <Getproject />
        </section>
      </main>
    )
  }
  
  export default Admin