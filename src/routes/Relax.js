import BodyMain from "../components/BodyMain";
import Navbar from "../components/Navbar";

function Relax() {
  return (
    <>
      <Navbar />
      <BodyMain
        cName="img"
        BodyMainImg={
          "https://i.pinimg.com/564x/07/ea/ee/07eaee392a76543d20433b7233525e78.jpg"
        }
      />
    </>
  );
}

export default Relax;
