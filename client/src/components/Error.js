import { Link } from "react-router-dom";

export default function Error(){
    return(
        <>
        <div className="p-5 text-left bg-image jumbotron">
            <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                <div className="p-5 mx-5 h-100">
                    <div className="text-white">
                        <h1 className="mb-3 display-1">OOOPS...!!!</h1>
                        <h4 className="mb-3">This page is currently unavailable...</h4>
                        <Link className="btn btn-outline-light home-sell-btn btn-lg" to="/" role="button">Go Back Home</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}