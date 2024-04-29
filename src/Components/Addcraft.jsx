import React, { useContext } from "react";
import { authContext } from "./Firebase/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const Addcraft = () => {
  const {user}=useContext(authContext);

  const location=useLocation();
  const navigate=useNavigate();

    const handleAddProduct=e=>{
        e.preventDefault();

        const item_name=e.target.item_name.value;
        const subcategory_Name=e.target.subcategory_Name.value;
        const image=e.target.image.value;
        const shortdescription=e.target.shortdescription.value;
        const price=e.target.price.value;
        const customization=e.target.customization.value;
        const rating=e.target.rating.value;
        const processing_time=e.target.processing_time.value;
        const stockStatus=e.target.stockStatus.value;
        const userName=e.target.userName.value;
        const userEmail=e.target.useremail.value;
        const email=user?.email;

        const newProduct={item_name, subcategory_Name,image,shortdescription,price,customization,rating,processing_time,stockStatus,userName,email,userEmail };

        fetch("https://b9-a-assignment-10-server.vercel.app/product",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=>res.json)
        .then(data=>{
          navigate("/");
          toast.success("Product Added Success");
        })
    }
  return (
    <div>
      <div className="min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleAddProduct}  className="card-body">
              <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">item_name</span>
                </label>
                <input
                name="item_name"
                  type="text"
                  placeholder="item_name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">subcategory_Name</span>
                </label>
                <input
                name="subcategory_Name"
                  type="text"
                  placeholder="subcategory_Name "
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image_Url</span>
                </label>
                <input
                name="image"
                  type="text"
                  placeholder="Image_Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">short description</span>
                </label>
                <input
                name="shortdescription"
                  type="text"
                  placeholder="short description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">price</span>
                </label>
                <input
                name="price"
                  type="text"
                  placeholder="price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">customization</span>
                </label>
                <input
                name="customization"
                  type="text"
                  placeholder=" customization- example- yes, no"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">rating</span>
                </label>
                <input
                name="rating"
                  type="text"
                  placeholder="rating"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">processing_time</span>
                </label>
                <input
                name="processing_time"
                  type="text"
                  placeholder="processing_time"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">stockStatus</span>
                </label>
                <input
                name="stockStatus"
                  type="text"
                  placeholder="stockStatus"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                name="userName"
                  type="text"
                  placeholder="User Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                name="useremail"
                  type="email"
                  placeholder="User Email"
                  className="input input-bordered"
                  required
                />
              </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcraft;
