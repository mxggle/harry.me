import satori from "satori";
import { SITE } from "@/config";
import { THEME } from "@/config/theme";
import loadGoogleFonts from "../loadGoogleFont";

export default async post => {
  return satori(
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: THEME.dark.background,
          color: THEME.dark.foreground,
          padding: "80px",
          position: "relative",
        },
        children: [
          // 1. Background Decorative Element
          {
            type: "div",
            props: {
              style: {
                position: "absolute",
                top: "-100px",
                right: "-100px",
                width: "600px",
                height: "600px",
                background: `linear-gradient(140deg, ${THEME.dark.accent}, ${THEME.dark.muted})`,
                filter: "blur(100px)",
                opacity: 0.15,
                borderRadius: "100%",
              },
            },
          },

          // 2. Header: Site name
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                backgroundColor: `${THEME.dark.foreground}0D`,
                padding: "10px 24px",
                borderRadius: "50px",
                border: `1px solid ${THEME.dark.foreground}1A`,
              },
              children: {
                type: "span",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    fontSize: 24,
                    fontWeight: "bold",
                    letterSpacing: "2px",
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
                        style: { color: THEME.dark.accent, margin: "0 8px" },
                        children: "{-}",
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
            },
          },

          // 3. Main Content: Post Title
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                width: "100%",
              },
              children: {
                type: "h1",
                props: {
                  style: {
                    fontSize: 84,
                    fontWeight: 900,
                    lineHeight: 1.1,
                    margin: 0,
                    color: THEME.dark.foreground,
                  },
                  children: post.data.title,
                },
              },
            },
          },

          // 4. Footer: Author
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                width: "100%",
              },
              children: [
                // Decorative separator line
                {
                  type: "div",
                  props: {
                    style: {
                      width: "60px",
                      height: "4px",
                      backgroundColor: THEME.dark.accent,
                      marginRight: "24px",
                    },
                  },
                },
                {
                  type: "span",
                  props: {
                    style: {
                      fontSize: 32,
                      color: THEME.light.muted,
                    },
                    children: [
                      "Written by ",
                      {
                        type: "span",
                        props: {
                          style: {
                            fontWeight: "bold",
                            color: THEME.dark.foreground,
                            marginLeft: "8px",
                          },
                          children: post.data.author,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(
        post.data.title + post.data.author + SITE.title + "Writtenby" + ".com"
      ),
    }
  );
};
