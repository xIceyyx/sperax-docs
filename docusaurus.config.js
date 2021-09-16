const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Sperax Docs | Sperax",
    tagline: "Dinosaurs are cool",
    url: "https://your-docusaurus-test-site.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/logo.png",
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl:
              "https://github.com/facebook/docusaurus/edit/main/website/",
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              "https://github.com/facebook/docusaurus/edit/main/website/blog/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: "Sperax Docs",
          logo: {
            alt: "Logo",
            src: "img/logo.png",
          },
          items: [
            {
              type: "doc",
              docId: "intro",
              position: "left",
              label: "Docs",
              className: "docs-link",
            },

            {
              label: "Whitepaper",
              href: "https://sperax.io/whitePaper",
              position: "right",
              className: "whitepaper-link",
            },

            {
              label: "GitHub",
              href: "https://github.com/Sperax",
              position: "right",
              className: "github-link",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Learn how to add your custom docs🔥",
                  to: "/docs/tutorial-basics/create-a-document",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Twitter",
                  href: "https://twitter.com/sperax_io",
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/sperax",
                },
                {
                  label: "Discord",
                  href: "https://discord.com/invite/bYMNBnj",
                },
                {
                  label: "Telegram",
                  href: "https://t.me/sperax",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "GitHub",
                  href: "https://github.com/Sperax",
                },
                {
                  label: "Medium",
                  href: "https://medium.com/sperax",
                },
              ],
            },
          ],
          copyright: `Sperax Foundation © Sperax ${new Date().getFullYear()}. All rights reserved.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
