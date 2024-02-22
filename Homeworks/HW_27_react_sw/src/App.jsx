import './App.css'

function App() {
    return (
        <div className="container-fluid">
            <header>
                <nav className="fixed-top">
                    <ul className="nav mt-1 ms-5">
                        <li>
                            <button type="button" className="nav-item btn btn-danger mx-1">Home</button>
                        </li>
                        <li>
                            <button type="button" className="nav-item btn btn-danger mx-1">About me</button>
                        </li>
                        <li>
                            <button type="button" className="nav-item btn btn-danger mx-1">Star Wars</button>
                        </li>
                        <li>
                            <button type="button" className="nav-item btn btn-danger mx-1">Contact</button>
                        </li>
                    </ul>
                </nav>
                <h1 className="py-4">Luke Skywalker</h1>
            </header>
            <main className="clearfix">
                <section className="float-start w-25 me-3">
                    <img className="w-100" src="../public/images/main.jpg" alt="Hero"/>
                </section>
                <section className="float-end w-50 row border mx-1">
                    <h2 className="col-12 text-center">Dream team</h2>
                    <img className="col-4 p-1" src="../public/images/friend1.jpg" alt="Friend"/>
                    <img className="col-4 p-1" src="../public/images/friend2.jpg" alt="Friend"/>
                    <img className="col-4 p-1" src="../public/images/friend3.jpg" alt="Friend"/>
                    <img className="col-4 p-1" src="../public/images/friend4.jpg" alt="Friend"/>
                    <img className="col-4 p-1" src="../public/images/friend5.jpg" alt="Friend"/>
                    <img className="col-4 p-1" src="../public/images/friend6.jpg" alt="Friend"/>
                    <img className="bottomLeft col-4 p-1" src="../public/images/friend7.jpg" alt="Friend"/>
                    <img className="col-4 p-1" src="../public/images/friend8.jpg" alt="Friend"/>
                    <img className="bottomRight col-4 p-1" src="../public/images/friend9.jpg" alt="Friend"/>
                </section>
                <p className="farGalaxy">
                    It is a period of civil war.
                    Rebel spaceships, striking
                    from a hidden base, have won
                    their first victory against
                    the evil Galactic Empire.

                    During the battle, Rebel
                    spies managed to steal secret
                    plans to the Empire's
                    ultimate weapon, the DEATH
                    STAR, an armored space
                    station with enough power
                    to destroy an entire planet.

                    Pursued by the Empire's
                    sinister agents, Princess
                    Leia races home aboard her
                    starship, custodian of the
                    stolen plans that can save her
                    people and restore
                    freedom to the galaxy....
                </p>
            </main>
            <footer className="row align-items-center">
                <div className="btn btn-danger col-2 offset-2">
                    <p className="text-center m-0">Send me an <span className="email text-uppercase">email</span>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default App
