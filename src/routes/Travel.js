import BodyMain from "../components/BodyMain";
import Navbar from "../components/Navbar";
import RelaxImg from "../assets/BodyMain3.jpg";

function Travel() {
  return (
    <>
      <Navbar />
      <BodyMain
        cName="img"
        BodyMainImg={RelaxImg}
        horizontalline1=<hr></hr>
        title1={<q>ONCE A YEAR, GO SOMEPLACE YOU'VE NEVER BEEN BEFORE.</q>}
        horizontalline2=<hr></hr>
      />
    </>
  );
}

export default Travel;
