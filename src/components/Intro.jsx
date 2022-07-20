import "./Intro.scss"
import myFace from "../images/me.jpg"

export default function Intro() {
  return (
    <div className="intro">
      <div className="left">
        <img className="imgContainer" src={myFace} alt=""/>
      </div>
      <div className="right">
        Hi, I'm <br/> Evan Clark
        <a href="#portfolio">
          replace this with arrow
        </a>
      </div>
    </div>
  )
}
