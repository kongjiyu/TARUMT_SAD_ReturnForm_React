import React from "react";

export default function Product() {
    return (
        <div>
            <hr />
            <div className="form-group">
                <label htmlFor="productID">Product ID:</label>
                <input className="form-control" id="productID" placeholder="Enter Product ID" name="productID" />
            </div>

            <div className="form-group">
                <label htmlFor="productName">Product Name:</label>
                <input className="form-control" id="productName" placeholder="Enter Product Name" name="productName" />
            </div>

            <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" className="form-control" id="quantity" placeholder="Enter quantity" name="quantity" min="1" />
            </div>
        </div>
    )
}

