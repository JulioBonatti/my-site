import Layout from "../Layout";
import BaseRow from "../BaseRow";
import "./styles.css";

function Page() {
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
