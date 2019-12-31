const API_URL = "http://localhost:8080";
const CLAN_TAG = "28Q9G9JCG";

export const COC = {
  getClanMembers: () => {
    return fetch(`${API_URL}/clans/${CLAN_TAG}/troops`, {
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        return response;
      });
  }
};
