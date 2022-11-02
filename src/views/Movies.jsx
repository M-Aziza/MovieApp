import React , { useState } from 'react';
import axios from "axios";
import NavBar from './NavBar';
import Details from './Details';



const Movies = () => {
    const [movies, setMovies] = useState ([])
    const [title, setTitle] = useState("")
    
    const onSubmitHandler = e => {
        e.preventDefault(); //prevent default behavior of the submit
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${title}`)
        // .then(response => response.json())
        .then(data =>{
            setMovies(data.data.results)
            console.log(movies)
        })
        .catch(err=>{
            console.log("error")
        })            
    }

    // For On Hover
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = (e) => {
        setIsHovering(true);
    };
    const handleMouseOut = (e) => {
        setIsHovering(false);
    };


    return (
    <>
        <div className="img-Movies" >
                <NavBar/>
            <div className="bg-dark p-2 bg-opacity-50 "style={{height: "800px"}}>
                    <div className="position-absolute top-50 start-50 translate-middle w-50">
                <div className="row">
                        <div class="row ">
                            <form onSubmit={onSubmitHandler} >
                                <div class="main-search">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Enter title" onChange={e => setTitle(e.target.value) }value={title}/>
                                        <input class="input-group-text bg-danger" type="submit" value="Search Movie"  />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div className='bg-black'>
            {movies &&(
                <div className='d-flex justify-content-center flex-wrap p-4' >
                    {movies.map((m ,i)=>(
                    <div className='m-4'>
                        <div style={{width: "18rem"}}>
                            <div class="card-body">
                                <Details key= {m.id} {...m}/>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            )}
        </div>
    </>

    )
}

export default Movies;