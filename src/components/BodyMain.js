import "./BodyMainStyle.css";

function BodyMain(props) {
  return (
    <>
      <div className={props}>
        <img alt="BodyMainImg" src={props.BodyMainImg} />
        <div className="bodymain-text">
          <div className="body-main-text">
            {props.horizontalline1}

            <h1 id="text1">{props.title1}</h1>
            <h1 id="text2">{props.title2}</h1>
            {props.horizontalline2}
          </div>
        </div>
      </div>
    </>
  );
}

export default BodyMain;
//<h1 id="text3">{props.icon}</h1> - after "text2"
