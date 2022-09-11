import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReviewList from "./ReviewList";

export default function SingleProduct({getProductReviews, currentUser, fetchProductData, deleteProduct}){
  const [singleProduct, setsingleProduct] = useState({})

  const {id} = useParams()


  useEffect(() => {
    fetch(`/products/${id}`)
    .then(res => res.json())
    .then(data => setsingleProduct(data))
    
  }, [id])


  let userRated ={}

  if (singleProduct.reviews) {
    userRated = singleProduct.reviews.find(user => {
      return user.user.id === currentUser.id
    })
  }

  function productData(){
    fetchProductData(singleProduct)
  }
  
    return(
        <>
        {singleProduct.user ?
        
          <div className="single-card container">
          <div className="photo">
            <img src={singleProduct.image} alt="full-img" />
          </div>
          <div className="description">
            <h2>{singleProduct.title}</h2>
            <h4>{singleProduct.category}</h4>
            <h1>$ {singleProduct.price}</h1>
            <p>{singleProduct.description}</p>
            {userRated ? true : <button><Link className="add-review-btn" style={{color: '#FFFFFF'}} to={`/product/${singleProduct.id}/new/review`}>Rate Product</Link></button>}
            {currentUser.id === singleProduct.user.id ?<button onClick={productData}><Link className="add-review-btn" style={{color: '#FFFFFF'}} to={`/product/${singleProduct.id}/edit`}>Edit</Link></button> : false}
            {currentUser.id === singleProduct.user.id ?<button onClick={() => deleteProduct(singleProduct)}>Delete</button> : false}
          </div>
          </div>
      :
      false
        }

      {
        singleProduct.reviews ?
        <ReviewList getProductReviews={getProductReviews} productReviews={singleProduct.reviews} />
        :
        false
      }
        </>
    )
}