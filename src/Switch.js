import "./Switch.css";

export default function ControlsContainer({
  title,
  power,
  bank,
  togglePower,
  toggleBank
}) {
  /* handleClick = (event) => {
    if (event.target.style.backgroundColor === "orange") {
      return; //already selected
    }

    if (this.props.title === "Power") {
      this.props.setPower(event);
    } else if (this.props.title === "Bank") {
      this.props.setBank(event);
    } else {
      return;
    }
  }; */

  const handleClick = (e) => {
    if (e.target.style.backgroundColor === "orange") return;
    if (power) togglePower();
    if (bank) toggleBank();
  };

  const getButtonColorArray = () => {
    const array = [];
    if (power === "ON" || bank === "A") {
      array.push("#000", "orange");
    } else {
      array.push("orange", "#000");
    }
    return array;
  };

  const bgButtonColor = getButtonColorArray();

  return (
    <div className="switch">
      <p className="switch-title">{title}</p>
      <div className="switch-container">
        <div
          className={`switch-button ${title}`}
          onClick={handleClick}
          style={{ backgroundColor: `${bgButtonColor[0]}` }}
        />
        <div
          className={`switch-button ${title} on`}
          onClick={handleClick}
          style={{ backgroundColor: `${bgButtonColor[1]}` }}
        />
      </div>
    </div>
  );
}
