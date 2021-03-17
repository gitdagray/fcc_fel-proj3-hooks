import "./Slider.css";

export default function Slider({ slider, sliderDisabled, setSlider }) {
  return (
    <input
      type="range"
      value={slider}
      onChange={(e) => setSlider(e.target.value)}
      disabled={sliderDisabled}
      min="0"
      max="100"
      className="slider"
    />
  );
}
