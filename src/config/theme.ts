/**
 * Claude (Anthropic) Theme Color Schema
 * 
 * Sources:
 * - Sand (Background): #faf9f5
 * - Carbon (Foreground): #141413
 * - Rust-Orange (Accent): #d97757
 * - Mid-Gray (Muted): #b0aea5
 * - Friar-Gray (Secondary Dark): #828179
 * - Light-Gray (Border): #e8e6dc
 * - Dark-Gray (Dark Border): #2a2a28
 * - Emerald (Success): #10b981
 * - Red (Error): #ef4444
 */

export const THEME = {
  light: {
    background: "#faf9f5", // Claude Sand
    foreground: "#141413", // Claude Carbon
    accent: "#d97757", // Claude Rust-Orange
    muted: "#b0aea5", // Claude Mid-Gray
    border: "#e8e6dc", // Claude Light-Gray
    success: "#10b981", // Emerald
    error: "#ef4444", // Red
  },
  dark: {
    background: "#141413", // Claude Carbon
    foreground: "#faf9f5", // Claude Sand
    accent: "#d97757", // Claude Rust-Orange
    muted: "#828179", // Claude Friar-Gray
    border: "#2a2a28", // Dark Gray Border
    success: "#10b981", // Emerald
    error: "#ef4444", // Red
  },
} as const;

export type ThemeColors = typeof THEME.light;
