import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";

export default function AddReview({currentUser, addReview, error}){

    const {id} = useParams()

    const [ratingValue, setRatingValue] = useState(1)

    // function ratingChanged(newRating){
    //     setRatingValue(ratingValue => newRating)
    //     console.log(newRating);
    //     console.log(ratingValue);
    //   };

    const [formData, setformData] = useState({
        title: '',
        description: '',
    })

    function handleInput(e){
        const name = e.target.name
        let value = e.target.value

        setformData({...formData,
        [name]: value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        const reviewData = {...formData,
            rating: ratingValue,
            user_id: currentUser.id,
            product_id: Number(id)
        }
        addReview(reviewData)
        
    }

    return(
        <>
        <div className="container">
            <h3 className="my-4 text-center"><span className="line">Review</span> Product</h3>

            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                {error ? <p className='text-danger' id='error'>All fields are required.</p> : false}
                <form onSubmit={handleSubmit}>
                    <div className="d-flex">
                        <img className="rounded-circle me-3" alt="sff" style={{width:'3rem', height:'3rem'}} src={currentUser.avatar} />
                        <div className="flex-grow-1">
                        <div className="hstack gap-2 mb-1">
                            <a href="#fdf" className="fw-bold text-capitalize link-dark">{currentUser.username}</a>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={formData.title} onChange={handleInput} className="form-control my-3" type="text" name="title" placeholder="Review Title" />
                            <textarea value={formData.description} onChange={handleInput} className="form-control w-100" name="description" placeholder="Leave a comment here" id="my-comment" style={{height:'7rem'}}></textarea>

                            <ReactStars
                            count={5}
                            onChange={setRatingValue}
                            size={35}
                            isHalf={false}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ff6060"
                            />
                            

                        </div>
                        <div className="description justify-content-end gap-2">
                            <button type="submit">Submit</button>
                        </div>
                        </div>
                    </div> 
                </form>                       
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
        </>
    )
}