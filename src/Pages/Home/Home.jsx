import Banner from "./Banner";
import News from "./News";
import Recommend from "./Recommend";
import TopSelling from "./TopSelling";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopSelling></TopSelling>
      <Recommend></Recommend>
      <News></News>
    </div>
  );
};

export default Home;