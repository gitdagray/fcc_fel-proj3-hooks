import "./ControlsContainer.css";
import Switch from "./Switch";
import Display from "./Display";
import Slider from "./Slider";

export default function ControlsContainer({
  power,
  bank,
  display,
  slider,
  sliderDisabled,
  toggleBank,
  togglePower,
  setSlider
}) {
  return (
    <div className="controls-container">
      <Switch title="Power" power={power} togglePower={togglePower} />
      <Display display={display} />
      <Slider
        slider={slider}
        sliderDisabled={sliderDisabled}
        setSlider={setSlider}
      />
      <Switch title="Bank" bank={bank} toggleBank={toggleBank} />
    </div>
  );
}
