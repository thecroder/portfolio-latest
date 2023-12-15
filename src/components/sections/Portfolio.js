import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Portfolio
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/website.jpg"
              alt="DE"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>EdTech Website</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>User Interface Design</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Company :
                  </span>
                  <span>DataEinstein Technology Pvt. Ltd.</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>2 Months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Skills used:
                  </span>
                  <span>UI, Wireframing, Figma, Adobe Suite</span>
                </li>
              </ul>
            </div>
            <a href="https://www.figma.com/proto/gHfv6KwtjvhZyvtqKtIkPY/DE-Website?page-id=0%3A1&type=design&node-id=1-4059&viewport=415%2C384%2C0.07&t=VS9HYkvij7Noz8Cw-1&scaling=min-zoom&mode=design" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide> {/* 2 */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/yearbook.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>ABES Yearbook</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Magazine of 200 Pages</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> College :
                  </span>
                  <span>ABES, Ghaziabad</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>2 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Skills Used :
                  </span>
                  <span>Illustrator, Photoshop & Indesign</span>
                </li>
              </ul>
            </div>
            <a href="https://online.fliphtml5.com/ktpko/gsss/" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>{/* 3 */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/Security.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Security Website</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>User Interface Design</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Company :
                  </span>
                  <span>DE Guardian Angels</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Skills Used :
                  </span>
                  <span>UI, Wireframing, Figma, Adobe Suite</span>
                </li>
              </ul>
            </div>
            <a href="https://www.figma.com/proto/6ZpMmmtIoNXDSQ602dqbrm/Untitled?page-id=0%3A1&type=design&node-id=1-141&viewport=846%2C1368%2C0.28&t=iJg6FwIkBxTNFQiL-1&scaling=min-zoom&mode=design" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>{/* 4 */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/otca.jpg"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Product Website UI</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>User Interface Design</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Company :
                  </span>
                  <span>Orient Trading Company</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Skills Used :
                  </span>
                  <span>UI, Wireframing, Figma, Adobe Suite</span>
                </li>
              </ul>
            </div>
            <a href="https://www.figma.com/proto/jvyqR9pZkrFtknKpFwCuYf/OTC-Paints-Website?page-id=1%3A88&type=design&node-id=1-120&viewport=517%2C375%2C0.13&t=Fr158BfNQYn0ytlG-1&scaling=min-zoom&mode=design" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}

        {/* PORTFOLIO ITEM ENDS */}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;
