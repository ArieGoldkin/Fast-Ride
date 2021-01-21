import axios from "axios";

export const getFastRiderData = ({ token }) => {
  return axios.get(`/v1/rides?token=${token}`, {
    headers: { "Content-Type": "application/json" },
  });
};

export const submitRideData = ({ token, pin, ride_id }) => {
  return axios.post(
    `/v1/tickets`,
    { pin, ride_id, token },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
