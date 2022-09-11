import { useState } from "react";


export default function AddProduct({currentUser, addProduct, error}){
    
    const [formData, setformData] = useState({
        title: '',
        description: '',
        category: '',
        image: '',
        price: '',
        user: currentUser.id
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
        addProduct(formData)
        setformData({
            title: '',
            description: '',
            category: '',
            image: '',
            price: '',
            user_id: currentUser.id
        })
    }

    return(
        <>
        <div className="container">
            <h3 className="my-4 text-center"><span className="line">Add</span> Product</h3>            

            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                {error ? <p className='text-danger' id='error'>All fields are required.</p> : false}
                <form onSubmit={handleSubmit}>
                    <div className="d-flex">
                        <img className="rounded-circle me-3" alt="user-avatar" style={{width:'3rem', height:'3rem'}} src={currentUser.avatar} />
                        <div className="flex-grow-1">
                        <div className="hstack gap-2 mb-1">
                            <a href="#fdf" className="fw-bold text-capitalize link-dark">{currentUser.username}</a>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={formData.title} onChange={handleInput} className="form-control my-3" type="text" name="title" placeholder="Product Title" />
                            <input value={formData.image} onChange={handleInput} className="form-control my-3" type="url" name="image" placeholder="Image URL" />
                            <input value={formData.price} onChange={handleInput} className="form-control my-3" type="number" name="price" placeholder="Price" />
                            <select required value={formData.category} onChange={handleInput} className="my-3" name="category" style={{height:'2.5rem', width:'100%'}}>
                                <option disabled>Product category</option>
                                <option value="construction">Antique</option>
                                <option value="electronics">Electronics</option>
                                <option value="furniture">Furniture</option>
                                <option value="firearms">Firearms</option>
                                <option value="cosmetics">Cosmetics</option>
                                <option value="jewelery">Jewelery</option>
                                <option value="clothes">Clothes</option>
                                <option value="food">Food</option>
                            </select>
                            <textarea value={formData.description} onChange={handleInput} className="form-control w-100" name="description" placeholder="Describe your product" id="my-comment" style={{height:'7rem'}}></textarea>                           

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