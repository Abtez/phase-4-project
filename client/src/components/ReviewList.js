import Review from "./Review";


export default function ReviewList({productReviews, getProductReviews}){
    
    getProductReviews(productReviews);

    return(
        <>
        <div className="app container py-4">
            <div className="col-md-12 col-lg-12 m-auto">
                <div className="bg-white rounded-3 shadow-sm p-4">
                    <h3 className="my-4"><span className="line">Product</span> Reviews</h3>
                    {
                        productReviews ? 
                        productReviews.map(review => {
                            return <Review key={review.id} title={review.title} description={review.description} rating={review.rating}
                            time={review.created_at} />
                        })      
                        :
                        false              
                    }
                    {productReviews.length === 0 ? <h5>Product has no reviews...</h5> : false}
                </div>
            </div>
        </div>
  
        </>
    )
}