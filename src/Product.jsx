import React from "react";

export default function Product() {
    return (
        <div>
            <hr />
            <div className="form-group">
                <label htmlFor="stockID">Stock ID:</label>
                <input className="form-control" id="stockID" placeholder="Enter Stock ID" name="stockID" />
            </div>

            <div className="form-group">
                <label htmlFor="stockName">Stock Name:</label>
                <input className="form-control" id="stockName" placeholder="Enter Stock Name" name="stockName" />
            </div>

            <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" className="form-control" id="quantity" placeholder="Enter quantity" name="quantity" min="1" />
            </div>
        </div>
    )
}

