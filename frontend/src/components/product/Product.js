import React from 'react'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { useAlert } from 'react-alert';



const Product = ({ product, col}) => {
    // Hàm để cắt chuỗi và thêm dấu ba chấm khi cần thiết
function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + '...';
    }
    return str;
  }
  

    return (

        <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
            <div className=" card card p-3 rounded">
                <Link to={`/product/${product._id}`}><img className="card-img-top mx-auto" src={product.images[0].url} alt='' /></Link>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <Link to={`/product/${product._id}`}>
                            <span className="product-name">{truncateString(product.name, 15)}</span>
                        </Link>
                    </h5>
                    <div className="ratings mt-auto">
                        <div className="rating-outer">
                            <div className="rating-inner" style={{ width: `${(product.ratings / 5) * 100}%` }}></div>
                        </div>
                        <span id="no_of_reviews">({product.numOfReviews} đánh giá)</span>
                    </div>
                    <p className="card-text">{(product.price).toLocaleString()}đ</p>
                    <div class="container">
                        <div class="row">
                            <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block"><i class="fa fa-eye" aria-hidden="true"><span>&nbsp;</span></i>Xem</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Product
