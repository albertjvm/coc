const fetch = require("node-fetch");
const API_URL = "https://api.clashofclans.com/v1";
const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJhM2FjNTk4LTg0NTgtNGM3Zi1iZjc3LWQ5NjJkM2QyYzE5MCIsImlhdCI6MTU3NzEzNjg4OSwic3ViIjoiZGV2ZWxvcGVyL2Y2YjU3Njc4LWY3M2QtYmJkMi02NTIzLTljMjBhZmE3OWE4ZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjc1Ljk4LjE5Mi44MiIsIjE5OC4yMDAuNzcuMjA3Il0sInR5cGUiOiJjbGllbnQifV19.6Tm5juY2BdhT_RNiiGOkT-1ertMpsQJMWolKCdvNGLvCGXtfXg3GW5havl_LKVonBWf5Up6NXaR6OxPq7ronpw";

exports.handler = function(event, context, callback) {
  return fetch(`${API_URL}/clans/028Q9G9JCG/members`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${TOKEN}`
    }
  })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: JSON.stringify(data)
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
