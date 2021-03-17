import "./DrumPad.css";

export default function DrumPad({
  setDisplay,
  power,
  padkey,
  soundfile,
  id,
  slider
}) {
  const handlePadClick = (e) => {
    if (power === "ON") {
      e.target.children[0].pause();
      e.target.children[0].currentTime = 0;
      e.target.children[0].play();
      setDisplay(e.target.getAttribute("id"));
    }
  };
  const handleMouseDown = (e) => {
    if (power === "ON") {
      let elem = e.target;
      elem.style.backgroundColor = "orange";
      window.setTimeout(() => {
        elem.style.backgroundColor = "rgb(239,239,239)";
      }, 75);
    }
  };

  const handleKeyDown = (e) => {
    console.log(`In drumpad: ${e.key}`);
    if (e.key.toLowerCase() === padkey.toLowerCase()) {
      e.target.children[0].pause();
      e.target.children[0].currentTime = 0;
      e.target.children[0].play();
      setDisplay(e.target.getAttribute("id"));
    }
  };

  return (
    <button
      className="drum-pad"
      onClick={(e) => handlePadClick(e)}
      onMouseDown={(e) => handleMouseDown(e)}
      onKeyDown={(e) => handleKeyDown(e)}
      tabIndex={0}
      id={id}
    >
      {padkey}
      <audio
        id={padkey}
        className="clip"
        src={soundfile}
        onPlay={(e) => (e.target.volume = slider / 100)}
        type="audio/mpeg"
      />
    </button>
  );
}
