import './App.css';
import NavBar from './components/Navbar';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import SingleProduct from './components/SingleProduct';
import AddReview from './components/AddReview';
import AddProduct from './components/AddProduct';
import Register from './components/Register';
import Login from './components/Login';
import Error from './components/Error';
import Footer from './components/Footer';
import EditProduct from './components/EditProduct';

function App() {

  const navigate = useNavigate()

  const [reviews, setreviews] = useState([])

  const [currentUser, setCurrentUser] = useState(null)

  const [error, seterror] = useState(false)

  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  
  useEffect(() => {
    fetch("/products")
    .then(res => res.json())
    .then(data => setProducts(data))

    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user));
      }
    });

  }, [])

  function getUser(user) {
    fetch("/login", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(res => {
      if (res.status === 401) {
          res.json().then(data => {
              seterror(true)
          })
      }
      else{
          res.json().then(data => {
              setCurrentUser(data)
              seterror(false)
              navigate("/")
          })
      }
  })
  }

  function addProduct(product){
    fetch("/products", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product)
    })
    .then(res => {
      if (res.status === 422) {
          res.json().then(data => {
              seterror(true)
          })
      }
      else{
          res.json().then(data => {
            setProducts([data, ...products])
            seterror(false)
            alert("Product successfully created.")
          })
      }
  })
  }

  function fetchProductData(data){
    setProduct(data)
  }

  function editProduct(product, id){
    fetch(`/products/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product)
    })
    .then(res => {
      if (res.status === 422) {
          res.json().then(data => {
              seterror(true)
          })
      }
      else{
          res.json().then(data => {
            setProducts([products])
            seterror(false)
            navigate(`/product/${data.id}`)
            window.location.reload()
          })
      }
  })
  }

  function deleteProduct(product){
    fetch(`/products/${product.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(data => {
      navigate("/")
      window.location.reload()
    })
  }

  function getProductReviews(data){
    setreviews(data)
  }
  

    function addReview(review){
      fetch("/reviews", {
        method: "POST",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(review)
      })
      .then(res => {
        if (res.status === 422) {
            res.json().then(data => {
                seterror(true)
            })
        }
        else{
            res.json().then(data => {
              setreviews([data, ...reviews])
              seterror(false)
              console.log(data);
              navigate(`/product/${data.product.id}`)
            })
        }
    })
    }

  function logout(){
    setCurrentUser(user => null)
    navigate("/login")
    window.location.reload()
  }

  if (!currentUser){
    return (
      <Routes>
        <Route exact path='/' element={<Login getUser={getUser} />} />
        <Route exact path='/login' element={<Login error={error} getUser={getUser} />} />
        <Route exact path='/register' element={<Register getUser={getUser} />} />
      </Routes>
    )
  }
  
  return (
    <div className="App">
      <NavBar logout={logout} currentUser={currentUser} />
        
      <Routes>
        <Route path='*' element={<Error />} />
        <Route exact path='/' element={<Home products={products} />} />
        <Route exact path='/product/:id' element={<SingleProduct deleteProduct={deleteProduct} fetchProductData={fetchProductData} currentUser={currentUser} getProductReviews={getProductReviews} />} />
        <Route exact path='/product/:id/edit' element={<EditProduct product={product} currentUser={currentUser} editProduct={editProduct} error={error} />} />
        <Route exact path='/product/:id/new/review' element={<AddReview error={error} addReview={addReview} currentUser={currentUser} />} />
        <Route exact path='/product/new' element={<AddProduct error={error} addProduct={addProduct} currentUser={currentUser} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
