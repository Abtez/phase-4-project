import { Link } from "react-router-dom";

export default function Product({category, description, price, title, image, id}) {

    function capitalize(str){
        if(str) return str.charAt(0).toUpperCase() + str.slice(1);
        return true
    }
    
    return(
        <> 
        <Link to={`product/${id}`}>
        <div className="col">
            <div className='row custom-row justify-content-md-center'>
                <div className='col'>
                <div className='card_frame'>
                    <div className='card_overlay'>
                    <div className='card_photo'>
                        <div className='area' style={{backgroundImage: `url(${image})`}}></div>
                    </div>
                    <div className='card_info'>
                        <ul className='list-unstyled'>
                        <li>
                            <div className='brand short text-capitalize'>
                            {category}
                            </div>
                        </li>
                        <li>
                            <div className='product short text-capitalize'>
                             {title}
                            </div>
                        </li>
                        <li className="short">
                            <div className='old_price' style={{display: 'inline-block'}}>
                            $ {price}
                            </div>
                            <div className='price' style={{display: 'inline-block'}}>
                            $ {price}
                            </div>
                        </li>
                        <li className='d-flex'>
                            <span className='url'>
                            In-Stock
                            </span>
                            <span className='discount'>20 % discount</span>
                        </li>
                        <li>
                            <div className="main-description">
                            Description
                            </div>
                            <div className="description">
                            {capitalize(description)}
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </Link>

        </>
    )
}