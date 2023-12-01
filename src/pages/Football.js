import "./Football.css";

const Football = () => {
  return (
    <div className="football">
      <img
        className="locker01-back-1-16"
        alt=""
        src="/locker01-back-1-16@2x.png"
      />
      <div className="header7">
        <div className="department-of-physical-container7">
          <p className="department-of-physical7">
            Department of Physical Education
          </p>
          <p className="university-of-peradeniya14">University of Peradeniya</p>
        </div>
        <div className="headerback7" />
        <img className="unilogo-icon7" alt="" src="/unilogo@2x.png" />
        <div className="logout7">
          <b className="log-out7">Log out</b>
        </div>
        <div className="navigationbar7">
          <div className="naviback7" />
          <button className="home7">Home</button>
          <button className="about-us7">About Us</button>
          <button className="registration7">Registration</button>
          <button className="payments7">Payments</button>
          <button className="equipments12">Equipments</button>
          <button className="sports7">Sports</button>
          <button className="locker-system7">Locker System</button>
          <button className="facilities7">Facilities</button>
          <button className="daily-events7">Daily Events</button>
          <button className="classes7">Classes</button>
          <button className="special-programmes7">Special Programmes</button>
        </div>
        <img className="uopname-icon7" alt="" src="/uopname@2x.png" />
      </div>
      <div className="footer7">
        <img className="mapimage-icon7" alt="" src="/mapimage@2x.png" />
        <div className="contactus7">
          <div className="contact-us-departments-container7">
            <p className="contact-us7">
              <b>Contact Us</b>
            </p>
            <p className="blank-line21">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="departments-of-physical-educat7">
              <b>
                <span>Departments of Physical Education,</span>
              </b>
            </p>
            <p className="university-of-peradeniya15">
              <b>
                <span>University of Peradeniya,</span>
              </b>
            </p>
            <p className="university-of-peradeniya15">
              <b>
                <span>Peradeniya</span>
              </b>
            </p>
            <p className="university-of-peradeniya15">
              <b>
                <span>&nbsp;</span>
              </b>
            </p>
            <p className="telephone7">
              <b>Telephone</b>
            </p>
            <p className="blank-line23">
              <b>&nbsp;</b>
            </p>
            <p className="university-of-peradeniya15">
              <b>Office - 081 - 239 2162</b>
            </p>
            <p className="director-081-239-21647">
              <b>Director - 081 - 239 2164</b>
            </p>
          </div>
          <img className="callicon7" alt="" src="/callicon@2x.png" />
          <img className="locationicon7" alt="" src="/locationicon@2x.png" />
        </div>
      </div>
      <div className="football-wrapper">
        <div className="football1">FOOTBALL</div>
      </div>
      <div className="locker-08">Locker 08</div>
      <div className="equipments13">Equipments</div>
      <div className="court1">Court</div>
      <div className="available-number-of10">Available Number of balls</div>
      <div className="today-available-times5">Today Available Times</div>
      <div className="bacsketballsavailable10">
        <div className="div10">10</div>
      </div>
      <div className="courttimeslots9">
        <div className="div10">{`Data Not Available Yet `}</div>
      </div>
      <div className="courttimeslots10">
        <div className="div10">{`Data Not Available Yet `}</div>
      </div>
    </div>
  );
};

export default Football;
