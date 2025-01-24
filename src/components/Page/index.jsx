import Layout from "../Layout";
import BaseRow from "../BaseRow";
import React, { useEffect, useState } from "react";
import "./styles.css";

function Page() {
  const [activeSection, setActiveSection] = useState("");

  const observerCallBack = entries => {
    console.log("Entries: ", entries)
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  }

  const options = {
    root: document.querySelector(".julios-main-container"),
    rootMargin: "0px",
    threshold: 0.8,
  };
  
  useEffect(() => {
    const sections = document.querySelectorAll(".julios-base_row");
    let obs = []
    sections.forEach((section,i) => {
      obs[i] = new IntersectionObserver(
        observerCallBack,
        options // Adjust threshold as needed
      );
      obs[i].observe(section);
    })
    console.log("Sections: ", sections)
  }, []);

  return (
    <Layout>
      <BaseRow id="home">
        <h1 style={{height: "20rem"}}>Home section</h1>
      </BaseRow>
      <BaseRow id="about">
        <h1 style={{height: "20rem"}}>About section</h1>
      </BaseRow>
      <BaseRow id="skills">
        <h1 style={{height: "20rem"}}>Skills section</h1>
      </BaseRow>
      <BaseRow id="play">
        <h1 style={{height: "20rem"}}>Play section</h1>
      </BaseRow>
    </Layout>
  );
}

export default Page;
