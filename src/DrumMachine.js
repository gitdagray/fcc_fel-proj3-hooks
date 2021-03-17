import "./DrumMachine.css";
import DrumPadContainer from "./DrumPadContainer";
import ControlsContainer from "./ControlsContainer";
import { useState } from "react";

export default function DrumMachine({ title }) {
  const [settings, setSettings] = useState({
    bank: "A",
    power: "ON",
    display: "Power On!",
    slider: 50,
    sliderDisabled: false
  });

  const toggleBank = () => {
    const bank = settings.bank === "A" ? "B" : "A";
    const display = settings.bank === "A" ? "Smooth Piano Kit" : "Heater Kit";
    const newValues = { bank, display };
    setSettings({ ...settings, ...newValues });
  };

  const togglePower = () => {
    const power = settings.power === "ON" ? "OFF" : "ON";
    const display = settings.power === "ON" ? "" : "Power On!";
    const sliderDisabled = settings.power === "ON" ? true : false;
    const newValues = { power, display, sliderDisabled };
    setSettings({ ...settings, ...newValues });
  };

  const setSlider = (value) => {
    const newValues = { slider: value, display: `Volume: ${value}` };
    setSettings({ ...settings, ...newValues });
  };

  const setDisplay = (value) => {
    const newValue = { display: value };
    setSettings({ ...settings, ...newValue });
  };

  return (
    <main id="drum-machine" className="drum-machine">
      <p className="drum-machine-title">{title}</p>
      <section className="sections-container">
        <DrumPadContainer
          bank={settings.bank}
          slider={settings.slider}
          power={settings.power}
          setDisplay={setDisplay}
        />
        <ControlsContainer
          display={settings.display}
          power={settings.power}
          bank={settings.bank}
          slider={settings.slider}
          sliderDisabled={settings.sliderDisabled}
          toggleBank={toggleBank}
          togglePower={togglePower}
          setSlider={setSlider}
        />
      </section>
    </main>
  );
}
