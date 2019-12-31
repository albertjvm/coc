const fetch = require("node-fetch");
const API_URL = "https://api.clashofclans.com/v1";
const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjMzNTAwNzg5LTEyOGUtNDI3My1iNjkxLTI2YmYzM2IxOWM1ZCIsImlhdCI6MTU3NzgxMjI4Niwic3ViIjoiZGV2ZWxvcGVyL2Y2YjU3Njc4LWY3M2QtYmJkMi02NTIzLTljMjBhZmE3OWE4ZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM0LjIwNC4yMDQuNjAiLCI3NS45OC4xOTIuODIiLCIxOTguMjAwLjc3LjIwNyJdLCJ0eXBlIjoiY2xpZW50In1dfQ.onEwVbj1HDuCgXhuoEeEAFsK-y3ylIAfj7VdwPaRARnjzxo37K6BX0yjbwTtpbGIbCber1twIzC-Pbndc0bH_w";

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
