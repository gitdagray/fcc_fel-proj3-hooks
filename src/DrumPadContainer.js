import "./DrumPadContainer.css";
import DrumPad from "./DrumPad";
import { useEffect, useCallback } from "react";

export default function DrumPadContainer({ bank, slider, power, setDisplay }) {
  const memoizedSoundBank = useCallback(() => {
    function soundBank() {
      const bankA = [
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      ];

      const bankB = [
        "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
      ];

      if (bank === "A") {
        return bankA;
      } else {
        return bankB;
      }
    }
    return soundBank();
  }, [bank]);

  const memoizedGetID = useCallback((array) => {
    function getID(array) {
      const newArray = array.map((id) => {
        return id
          .replace("https://s3.amazonaws.com/freecodecamp/drums/", "")
          .replace(".mp3", "");
      });
      return newArray;
    }
    return getID(array);
  }, []);

  useEffect(() => {
    function handleKeyDown(e) {
      const key = e.key;
      const keyLookup = {
        q: 0,
        w: 1,
        e: 2,
        a: 3,
        s: 4,
        d: 5,
        z: 6,
        x: 7,
        c: 8
      };
      const position = keyLookup[key];
      const audio = memoizedSoundBank();
      if (position === 0 || position) {
        const audioFile = new Audio(audio[position]);
        audioFile.play();
        const ids = memoizedGetID(audio);
        const id = ids[position];
        setDisplay(id);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [memoizedSoundBank, memoizedGetID, setDisplay]);

  const keysArr = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  const soundFiles = memoizedSoundBank();
  const ids = memoizedGetID(soundFiles);

  return (
    <div className="drum-pad-container">
      {keysArr.map((key, i) => {
        return (
          <DrumPad
            setDisplay={setDisplay}
            power={power}
            padkey={key}
            soundfile={soundFiles[i]}
            id={ids[i]}
            slider={slider}
            key={i}
          />
        );
      })}
    </div>
  );
}
