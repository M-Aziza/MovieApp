import { Modal,show,Button} from 'react-bootstrap';
import React, {useState} from 'react';
const API_IMG="https://image.tmdb.org/t/p/w500/";

const Details = ({title, poster_path, vote_average, release_date, overview})=>{

    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);

    // useEffect(() => {
    //     axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`)
    //     .then(results => results.json())
    //         .then(data => {
    //             const {movie} = data;
    //             setMovie(movie.data);
    //         })
            
    //         // .catch(err => console.error(err));
    // }, [id]);

    // .then(data => {
    //     const {name} = data.results[0];
    //     setFirstName(name.first);
    //     setLastName(name.last);
    //   });
                            https://api.themoviedb.org/3/movie/157336/videos?api_key=3fd2be6f0c70a2a598f084ddfb75487c
    // movies = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=`+id)
        return(
<div className="card text-center mb-3">
            <div className="card-body ">
            <img className="card-img-top" src={API_IMG+poster_path} />
            <div className="card-body">
                <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <h3>{title}</h3>
                    <br />
                    <img className="card-img-top" style={{width:'14rem'}}src={API_IMG+poster_path} />
                    <h4>IMDb: {vote_average}</h4>
                    <h5>Release Date: {release_date}</h5>
                    <br></br>
                    <h6>Overview</h6>
                    <p>{overview}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            </div>
        </div>
        )


}

export default Details;