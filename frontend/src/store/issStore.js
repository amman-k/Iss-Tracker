import { create } from "zustand";
import axios from "axios";
import io, { Socket } from "socket.io-client";
import * as THREE from "three";

const BACKEND_URL = "http://localhost:5001";
const EARTH_RADIUS = 5;

const latLonToVector3 = (lat, lon, radius) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

export const useIssStore = create((set, get) => ({
  issData: { lat: 0, lon: 0, alt: 0, vel: 0 },
  pathPoints: [],
  isLoading: true,
  socket: null,

  initialize: () => {
    if (get().socket) return;
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/iss-history`);
        if (response.data.length > 0) {
          const latestPoint = response.data[0];
          set({
            issData: {
              lat: latestPoint.latitude,
              lng: latestPoint.longitude,
              alt: latestPoint.altitude,
              vel: latestPoint.velocity,
            },
            pathPoints: response.data
              .map((p) =>
                latLonToVector3(p.latitude, p.longitude, EARTH_RADIUS)
              )
              .reverse(),
            isLoading: false,
          });
        }
      } catch (error) {
        console.error("Failed to fetch ISS history:", error);
        set({ isLoading: false });
      }
    };

    fetchHistory();

    const socket = io(BACKEND_URL);
    set({ socket });

    socket.on("connect", () => console.log("Socket connected!"));

    socket.on("iss-location-update", (data) => {
      const newVector = latLonToVector3(data.lat, data.lng, EARTH_RADIUS);
      set((state) => ({
        issData: data,
        pathPoints: [...state.pathPoints.slice(-500), newVector],
        isLoading: false,
      }));
    });

    socket.on("disconnect", () => console.log("Socket disconnected."));
  },
  disconnect: () => {
    const { socket } = get();
    if (socket) {
      socket.disconnect();
      set({ socket: null });
    }
  },
}));
