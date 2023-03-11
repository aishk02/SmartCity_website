import BodyMain from "../components/BodyMain";
import Navbar from "../components/Navbar";
import EatImg from "../assets/BodyMain2.jpg";

function Eat() {
  return (
    <>
      <Navbar />
      <BodyMain
        cName="img"
        BodyMainImg={EatImg}
        horizontalline1=<hr></hr>
        title1={<q> AN OUNCE OF SAUCE COVERS A MULTITUDE OF SINS </q>}
        horizontalline2=<hr></hr>
      />
    </>
  );
}

export default Eat;
