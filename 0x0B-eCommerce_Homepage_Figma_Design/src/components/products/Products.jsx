import image1 from "../../assets/images/image.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";
import image6 from "../../assets/images/image6.png";
import image7 from "../../assets/images/image7.png";
import image8 from "../../assets/images/image8.png";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";

const Products = () => {
  return (
    <div className="container-fluid container_products">
      <div className="header">
        <h2 className="title">Our Products</h2>
      </div>
      <div className="row">
        <div className="col-12 col-md-3">
          <div className="card">
            <img src={image1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Syltherine</h5>
              <p className="card-text">Stylish cafe chair</p>
              <p className="card-text">
                <span className="fw-bold">Rp 2.500.000 </span>
                <small className="text-body-secondary"> Rp 3.500.000</small>
              </p>
            </div>
            <div className="card_hover">
              <button type="button" className="btn btn-lg hover_btn">
                Add to cart
              </button>{" "}
              <br />
              <span>
                <span>
                  <IoShareSocialOutline className="icon" /> Share{" "}
                </span>
                <span>
                  <MdCompareArrows className="icon" /> compare{" "}
                </span>
                <span>
                  <IoIosHeartEmpty className="icon" /> Like
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card">
            <img src={image2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Leviosa</h5>
              <p className="card-text">Stylish cafe chair</p>
              <p className="card-text">Rp 2.500.000</p>
            </div>
            <div className="card_hover">
              <button type="button" className="btn btn-lg hover_btn">
                Add to cart
              </button>{" "}
              <br />
              <span>
                <span>
                  <IoShareSocialOutline className="icon" /> Share{" "}
                </span>
                <span>
                  <MdCompareArrows className="icon" /> compare{" "}
                </span>
                <span>
                  <IoIosHeartEmpty className="icon" /> Like
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card">
            <img src={image3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Lolito</h5>
              <p className="card-text">Luxury big sofa</p>
              <p className="card-text">
                Rp 7.000.000
                <small className="text-body-secondary"> Rp 3.500.000</small>
              </p>
            </div>
            <div className="card_hover">
              <button type="button" className="btn btn-lg hover_btn">
                Add to cart
              </button>{" "}
              <br />
              <span>
                <span>
                  <IoShareSocialOutline className="icon" /> Share{" "}
                </span>
                <span>
                  <MdCompareArrows className="icon" /> compare{" "}
                </span>
                <span>
                  <IoIosHeartEmpty className="icon" /> Like
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card">
            <img src={image4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Respira</h5>
              <p className="card-text">Outdoor bar table and stool</p>
              <p className="card-text">Rp 500.000</p>
            </div>
            <div className="card_hover">
              <button type="button" className="btn btn-lg hover_btn">
                Add to cart
              </button>{" "}
              <br />
              <span>
                <span>
                  <IoShareSocialOutline className="icon" /> Share{" "}
                </span>
                <span>
                  <MdCompareArrows className="icon" /> compare{" "}
                </span>
                <span>
                  <IoIosHeartEmpty className="icon" /> Like
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card">
            <img src={image5} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Grifo</h5>
              <p className="card-text">Night lamp</p>
              <p className="card-text">
                Rp 2.500.000
                <small className="text-body-secondary"> Rp 1.500.000</small>
              </p>
            </div>
            <div className="card_hover">
              <button type="button" className="btn btn-lg hover_btn">
                Add to cart
              </button>{" "}
              <br />
              <span>
                <span>
                  <IoShareSocialOutline className="icon" /> Share{" "}
                </span>
                <span>
                  <MdCompareArrows className="icon" /> compare{" "}
                </span>
                <span>
                  <IoIosHeartEmpty className="icon" /> Like
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card">
            <img src={image6} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Muggo</h5>
              <p className="card-text">Small mug</p>
              <p className="card-text">
                Rp 1.50.000
                <small className="text-body-secondary"> Rp 3.500.000</small>
              </p>
            </div>
            <div className="card_hover">
              <button type="button" className="btn btn-lg hover_btn">
                Add to cart
              </button>{" "}
              <br />
              <span>
                <span>
                  <IoShareSocialOutline className="icon" /> Share{" "}
                </span>
                <span>
                  <MdCompareArrows className="icon" /> compare{" "}
                </span>
                <span>
                  <IoIosHeartEmpty className="icon" /> Like
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card">
            <img src={image7} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pingky</h5>
              <p className="card-text">Cute bed set</p>
              <p className="card-text">
                Rp 7.000.000
              </p>
            </div>
            <div className="card_hover">
              <button type="button" className="btn btn-lg hover_btn">
                Add to cart
              </button>{" "}
              <br />
              <span>
                <span>
                  <IoShareSocialOutline className="icon" /> Share{" "}
                </span>
                <span>
                  <MdCompareArrows className="icon" /> compare{" "}
                </span>
                <span>
                  <IoIosHeartEmpty className="icon" /> Like
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <div className="card">
            <img src={image8} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Potty</h5>
              <p className="card-text">Minimalist flower pot</p>
              <p className="card-text">
                Rp 500.000
                <small className="text-body-secondary"> Rp 3.500.000</small>
              </p>
            </div>
            <div className="card_hover">
              <button type="button" className="btn btn-lg hover_btn">
                Add to cart
              </button>{" "}
              <br />
              <span>
                <span>
                  <IoShareSocialOutline className="icon" /> Share{" "}
                </span>
                <span>
                  <MdCompareArrows className="icon" /> compare{" "}
                </span>
                <span>
                  <IoIosHeartEmpty className="icon" /> Like
                </span>
              </span>
            </div>
          </div>
        </div>

        <button className="btn btn-lg show_more_btn">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Products;
