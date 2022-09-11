import { Link, useNavigate } from "react-router-dom";
import Category from "./Category";
// import Paginator from "./Paginator";
import Product from "./Product";


export default function Home({products}){

    const navigate = useNavigate()

    function handleCatgeory(){
        navigate("/category")
    }

    const allProducts = products.map(product => {
        return <Product key={product.id} id={product.id} title={product.title} description={product.description} 
        price={product.price} category={product.category} image={product.image} reviews={product.reviews} />
    })

    return (
        <>

        <div className="p-5 text-left bg-image jumbotron">
            <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                <div className="p-5 mx-5 h-100">
                    <div className="text-white">
                        <h1 className="mb-3 display-1">Welcome to, Rails Soko</h1>
                        <h4 className="mb-3">Best sellers and buyers for all your products...</h4>
                        <Link className="btn btn-outline-light home-sell-btn btn-lg" to="/product/new" role="button">Sell Products</Link>
                    </div>
                </div>
            </div>
        </div>
        <Category handleCatgeory={handleCatgeory} />

        <div className="mt-2 container">
            <h3 className="shop mb-4"><span className="line">All</span> Products</h3>
            <div className="row row-cols-12 col-xs-12 row-cols-md-2 cols-md-4 row-cols-sm-2 row-cols-lg-4 g-4 ">
            {allProducts}
            </div>
        </div>

        </>
    )
}