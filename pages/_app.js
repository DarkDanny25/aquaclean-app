import { useEffect } from "react";
import axios from "axios";
import "@/styles/globals.css";
import Navbar from "../frontend/components/navbar";
import Footer from "../frontend/components/footer";
import { v4 as uuidv4 } from "uuid";

const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const registerPushNotifications = async () => {
      if ("serviceWorker" in navigator && "PushManager" in window) {
        try {
          const registration = await navigator.serviceWorker.register("/service-worker.js");

          let subscription = await registration.pushManager.getSubscription();

          if (!subscription) {
            const permission = await Notification.requestPermission();
            if (permission !== "granted") {
              return;
            }

            const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
            const applicationServerKey = urlBase64ToUint8Array(vapidPublicKey);

            subscription = await registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey,
            });

            let subscriptionId = localStorage.getItem('subscriptionId');
            if (!subscriptionId) {
              subscriptionId = uuidv4();
              localStorage.setItem('subscriptionId', subscriptionId);
            }

            const { endpoint, expirationTime, keys } = subscription.toJSON();

            await axios.post(
              "https://backend-aquaclean.onrender.com/api/push/subscribe",
              {
                subscriptionId,
                endpoint,
                expirationTime,
                keys,
              },
              { headers: { "Content-Type": "application/json" } }
            );
          }
        } catch (error) {
        }
      }
    };

    registerPushNotifications();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}