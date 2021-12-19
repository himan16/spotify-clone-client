import React from "react";
import {Container} from "react-bootstrap";
// const clientId = "9520eccbac5849a1bd5c98af590bfc0d";

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=9520eccbac5849a1bd5c98af590bfc0d&response_type=code&redirect_uri=https://spotifyclonewithlyrics.netlify.app/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

function Login(){
    return(
        <Container 
        className="d-flex justify-content-center align-items-center"
        style={{minHeight: "100vh"}}
        >
            <a className="btn btn-success btn-lg" href={AUTH_URL}>Login with Spotify</a>
        </Container>
    )
}

export default Login; 