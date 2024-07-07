import "./Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="Heroimg" src={props.Heroimg} />
      </div>
      <div className="hero-text">
        <h1>{props.title}</h1>

        <a href={props.url} className={props.btnCLass}>
          {props.buttonText}
        </a>
      </div>
    </>
  );
}
export default Hero;
