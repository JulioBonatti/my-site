import Layout from "../Layout";
import BaseRow from "../BaseRow";
import Minimap from "../MiniMap";
import React, { useEffect, useState } from "react";
import "./styles.css";

function Page() {
  const [activeSections, setActiveSections] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0.0);

  const observerCallBack = entries => {
    console.log("Entries: ", entries);
    let activeSections = [];
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSections.push(entry.target.id);
      }
    });
    setActiveSections(activeSections);
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const scrolled = (scrollTop / (scrollHeight - clientHeight));
    console.log("Scrolled: ", scrolled);
    setScrollPercentage(scrolled);
};

  const options = {
    root: document.querySelector(".julios-main-container"),
    rootMargin: "10px 0px 10px 0px",
    threshold: 1.0,
  };
  
  useEffect(() => {
    const sections = document.querySelectorAll(".julios-base_row");
    const observer = new IntersectionObserver(
      observerCallBack,
      options
    );
    sections.forEach((section) => observer.observe(section));
    console.log("Sections: ", sections)

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout activeButtons={activeSections}>
      <Minimap percent={scrollPercentage} />
      <BaseRow id="home">
        <h1 style={{height: "40rem"}}>Home section</h1>
      </BaseRow>
      <BaseRow id="about">
        <h1 style={{height: "40rem"}}>About section</h1>
      </BaseRow>
      <BaseRow id="skills">
        <h1 style={{height: "40rem"}}>Skills section</h1>
      </BaseRow>
      <BaseRow id="play">
        <h1 style={{height: "40rem"}}>Play section</h1>
      </BaseRow>
    </Layout>
  );
}

export default Page;
