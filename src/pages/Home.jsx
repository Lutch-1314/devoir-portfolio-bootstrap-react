import {useState, useEffect} from "react";
import './Home.css';

const Home = () => {

    const [user,setUser] = useState();

    const getUser = async () => {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
        setUser(json);
    }
       useEffect(() => {
           getUser(); 
        },[])

    return (
        <div className="">
            <header className="header text-center text-light d-flex flex-column justify-content-center align-items-center">
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
                <button type="button" className="btn btn-danger px-4" data-bs-toggle="modal" data-bs-target="#githubProfile">En savoir plus</button>
               



<div className="modal fade" id="githubProfile" tabIndex="-1" aria-labelledby="githubProfileLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="githubProfileLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {user && (
            <>
            <div>{user.name}</div>
            <div>{user.location}</div>
            <div>{user.bio}</div>
            <div>{user.public_repos}</div>
            <div>{user.followers}</div>
            <div>{user.following}</div>
            </>
        )}
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </header>

            <main className="container ">
                <section className="row border shadow p-3 mb-5 mt-5 mx-1 bg-body-tertiary rounded">
                    <article className="col-md-6">
                        <h3>A propos</h3>
                        <div className="mx-auto my-3 bg-primary" style={{ width: '100%', height: '3px', marginTop: '5px' }}></div>
                        <img src="/images/john-doe-about.jpg" alt="photo de John Doe" className="img-fluid py-4"></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis ante et neque venenatis malesuada. Sed viverra aliquam accumsan.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis ante et neque venenatis malesuada. Sed viverra aliquam accumsan.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce venenatis ante et neque venenatis malesuada. Sed viverra aliquam accumsan.</p>
                    </article>
                    <article className="col-md-6">
                        <h3>Mes compétences</h3>
                        <div className="mx-auto my-3 bg-primary" style={{ width: '100%', height: '3px', marginTop: '5px' }}></div>
                        <ul className='text-uppercase list-unstyled'>
                            <li>HTML5 90%</li>
                            <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
                            </div>
                            <li>CSS3 80%</li>
                            <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-info" style={{ width: '80%' }}></div>
                            </div>
                            <li>Javascript 70%</li>
                            <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-warning" style={{ width: '70%' }}></div>
                            </div>
                            <li>PHP 60%</li>
                            <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
                            </div>
                            <li>React 50%</li>
                            <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style={{ width: '50%' }}></div>
                            </div>
                        </ul>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default Home;