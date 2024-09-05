import { makeAutoObservable } from "mobx";
import { getGameOdds } from "../services/casino.js";

class GameOddsStore {
  gameOddsData = [];

  constructor() {
    makeAutoObservable(this);
  }

  setGameOddsData(data) {
    this.gameOddsData = data;
  }

  async fetchGameOdds() {
    try {
      const data = await getGameOdds();
      this.setGameOddsData(data);
      console.log(data, "data");
    } catch (error) {
      console.error("Failed to get game odds data:", error);
    }
  }
}

export const gameOddsStore = new GameOddsStore();
