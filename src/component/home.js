// Import the react JS packages
import { useEffect, useState } from "react";
import axios from "axios";
// Define the Login function.
export const Home = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    } else {
      (async () => {
        try {
          const { data } = await axios.get(
            "https://django-jwt-o5db9.ondigitalocean.app/api/home/",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setMessage(data.message);
        } catch (e) {
          console.log("not auth");
        }
      })();
    }
  }, []);
  return (
    <div className="form-signin mt-5 text-center">
      {message && <h3>Hi {message}</h3>}
    </div>
  );
};
