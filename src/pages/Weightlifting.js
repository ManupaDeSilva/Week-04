import "./Weightlifting.css";

const Weightlifting = () => {
  return (
    <div className="weightlifting">
      <img
        className="locker01-back-1-12"
        alt=""
        src="/locker01-back-1-12@2x.png"
      />
      <div className="header3">
        <div className="department-of-physical-container3">
          <p className="department-of-physical3">
            Department of Physical Education
          </p>
          <p className="university-of-peradeniya6">University of Peradeniya</p>
        </div>
        <div className="headerback3" />
        <img className="unilogo-icon3" alt="" src="/unilogo@2x.png" />
        <div className="logout3">
          <b className="log-out3">Log out</b>
        </div>
        <div className="navigationbar3">
          <div className="naviback3" />
          <button className="home3">Home</button>
          <button className="about-us3">About Us</button>
          <button className="registration3">Registration</button>
          <button className="payments3">Payments</button>
          <button className="equipments4">Equipments</button>
          <button className="sports3">Sports</button>
          <button className="locker-system3">Locker System</button>
          <button className="facilities3">Facilities</button>
          <button className="daily-events3">Daily Events</button>
          <button className="classes3">Classes</button>
          <button className="special-programmes3">Special Programmes</button>
        </div>
        <img className="uopname-icon3" alt="" src="/uopname@2x.png" />
      </div>
      <div className="footer3">
        <img className="mapimage-icon3" alt="" src="/mapimage@2x.png" />
        <div className="contactus3">
          <div className="contact-us-departments-container3">
            <p className="contact-us3">
              <b>Contact Us</b>
            </p>
            <p className="blank-line9">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="departments-of-physical-educat3">
              <b>
                <span>Departments of Physical Education,</span>
              </b>
            </p>
            <p className="university-of-peradeniya7">
              <b>
                <span>University of Peradeniya,</span>
              </b>
            </p>
            <p className="university-of-peradeniya7">
              <b>
                <span>Peradeniya</span>
              </b>
            </p>
            <p className="university-of-peradeniya7">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="telephone3">
              <b>Telephone</b>
            </p>
            <p className="blank-line11">
              <b>&nbsp;</b>
            </p>
            <p className="university-of-peradeniya7">
              <b>Office - 081 - 239 2162</b>
            </p>
            <p className="director-081-239-21643">
              <b>Director - 081 - 239 2164</b>
            </p>
          </div>
          <img className="callicon3" alt="" src="/callicon@2x.png" />
          <img className="locationicon3" alt="" src="/locationicon@2x.png" />
        </div>
      </div>
      <div className="wrestling2">
        <div className="weight-lifting">WEIGHT LIFTING</div>
      </div>
      <div className="locker-19">Locker 19</div>
      <div className="equipments5">Equipments</div>
      <div className="court">Court</div>
      <div className="available-number-of3">Available Number of Barbells</div>
      <div className="today-available-times1">Today Available Times</div>
      <div className="bacsketballsavailable3">
        <div className="div3">10</div>
      </div>
      <div className="courttimeslots2">
        <div className="div3">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots3">
        <div className="div3">{`Data Not Available Yet `}</div>
      </div>
    </div>
  );
};

export default Weightlifting;
