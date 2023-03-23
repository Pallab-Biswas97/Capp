import React from "react";
import "../Style/Navbar.css";
import Chatbot from "./Chatbot";
import bg from "../Images/cloud_bg.jpg";
import Cards from "./Cards";
import Small from "./Small";
import Asset from "./Assest";
import Menu from "./Menu";
import Team from "./Team";
import "../Style/Team.css";
import Sstory from "./Sstory";

const Home = () => {
  return (
    <>
      <div>
        <div className="text">
          <h1>Cloud Assosiation Platform</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="row container-fluid intro_text ">
            <div className="col intro_card1">
              <h2>What does it Offers?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
            <div className="col intro_card2">
              <h2>Key wins</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
            <div className="col intro_card1">
              <h2>Events</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
          </div>
        </div>
        <div className="bg_img">
          <img className="backgroung_img" src={bg} />
        </div>
      </div>

      {/* List */}

      <div className="container list_box">
        <ul className="list">
          <li className="lists">
            <div className="list_item">Cloud Go To Market</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item">Cloud Framework</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item">Our Offerings</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item">Success Stories</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item">Cloud Governance</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item">Partnership with Hyperscalers</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item">Assets & Recognitions</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item">Teams & Contacts</div>
            <div className="divs"></div>
          </li>
        </ul>
      </div>

      <div>
        <div className="container heading">POPULAR CATEGORIES</div>
      </div>

      <div className="container">
        <Cards />
      </div>

      {/* Offering section */}
      <div>
        <div className="container heading">OUR OFFERINGS & SOLUTIONS</div>
        <div className="container">
          <Menu />
        </div>
      </div>

      <div>
        <div className="container heading">SUCCESS STORIES </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Sstory />
            </div>
            <div className="col">
              <Sstory />
            </div>
            <div className="col">
              <Sstory />
            </div>
            <div className="col">
              <Sstory />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container heading">PARTNERSHIP & ALLIANCES</div>

        <Small />
      </div>

      <div>
        <div className="container heading">ASSET</div>
        <Asset />
      </div>

      <div>
        <div className="container heading">OUR TEAM</div>
        <Team />
      </div>

      <div className="chatbot fixed-bottom">
        <Chatbot />
      </div>
    </>
  );
};
export default Home;
