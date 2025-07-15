import studentsPic from "./assets/Frame 232.png";
import Pic from "./assets/picture.png";
function Hello() {
  return (
    <div className="flex-conatiner">
      <div className="card">
        <h3 className="text1">students managment platform</h3>
        <h1 className="text2">
          STUDENTSYNC
          <br /> MANAGMENT WEB APP
        </h1>
        <h4 className="text3">Students for Academic year 2025/2026</h4>
        <button className="btn1">Learn More</button>
        <button className="btn2">All students</button>
      </div>
      <img className="image1" src={studentsPic} alt="students image"></img>
      <img className="image2" src={Pic} alt="students image"></img>
    </div>
  );
}
export default Hello;
