import { useState } from "react";
import { FaExpand } from "react-icons/fa";
import "./Home.scss";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";
// import video3 from "../assets/video3.mp4";
// import video4 from "../assets/video4.mp4";
// import video5 from "../assets/video5.mp4";
// import video6 from "../assets/video6.mp4";

const photos = [img1, img2, img3, img4, img5, img6, img8, img9];
const videos = [video1, video1, video1, video1, video1]; // , video1, video1, video1, video1, video1

const Home = () => {
  const [modalMedia, setModalMedia] = useState(null);

  const openModal = (media) => setModalMedia(media);
  const closeModal = () => setModalMedia(null);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="light-decoration">
          {[...Array(5)].map((_, i) => (
            <span key={i}></span>
          ))}
        </div>

        <div className="decorations">
          <div className="balloon balloon1"></div>
          <div className="balloon balloon2"></div>
          <div className="dj-light"></div>
          <div className="camera-icon"></div>
        </div>

        <div className="home-content">
          <h1>Welcome to VS Event Planners</h1>
          <p className="highlight">We Make Your Happy Moments More Happier!</p>
          <p className="services">
            Birthday Parties 🎉 | DJ & Music 🎵 | Natural & Artificial
            Decorations 💐 | Video & Photo Shooting 📸
          </p>
        </div>
      </section>

      {/* Work Samples Section */}
      <section className="work-samples">
        <h2>Our Work Samples to Select for Your Moments</h2>

        {/* Photos Gallery */}
        <div className="gallery">
          {photos.map((photo, index) => (
            <div key={index} className="sample-box">
              <img src={photo} alt={`Photo ${index + 1}`} loading="lazy" />
              <FaExpand
                className="fullscreen-icon"
                onClick={() => openModal({ type: "photo", src: photo })}
              />
            </div>
          ))}
        </div>

        {/* Videos Gallery */}
        {videos.length > 0 && <h3 className="video-header">Video Samples</h3>}
        <div className="gallery">
          {videos.map((video, index) => (
            <div key={index} className="sample-box video-box">
              <video
                src={video}
                muted
                autoPlay
                loop
                onMouseEnter={(e) => {
                  e.target.muted = false;
                }}
                onMouseLeave={(e) => {
                  e.target.muted = true;
                }}
              />
              <FaExpand
                className="fullscreen-icon"
                onClick={() => openModal({ type: "video", src: video })}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal Popup */}
      {modalMedia && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {modalMedia.type === "photo" ? (
              <img src={modalMedia.src} alt="Fullscreen" />
            ) : (
              <video src={modalMedia.src} controls autoPlay />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
