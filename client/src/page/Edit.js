import React from "react";
import { getProductById, updateProduct } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Error from '../components/Error'
import Loader from '../components/Loader'
import Success from '../components/Success'
import { Button } from "react-bootstrap";


const Edit = ({ match }) => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.getProductByIdReducer);

  const { product, error, loading } = productState;

  const updateProductState = useSelector((state) => state.updateProductReducer)

  const { Success, uperror, uploading } = updateProductState

  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [countInStock, setCountInStock] = useState();
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (product) {
      if (product._id == match.params.id) {
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setImage(product.image);
        setCategory(product.category);
        setCountInStock(product.countInStock);
      } else {
        dispatch(getProductById(match.params.productid));
      }
    } else {
      dispatch(getProductById(match.params.productid));
    }
  }, [dispatch, product]);

  const edit = (e) => {
      e.preventDefaultValue()
    const updatedproduct = {
      name: name,
      price: price,
      description: description,
      countInStock: countInStock,
      category: category,
      image: image,
    };
    dispatch(updateProduct(match.params.productid, updatedproduct));
  };

  return (
    <div>
      <h2>Edit Product</h2>
          
      {loading && (<Loader />)}
      {uploading && <Loader />}
      {uperror && <Error error="Something Went Wrong"/>}
      {error && (<Error error='Something Went Wrong' />)}

      {/* //<h1>{product._id}</h1> */}
      {product && (<div>
          
        <form onSubmit={edit}>
        <input
          type="text"
          placeholder="Name"
          className="form-control"
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Price"
          className="form-control"
          value={price}
          required
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Count"
          className="form-control"
          value={countInStock}
          required
          onChange={(e) => {
            setCountInStock(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Image"
          className="form-control"
          value={image}
          required
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Category"
          className="form-control"
          value={category}
          required
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Description"
          className="form-control"
          value={description}
          required
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Button className="btn mt-5" type="submit" >Edit Product</Button>
      </form>
          
          </div>)}
     
    </div>
  );
};

export default Edit;
