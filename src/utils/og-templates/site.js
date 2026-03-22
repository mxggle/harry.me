import satori from "satori";
import { SITE } from "@/config";
import { THEME } from "@/config/theme";
import loadGoogleFonts from "../loadGoogleFont";

export default async () => {
  // Get the clean hostname (e.g., mydomain.com)
  const hostname = new URL(SITE.website).hostname;

  return satori(
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: THEME.dark.background,
          backgroundImage: `radial-gradient(circle at 25px 25px, ${THEME.dark.border} 2%, transparent 0%), radial-gradient(circle at 75px 75px, ${THEME.dark.border} 2%, transparent 0%)`,
          backgroundSize: "100px 100px",
          color: THEME.dark.foreground,
          position: "relative",
        },
        children: [
          // 1. Decorative Gradient (Rust)
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "-150px",
                right: "-50px",
                width: "600px",
                height: "600px",
                background: `linear-gradient(140deg, ${THEME.dark.accent}, ${THEME.dark.muted})`,
                filter: "blur(120px)",
                opacity: 0.15,
                borderRadius: "100%",
              },
            },
          },

          // 2. Center Container
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "40px",
                width: "90%",
              },
              children: [
                // Site Logo / Title
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 100,
                      fontWeight: 900,
                      letterSpacing: "-2px",
                      margin: "0 0 20px 0",
                      lineHeight: 1,
                    },
                    children: [
                      {
                        type: "span",
                        props: {
                          style: { color: THEME.dark.foreground },
                          children: SITE.author,
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: { color: THEME.dark.accent, margin: "0 20px" },
                          children: "{☕}",
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: { color: THEME.dark.foreground },
                          children: "blog",
                        },
                      },
                    ],
                  },
                },

                // Separator line
                {
                  type: "div",
                  props: {
                    style: {
                      width: "80px",
                      height: "4px",
                      backgroundColor: THEME.dark.accent,
                      borderRadius: "2px",
                      marginBottom: "30px",
                    },
                  },
                },

                // Description
                {
                  type: "p",
                  props: {
                    style: {
                      fontSize: 36,
                      color: THEME.light.muted, // Mid-Gray
                      maxWidth: "80%",
                      margin: 0,
                      lineHeight: 1.4,
                      fontWeight: 400,
                    },
                    children: SITE.desc,
                  },
                },
              ],
            },
          },

          // 3. Footer
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                bottom: "50px",
                display: "flex",
                alignItems: "center",
                backgroundColor: `${THEME.dark.foreground}0D`,
                border: `1px solid ${THEME.dark.foreground}1A`,
                padding: "12px 30px",
                borderRadius: "100px",
              },
              children: {
                type: "span",
                props: {
                  style: {
                    fontSize: 24,
                    color: THEME.dark.muted,
                    fontWeight: 600,
                    letterSpacing: "1px",
                  },
                  children: hostname,
                },
              },
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(SITE.title + SITE.desc + hostname),
    }
  );
};
