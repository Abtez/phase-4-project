import construction from "../assets/antique-building-svgrepo-com.svg"
import clothes from "../assets/clothes-rack-svgrepo-com.svg"
import electronics from "../assets/devices-electronics-svgrepo-com.svg"
import furniture from "../assets/furniture-svgrepo-com.svg"
import cosmetics from "../assets/cosmetics-makeup-svgrepo-com.svg"
import food from "../assets/food-cart-svgrepo-com.svg"
import jewelery from "../assets/jewelry-stone-svgrepo-com.svg"
import firearms from "../assets/revolvers-svgrepo-com.svg"

export default function Category({handleCatgeory}) {
    
    return(

        <>
                    
        <div className="container mt-4">

        <h3 className="shop mb-4"><span className="line">Shop</span> By Category</h3>        
            <div className="row row-cols-1 row-cols-md-4 g-4">


            <div onClick={handleCatgeory} className="col">
                <div className="card category-card h-100">

                <div className="card-body">
                    <h5 className="card-title"><div className="rounded-circles">
                    <img className="img-fluid" src={construction} alt="external" />
                    </div></h5>
                    <p className="card-text lead mt-4">
                    Antiques <br /></p>
                    <p className="text-ad">11 ads posted</p>
                    
                </div>
                </div>
            </div>

            <div onClick={handleCatgeory} className="col">
            <div className="card category-card h-100">

            <div className="card-body">
                <h5 className="card-title"><div className="rounded-circles">
                <img className="img-fluid" src={furniture} alt="external" />
                </div></h5>
                <p className="card-text lead mt-4">
                Furnitures <br /></p>
                <p className="text-ad">100 ads posted</p>
                
            </div>
            </div>
            </div>

            <div onClick={handleCatgeory} className="col">
            <div className="card category-card h-100">

            <div className="card-body">
                <h5 className="card-title"><div className="rounded-circles">
                <img className="img-fluid" src={clothes} alt="external" />
                </div></h5>
                <p className="card-text lead mt-4">
                Clothes <br /></p>
                <p className="text-ad">22 ads posted</p>
                
            </div>
            </div>
            </div>

            <div onClick={handleCatgeory} className="col">
            <div className="card category-card h-100">

            <div className="card-body">
                <h5 className="card-title"><div className="rounded-circles">
                <img className="img-fluid" src={electronics} alt="external" />
                </div></h5>
                <p className="card-text lead mt-4">
                Electronics <br /></p>
                <p className="text-ad">4 ads posted</p>
                
            </div>
            </div>
            </div>

            <div onClick={handleCatgeory} className="col">
            <div className="card category-card h-100">

            <div className="card-body">
                <h5 className="card-title"><div className="rounded-circles">
                <img className="img-fluid" src={food} alt="external" />
                </div></h5>
                <p className="card-text lead mt-4">
                Food & Snacks <br /></p>
                <p className="text-ad">37 ads posted</p>
                
            </div>
            </div>
            </div>

            <div onClick={handleCatgeory} className="col">
            <div className="card category-card h-100">

            <div className="card-body">
                <h5 className="card-title"><div className="rounded-circles">
                <img className="img-fluid" src={cosmetics} alt="external" />
                </div></h5>
                <p className="card-text lead mt-4">
                Cosmetics <br /></p>
                <p className="text-ad">9 ads posted</p>
                
            </div>
            </div>
            </div>

            <div onClick={handleCatgeory} className="col">
            <div className="card category-card h-100">

            <div className="card-body">
                <h5 className="card-title"><div className="rounded-circles">
                <img className="img-fluid" src={jewelery} alt="external" />
                </div></h5>
                <p className="card-text lead mt-4">
                Jewelery <br /></p>
                <p className="text-ad">21 ads posted</p>
                
            </div>
            </div>
            </div>

            <div onClick={handleCatgeory} className="col">
            <div className="card category-card h-100">

            <div className="card-body">
                <h5 className="card-title"><div className="rounded-circles">
                <img className="img-fluid" src={firearms} alt="external" />
                </div></h5>
                <p className="card-text lead mt-4">
                Firearms <br /></p>
                <p className="text-ad">71 ads posted</p>
                
            </div>
            </div>
            </div>

            </div>

        </div>

        <br />
        <br />
        <br />
        </>
    )
}