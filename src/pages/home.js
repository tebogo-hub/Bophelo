

function Home  (){
    
        return(
            <div>
                 <header>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span></button>

                             <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                    <ul className="navbar-nav ml-lg-auto">
                                        <li className="nav-item active">
                                            
                                            <a className="nav-link" href="#">Home</a>
                                        </li>

                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">About Us</a>
                                          
                                        </li>

                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">Stories</a>
                                        </li>

                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">Contact Us</a>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> ADD HOPE</a>
                                            <div className="dropdown-menu"><a href="#">Explore</a>
                                            <div className="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#"></a>
                                            </div>

                                        </li>
                            
                                    </ul>
                             </div>  
                         </nav>
                     </div>
                 </header>

                 <section className="banner">
                     <div className="container">
                         <div className="row">
                             <div className="col-sm-6">
                             <h2>BOPHELO CHILD AND YOUTH CARE CENTRE</h2>
                               <p>Bopelo Care Centre Cares for
                                  abondaned and neglacted Children as well as 
                                  for those who have special needs.</p>
                                <p>help us get 67 more likes and followers on our 
                                  facebook and instagram page by sharing our 
                                  stories and promoting Bophelo on your social media.
                                 </p>
                                 <a href="#" className="btnD1">Add Hope</a>
                                
                                 <a href="#" className="btnD1">Volunteer</a>
                                 
                             </div>

                         </div>

                     </div>


                 </section>
             </div>

            
             

        )
    }  

export default Home;

