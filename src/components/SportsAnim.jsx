import React from "react";

function SportsAnim() {
  const sports = [
    { icon: "⚽", name: "Football" },
    { icon: "🏏", name: "Cricket" },
    { icon: "🏸", name: "Badminton" },
    { icon: "🏀", name: "Basketball" },
    { icon: "🎾", name: "Tennis" },
    { icon: "🏉", name: "Rugby" },
    { icon: "🏓", name: "Table Tennis" },
    { icon: "⚾", name: "Baseball" },
  ];
  return (
    <div className="sports-anim" style={{ height: "13vh" }}>
      <div className="sports-scroll">
        <div className="sports-scroll-content">
          {[...sports, ...sports].map((sport, index) => (
            <a
              key={index}
              href={`#${sport.name.toLowerCase()}`}
              className="sport-item"
            >
              <span className="sport-icon">{sport.icon}</span>
              {sport.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SportsAnim;
