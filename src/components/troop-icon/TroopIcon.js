import React from "react";
import { Icon } from "../icon";
import { TROOPS } from "../../constants";
import barbarian from "../../icons/icon_barbarian.png";
import archer from "../../icons/icon_archer.png";
import goblin from "../../icons/icon_goblin.png";
import giant from "../../icons/icon_giant.png";
import wall_breaker from "../../icons/icon_wallbreaker.png";
import balloon from "../../icons/icon_balloon.png";
import wizard from "../../icons/icon_wizard.png";
import healer from "../../icons/icon_healer.png";
import dragon from "../../icons/icon_dragon.png";
import pekka from "../../icons/icon_pekka.png";
import baby_dragon from "../../icons/icon_babydragon.png";

export const TroopIcon = function({ size, troopType }) {
  let src;
  switch (troopType) {
    case TROOPS.BARBARIAN:
      src = barbarian;
      break;
    case TROOPS.ARCHER:
      src = archer;
      break;
    case TROOPS.GOBLIN:
      src = goblin;
      break;
    case TROOPS.GIANT:
      src = giant;
      break;
    case TROOPS.WALL_BREAKER:
      src = wall_breaker;
      break;
    case TROOPS.BALLOON:
      src = balloon;
      break;
    case TROOPS.WIZARD:
      src = wizard;
      break;
    case TROOPS.HEALER:
      src = healer;
      break;
    case TROOPS.DRAGON:
      src = dragon;
      break;
    case TROOPS.PEKKA:
      src = pekka;
      break;
    case TROOPS.BABY_DRAGON:
      src = baby_dragon;
      break;
    default:
      break;
  }

  return <Icon src={src} size={size} />;
};
