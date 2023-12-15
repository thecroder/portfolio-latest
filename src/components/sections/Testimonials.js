const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " I've been working with Sanjay, he is very talented and skillful in his field, whether in designing the UI, or other visuals. "
              </span>
              <span className="person">Nikhil Mishra</span>
              <span className="job">Head of Operations- DataEinstein</span>
            </p>
            {/* /*<img src="assets/testimonials/testimonial-1.jpg" alt="" /> */}
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Sanjay is a freelancer since 3 years and i am connected with him from last 1.5 year, his services are awesome and designs are upto the marks as per my expectation. "
              </span>
              <span className="person">Ankur Gupta</span>
              <span className="job">Orient Trading Company</span>
            </p>
            {/* <img src="assets/testimonials/testimonial-2.jpg" alt="" /> */}
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
