import React from "react";

const redirect_uri = "http://localhost:3000";
const client_id = "9e3491c87e0e407f9d10a4518cfa8656";
const scope =
  "streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=${scope}`;

export default function Login() {
  return <div></div>;
}
