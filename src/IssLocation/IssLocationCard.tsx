import {useEffect, useState} from "react";
import {IssLocation} from "../model";
import axios from "axios";
import "./IssLocationCard.css"


export default function IssLocationCard() {

    const [issLoc, setIssLoc] = useState({} as IssLocation);
    const [error, setError] = useState("");
    let date = new Date(issLoc.timestamp);

    const getIssLoc = () => {
        axios.get("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response => response.data)
            .then(loc => setIssLoc(loc))
            .catch(e => setError("Uups wo ist die Iss hin ???"))
    }

    useEffect(() => {
        getIssLoc();
    }, [])

    useEffect(() => {
        setTimeout(() => getIssLoc(), 10000)
    }, [issLoc])


    return (
        <div className={"card-body"}>
            {error && <div>{error}</div>}
            <div className={"iss-card"}>
                <div className={"iss-info-element"}>
                    <span className={"pre-text"}>Latitude: </span> {issLoc.latitude}
                </div>
                <div className={"iss-info-element"}>
                    <span className={"pre-text"}>Longitude: </span> {issLoc.longitude}
                </div>
                <div className={"iss-info-element"}>
                    <span className={"pre-text"}>Time: </span> {issLoc.timestamp}
                </div>
            </div>
        </div>

    )
}