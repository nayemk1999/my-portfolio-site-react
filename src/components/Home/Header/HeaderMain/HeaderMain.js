import React from "react";
import Typical from "react-typical";
import "./HeaderMain.css";
const HeaderMain = () => {
  return (
    <section className="container headerMain">
      <div className="row align-items-center text-center">
        <div className="col-md-6">
          <h4 className="text-center text-uppercase text-shadow">HELLO, MY NAME IS</h4>
          <Typical
            className="text-danger typical"
            steps={["", 500, "NAYEM KHAN", 1000]}
            loop={Infinity}
            wrapper="h1"
          />
          <p className="text-center text-uppercase text-shadow">
            I am a Web Designer/Developer.A HTML,CSS,JavaScript, React & MongoDB
            expert.I always maintain a good relationships with my Team Member.
          </p>
          <a
            href="https://drive.google.com/u/0/uc?id=1ElFdYPB4y_vCnXwPLJ_DOChyPJbxAtlJ&export=download"
            download
          >
            <button className="btn btn-success btn-custom">
              Download My Resume
            </button>
          </a>
        </div>
        <div className="col-md-6 banner-img d-flex p-3 justify-content-center">
          <img
            className="img-fluid w-75"
            src="https://i2.wp.com/nayemkhan.com/wp-content/uploads/2020/11/My-picture0-ox8zgmumk0jnjuqoczmh1692r810mope5gpdregctw.jpg?fit=370%2C370&ssl=1"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
