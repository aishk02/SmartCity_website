import BodyMain from "../components/BodyMain";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/BodyMain1.jpg";

function Home() {
  return (
    <>
      <Navbar />
      <BodyMain
        cName="bodyMain"
        BodyMainImg={HomeImg}
        horizontalline1=<hr></hr>
        title1="LOSE | YOURSELF"
        title2="DISCOVER | YOURSELF"
        horizontalline2=<hr></hr>
        //icon={<i class="fa-solid fa-plane-departure"></i>}
      />
    </>
  );
}

export default Home;
