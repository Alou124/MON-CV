
import InfosPerso from './components/InfosPerso'
import Competences from './components/Competences'
import './App.css'
import Experiences from './components/Experiences'

function App() {
  return (
    <div>
      <header className="header text-white bg-primary">
        <h3 className="text-center p-2">
          CURRICULUM VITAE
        </h3>
      </header>

      <InfosPerso />

      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-6">
            <div
              className="card bg-light mb-3"
              style={{ maxWidth: "50rem" }}
            >
              <div className="card-body">
                <Competences />
            </div>
            </div>
          </div>
                    <div className="col-sm-6">
            <div
              className="card bg-light mb-3"
              style={{ maxWidth: "50rem" }}
            >
              <div className="card-body">
                <Experiences />
            </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
