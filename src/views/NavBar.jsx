import React from "react";
import { Link } from "react-router-dom";


const NavBar =()=>{

    return(
        <>
        <nav class="navbar navbar-light bg-black">
                    <div className="container-fluid px-5">
                    <Link to="/"><span className="text-danger mt-2 fw-semibold fs-3 btn btn-black">MovieApp</span></Link>
                        
                        <div className="col">
                            <div className="d-flex justify-content-center">
                                <div className="mx-4">
                                    <Link to="/Movies" type="button" class="btn btn-outline-danger wx-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-film me-2 mb-1" viewBox="0 0 16 16" >
                                            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"></path>
                                        </svg>
                                        Movies
                                    </Link>
                                </div>
                                <div>
                                <Link to="/Music" type="button" class="btn btn-outline-danger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note-list me-2 mb-1" viewBox="0 0 16 16">
                                        <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z"></path>
                                        <path fill-rule="evenodd" d="M12 3v10h-1V3h1z"></path>
                                        <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"></path>
                                        <path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"></path>
                                    </svg>
                                    Music
                                </Link >
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
        </>
    )
}

export default NavBar;