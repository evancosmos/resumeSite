import "./Intro.scss"
import myFace from "../images/me.jpg"
import arrow from "../images/angle-small-down.png"

export default function Intro() {
  return (
    <div className="intro">
      <div className="left">
        <img className="imgContainer" src={myFace} alt=""/>
      </div>
      <div className="right">
        <h3>Hi there, I'm</h3>
        <h1>Evan Clark</h1>
        <a className="arrow" href="#portfolio">
          <img src={arrow} alt=""/>
        </a>
      </div>
    </div>
  )
}
