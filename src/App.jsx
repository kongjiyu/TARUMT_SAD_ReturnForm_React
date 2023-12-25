import { useState } from 'react'
import './App.css'
import Product from './Product.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([<Product key={0} />]);

  const handleAddProduct = () => {
    const newProducts = [...products, <Product key={products.length} />];
    setProducts(newProducts);
    setCount(newProducts.length);
  };

  return (
    <div className="container">
      <h1 style={{ fontWeight: 'bold' }}>Stock Return Form</h1>
      <form action="">
        {/* Stock ID */}
      {products}

        <div className="form-group">
          <button type="button" onClick={handleAddProduct} class="btn btn-secondary btn-lg btn-block">+</button>
        </div>
        

        <div className="form-group">
          <label htmlFor="outlet">Outlet Name:</label>
          <input list="outlets" className="form-control" id="outlet" placeholder="Please select a branch" />
          <datalist id="outlets">
            <option value="Samseng Johor Bahru Outlet"></option>
            <option value="Samseng Batu Pahat Outlet"></option>
            <option value="Samseng Muar Outlet"></option>
            <option value="Samseng Kluang Outlet"></option>
            <option value="Samseng Pontian Outlet"></option>
            <option value="Samseng Kota Tinggi Outlet"></option>
            <option value="Samseng Alor Setar Outlet"></option>
            <option value="Samseng Kuala Muda Outlet"></option>
            <option value="Samseng Kubang Pasu Outlet"></option>
            <option value="Samseng Kulim Outlet"></option>
            <option value="Samseng Kota Bharu Outlet"></option>
            <option value="Samseng Pasir Mas Outlet"></option>
            <option value="Samseng Tumpat Outlet"></option>
            <option value="Samseng Machang Outlet"></option>
            <option value="Samseng Kuala Lumpur Outlet"></option>
            <option value="Samseng Labuan Outlet"></option>
            <option value="Samseng Central Melaka Outlet"></option>
            <option value="Samseng Alor Gajah Outlet"></option>
            <option value="Samseng Jasin Outlet"></option>
            <option value="Samseng Seremban Outlet"></option>
            <option value="Samseng Jelebu Outlet"></option>
            <option value="Samseng Kuala Pilah Outlet"></option>
            <option value="Samseng Port Dickson Outlet"></option>
            <option value="Samseng Kuantan Outlet"></option>
            <option value="Samseng Temerloh Outlet"></option>
            <option value="Samseng Jerantut Outlet"></option>
            <option value="Samseng Maran Outlet"></option>
            <option value="Samseng North East Penang Island Outlet"></option>
            <option value="Samseng South West Penang Island Outlet"></option>
            <option value="Samseng Seberang Perai Utara (North) Outlet"></option>
            <option value="Samseng Seberang Perai Tengah (Central) Outlet"></option>
            <option value="Samseng Seberang Perai Selatan (South) Outlet"></option>
            <option value="Samseng Ipoh Outlet"></option>
            <option value="Samseng Taiping Outlet"></option>
            <option value="Samseng Kuala Kangsar Outlet"></option>
            <option value="Samseng Kinta Outlet"></option>
            <option value="Samseng Manjung Outlet"></option>
            <option value="Samseng Batang Padang Outlet"></option>
            <option value="Samseng Perlis Outlet"></option>
            <option value="Samseng Putrajaya Outlet"></option>
            <option value="Samseng Kota Kinabalu Outlet"></option>
            <option value="Samseng Sandakan Outlet"></option>
            <option value="Samseng Tawau Outlet"></option>
            <option value="Samseng Lahad Datu Outlet"></option>
            <option value="Samseng Keningau Outlet"></option>
            <option value="Samseng Kota Belud Outlet"></option>
            <option value="Samseng Kuching Outlet"></option>
            <option value="Samseng Miri Outlet"></option>
            <option value="Samseng Sibu Outlet"></option>
            <option value="Samseng Bintulu Outlet"></option>
            <option value="Samseng Petaling Outlet"></option>
            <option value="Samseng Hulu Langat Outlet"></option>
            <option value="Samseng Sepang Outlet"></option>
            <option value="Samseng Klang Outlet"></option>
            <option value="Samseng Kuala Selangor Outlet"></option>
            <option value="Samseng Kuala Terengganu Outlet"></option>
            <option value="Samseng Besut Outlet"></option>
            <option value="Samseng Dungun Outlet"></option>
            <option value="Samseng Kemaman Outlet"></option>
          </datalist>
        </div>

        <div className="form-group">
          <label htmlFor="PIC">Person in charge:</label>
          <input className="form-control" id="PIC" placeholder="Enter name of person in charge" name="PIC" />
        </div>

        <div className="form-group">
          <label htmlFor="ICD">Item receive date:</label>
          <input type="date" className="form-control" id="ICD" placeholder="Enter item receive date" name="ICD" />
        </div>

        <div className="form-group">
          <label htmlFor="returnDate">Return date:</label>
          <input type="date" className="form-control" id="returnDate" placeholder="Enter return date" name="returnDate" />
        </div>

        <div className='form-group'>
          <div className="custom-file">
            <label className="custom-file-label" htmlFor="customFile">Picture:</label>
            <input type="file" className="custom-file-input" id="customFile" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <textarea className="form-control" rows="5" id="reason"></textarea>
        </div>
        <div className="form-group">
          <br />
          <button type="button" className="btn btn-success btn-lg">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App
