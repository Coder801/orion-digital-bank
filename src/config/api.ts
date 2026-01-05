const isProd = process.env.NODE_ENV === "production";

export const PROTOCOL = isProd ? "https://" : "http://";
export const API_BASE = "/api";

export const ENDPOINTS = {};
