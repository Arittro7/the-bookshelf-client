import Banner from "./Banner";
import Recommend from "./Recommend";
import TopSelling from "./TopSelling";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopSelling></TopSelling>
      <Recommend></Recommend>
    </div>
  );
};

export default Home;