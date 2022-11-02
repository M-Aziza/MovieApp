import React from "react"
import { Link } from "react-router-dom"
import NavBar from './NavBar';

const Music =()=>{
    return(
        <>

            <div className="Music-img" >
                <NavBar/>
                <div className="bg-dark p-2 bg-opacity-50 "style={{height: "800px"}}>
                    
                        <div className="position-absolute top-50 start-50 translate-middle w-50">
                    <div className="row">
                            <div class="row ">
                                <form>
                                    <div class="main-search">
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" placeholder="Enter title" />
                                            <input class="input-group-text bg-danger" type="submit" value="Search Music"  />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> 
                    </div>
                </div>
        </div>
        </>
    )
}

export default Music;