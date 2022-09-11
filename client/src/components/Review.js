import ReactStars from "react-rating-stars-component";

export default function Review({user, title, description, rating, time}){
    const dayTime = Math.ceil((new Date().getTime() - new Date(time).getTime()) / 86400000)
    return(
        <>
        <div className="d-flex comment my-4">
            <img className="rounded-circle comment-img" alt="cbsdkj" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
            <div className="flex-grow-1 ms-3">
                <div className="mb-1">
                    <a href="#dsd" className="fw-bold link-dark me-1">User One</a> 
                    <span className="text-muted text-nowrap">{dayTime <= 1 ? dayTime + " day" : dayTime + " days" } ago</span>
                </div>
                <div className="">
                {description}
                </div>
                <div className="hstack align-items-center mb-2">
                <ReactStars
                count={5} 
                edit={false}
                size={35} 
                value={rating} 
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ff6060"
                />
                </div>
            </div>
        </div>
        </>
    )
}