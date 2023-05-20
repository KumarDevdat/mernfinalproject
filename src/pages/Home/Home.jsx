import React from "react";
import "../Home/Home.css";
import Navbar from "../../components/navbar/navbar";
import HomeCarousel from "../../components/home/HomeCarousel";

import { Col, Row } from "antd";
const Home = () => {
  return (
    <>
      <div className="bg-mainBgColor">
        <Navbar />
        <HomeCarousel />
        <div className="">
          <div className="tag-one">
            <div className="tag-title">TRACK ACTIVITIES, BOOST PERFORMANCE</div>
          </div>
          <div className="tag-two">
            <div className="tag-title">
              RIDING ,HIKING ,WALKING SWIMING ,BICYCLING
            </div>
          </div>
        </div>

        <div className="activity-brochure-container">
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              col-12
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              col-12
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              col-12
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              col-12
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              col-12
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              col-12
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              col-12
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              col-12
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
