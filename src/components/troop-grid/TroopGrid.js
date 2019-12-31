import React, { useState } from "react";
import { TroopIcon } from "../troop-icon";
import { TROOPS } from "../../constants";
import "./TroopGrid.css";

const getTroopLevelByName = (troops, troopName) => {
  const troop = troops.find(t => t.village === "home" && t.name === troopName);

  return troop ? troop.level : 0;
};

const getTroopLevel = (troops, troop) => {
  switch (troop) {
    case TROOPS.BARBARIAN:
      return getTroopLevelByName(troops, "Barbarian");
    case TROOPS.ARCHER:
      return getTroopLevelByName(troops, "Archer");
    case TROOPS.GOBLIN:
      return getTroopLevelByName(troops, "Goblin");
    case TROOPS.GIANT:
      return getTroopLevelByName(troops, "Giant");
    case TROOPS.WALL_BREAKER:
      return getTroopLevelByName(troops, "Wall Breaker");
    case TROOPS.BALLOON:
      return getTroopLevelByName(troops, "Balloon");
    case TROOPS.WIZARD:
      return getTroopLevelByName(troops, "Wizard");
    case TROOPS.HEALER:
      return getTroopLevelByName(troops, "Healer");
    case TROOPS.DRAGON:
      return getTroopLevelByName(troops, "Dragon");
    case TROOPS.PEKKA:
      return getTroopLevelByName(troops, "P.E.K.K.A");
    case TROOPS.BABY_DRAGON:
      return getTroopLevelByName(troops, "Baby Dragon");
    default:
      break;
  }
};

export const TroopGrid = ({ players }) => {
  const troopKeys = Object.keys(TROOPS);
  const [sortTroop, setSortTroop] = useState(TROOPS.BARBARIAN);

  const sortedPlayers = () =>
    players.sort(
      (p1, p2) =>
        getTroopLevel(p2.troops, sortTroop) -
        getTroopLevel(p1.troops, sortTroop)
    );

  return (
    <div className="TroopGrid">
      <span />
      {troopKeys.map(t => (
        <button
          className={`header ${sortTroop === TROOPS[t] ? "active" : ""}`}
          onClick={() => setSortTroop(TROOPS[t])}
        >
          <TroopIcon key={`header-${t}`} troopType={TROOPS[t]} />
        </button>
      ))}
      {sortedPlayers().map(player => (
        <React.Fragment>
          <span key={`${player.name}-name`}>{player.name}</span>
          {troopKeys.map(t => (
            <span key={`${player.name}-${t}`}>
              {getTroopLevel(player.troops, TROOPS[t])}
            </span>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
