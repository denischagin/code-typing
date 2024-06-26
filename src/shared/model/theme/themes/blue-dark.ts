import { AppTheme } from "@features/settings/theme"

export const blueDarkTheme: AppTheme = {
    id: "Blue dark",
    name: "Blue Dark",
    colors: {
        main: {
            50: "rgba(179,216,255, 0.04)",
            100: "rgba(179,216,255, 0.08)",
            200: "rgba(179,216,255, 0.16)",
            300: "rgba(179,216,255, 0.25)",
            400: "rgba(179,216,255, 0.40)",
            500: "rgba(179,216,255,0.47)",
            600: "rgba(179,216,255, 0.70)",
            700: "rgba(195,213,255,0.85)",
            800: "rgba(214,226,255,0.9)",
            900: "rgb(245,248,255)"
        },
        primary: {
            50: "#e6f7ff",
            100: "#bae3ff",
            200: "#7cc4fa",
            300: "#47a3da",
            400: "#2186eb",
            500: "#1985bf",
            600: "#1a6da8",
            700: "#1b4f8d",
            800: "#173f5f",
            900: "#12283a"
        },
        contrast: {
            50: "rgba(0, 0, 0, 0.1)",
            100: "rgba(0, 0, 0, 0.2)",
            200: "rgba(0, 0, 0, 0.4)",
            300: "rgba(0, 0, 0, 0.5)",
            400: "rgba(0, 0, 0, 0.6)",
            500: "rgba(0, 0, 0, 0.65)",
            600: "rgba(0, 0, 0, 0.7)",
            700: "rgba(0, 0, 0, 0.8)",
            800: "rgba(0, 0, 0, 0.9)",
            900: "rgba(0, 0, 0, 1)"
        }
    }
}
