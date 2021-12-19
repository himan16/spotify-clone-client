import React from "react"


function TrackSearchResult(props){
    
    function handlePlay(){
       props.chooseTrack(props.track)
    }

    return( 
        <div 
        className="d-flex m-2 align-items-center"
        style={{cursor: "pointer"}}
        onClick={handlePlay}
        >
            <img src={props.track.albumUrl} style={{height: "64px", width: "64px"}} alt="track img"/>
            <div className="ml-3" style={{marginLeft: "1%"}}>
                <div>{props.track.title}</div>
                <div className="text-muted">{props.track.artist}</div>
            </div>
        </div>
    )
}

export default TrackSearchResult