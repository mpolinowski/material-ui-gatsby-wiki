module.exports = {
  siteMetadata: {
    title: `INSTAR Wiki`,
    siteUrl: `https://wiki.instar.com`,
    description: `Blazing-fast INSTAR Wiki with React SSR`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/markdown/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 786,
              backgroundColor: "transparent"
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers alongside the code.
              // To use it, add the following line in src/layouts/index.js
              // right after importing the prism color scheme:
              //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // Defaults to false.
              showLineNumbers: false,
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#137bdf`,
        showSpinner: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/index.jsx`)
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://wiki.instar.com`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `INSTAR Wiki for Network Security Cameras`,
        description: `INSTAR Knowledgebase for IP Surveillance Cameras and Network Technologies`,
        short_name: `INSTAR Wiki`,
        lang: `en-GB`,
        dir: `ltr`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#137bdf`,
        icons: [
          {
            src: `/android/android-launchericon-48-48.png`,
            sizes: `48x48`,
            type: `image/png`
          },
          {
            src: `/android/android-launchericon-72-72.png`,
            sizes: `72x72`,
            type: `image/png`
          },
          {
            src: `/android/android-launchericon-96-96.png`,
            sizes: `96x96`,
            type: `image/png`
          },
          {
            src: `/android/android-launchericon-144-144.png`,
            sizes: `144x144`,
            type: `image/png`
          },
          {
            src: `/android/android-launchericon-192-192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android/android-launchericon-512-512.png`,
            sizes: `512x512`,
            type: `image/png`
          },
          {
            src: `/chrome/chrome-favicon-16-16.png`,
            sizes: `16x16`,
            type: `image/png`
          },
          {
            src: `/chrome/chrome-extensionmanagementpage-48-48.png`,
            sizes: `48x48`,
            type: `image/png`
          },
          {
            src: `/chrome/chrome-installprocess-128-128.png`,
            sizes: `128x128`,
            type: `image/png`
          },
          {
            src: `/firefox/firefox-general-16-16.png`,
            sizes: `16x16`,
            type: `image/png`
          },
          {
            src: `/firefox/firefox-general-32-32.png`,
            sizes: `32x32`,
            type: `image/png`
          },
          {
            src: `/firefox/firefox-general-48-48.png`,
            sizes: `48x48`,
            type: `image/png`
          },
          {
            src: `/firefox/firefox-general-64-64.png`,
            sizes: `64x64`,
            type: `image/png`
          },
          {
            src: `/firefox/firefox-general-90-90.png`,
            sizes: `90x90`,
            type: `image/png`
          },
          {
            src: `/firefox/firefox-general-128-128.png`,
            sizes: `128x128`,
            type: `image/png`
          },
          {
            src: `/firefox/firefox-marketplace-128-128.png`,
            sizes: `128x128`,
            type: `image/png`
          },
          {
            src: `/firefox/firefox-general-256-256.png`,
            sizes: `256x256`,
            type: `image/png`
          },
          {
            src: `/firefox/firefox-marketplace-512-512.png`,
            sizes: `512x512`,
            type: `image/png`
          },
          {
            src: `/ios/ios-appicon-76-76.png`,
            sizes: `76x76`,
            type: `image/png`
          },
          {
            src: `/ios/ios-appicon-120-120.png`,
            sizes: `120x120`,
            type: `image/png`
          },
          {
            src: `/ios/ios-appicon-152-152.png`,
            sizes: `152x152`,
            type: `image/png`
          },
          {
            src: `/ios/ios-appicon-180-180.png`,
            sizes: `180x180`,
            type: `image/png`
          },
          {
            src: `/ios/ios-appicon-1024-1024.png`,
            sizes: `1024x1024`,
            type: `image/png`
          },
          {
            src: `/ios/ios-launchimage-640-960.png`,
            sizes: `640x960`,
            type: `image/png`
          },
          {
            src: `/ios/ios-launchimage-640-1136.png`,
            sizes: `640x1136`,
            type: `image/png`
          },
          {
            src: `/ios/ios-launchimage-750-1334.png`,
            sizes: `750x1334`,
            type: `image/png`
          },
          {
            src: `/ios/ios-launchimage-768-1024.png`,
            sizes: `768x1024`,
            type: `image/png`
          },
          {
            src: `/ios/ios-launchimage-1024-768.png`,
            sizes: `1024x768`,
            type: `image/png`
          },
          {
            src: `/ios/ios-launchimage-1242-2208.png`,
            sizes: `1242x2208`,
            type: `image/png`
          },
          {
            src: `/ios/ios-launchimage-1334-750.png`,
            sizes: `1334x750`,
            type: `image/png`
          },
          {
            src: `/ios/ios-launchimage-1536-2048.png`,
            sizes: `1536x2048`,
            type: `image/png`
          },
          {
            src: `/ios/ios-launchimage-2048-1536.png`,
            sizes: `2048x1536`,
            type: `image/png`
          },
          {
            src: `/ios/ios-launchimage-2208-1242.png`,
            sizes: `2208x1242`,
            type: `image/png`
          },
          {
            src: `/windows/windowsphone-appicon-44-44.png`,
            sizes: `44x44`,
            type: `image/png`
          },
          {
            src: `/windows/windowsphone-appicon-62-62.png`,
            sizes: `62x62`,
            type: `image/png`
          },
          {
            src: `/windows/windowsphone-appicon-106-106.png`,
            sizes: `106x106`,
            type: `image/png`
          },
          {
            src: `/windows/windowsphone-mediumtile-150-150.png`,
            sizes: `150x150`,
            type: `image/png`
          },
          {
            src: `/windows/windowsphone-mediumtile-210-210.png`,
            sizes: `210x210`,
            type: `image/png`
          },
          {
            src: `/windows/windowsphone-mediumtile-360-360.png`,
            sizes: `360x360`,
            type: `image/png`
          },
          {
            src: `/windows/windowsphone-smalltile-71-71.png`,
            sizes: `71x71`,
            type: `image/png`
          },
          {
            src: `/windows/windowsphone-smalltile-99-99.png`,
            sizes: `99x99`,
            type: `image/png`
          },
          {
            src: `/windows/windowsphone-smalltile-170-170.png`,
            sizes: `170x170`,
            type: `image/png`
          },
          {
            src: `/windows/windowsphone-storelogo-50-50.png`,
            sizes: `50x50`,
            type: `image/png`
          },
          {
            src: `/windows/windowsphone-storelogo-70-70.png`,
            sizes: `70x70`,
            type: `image/png`
          },
          {
            src: `/windows/windowsphone-storelogo-120-120.png`,
            sizes: `120x120`,
            type: `image/png`
          },
          {
            src: `/windows/windows-smallsquare-24-24.png`,
            sizes: `24x24`,
            type: `image/png`
          },
          {
            src: `/windows/windows-smallsquare-30-30.png`,
            sizes: `30x30`,
            type: `image/png`
          },
          {
            src: `/windows/windows-smallsquare-42-42.png`,
            sizes: `42x42`,
            type: `image/png`
          },
          {
            src: `/windows/windows-smallsquare-54-54.png`,
            sizes: `54x54`,
            type: `image/png`
          },
          {
            src: `/windows/windows-splashscreen-620-300.png`,
            sizes: `620x300`,
            type: `image/png`
          },
          {
            src: `/windows/windows-splashscreen-868-420.png`,
            sizes: `868x420`,
            type: `image/png`
          },
          {
            src: `/windows/windows-splashscreen-1116-540.png`,
            sizes: `1116x540`,
            type: `image/png`
          },
          {
            src: `/windows/windows-squarelogo-120-120.png`,
            sizes: `120x120`,
            type: `image/png`
          },
          {
            src: `/windows/windows-squarelogo-150-150.png`,
            sizes: `150x150`,
            type: `image/png`
          },
          {
            src: `/windows/windows-squarelogo-210-210.png`,
            sizes: `210x210`,
            type: `image/png`
          },
          {
            src: `/windows/windows-squarelogo-270-270.png`,
            sizes: `270x270`,
            type: `image/png`
          },
          {
            src: `/windows/windows-storelogo-50-50.png`,
            sizes: `50x50`,
            type: `image/png`
          },
          {
            src: `/windows/windows-storelogo-70-70.png`,
            sizes: `70x70`,
            type: `image/png`
          },
          {
            src: `/windows/windows-storelogo-90-90.png`,
            sizes: `90x90`,
            type: `image/png`
          },
          {
            src: `/windows10/SplashScreen.scale-100.png`,
            sizes: `620x300`,
            type: `image/png`
          },
          {
            src: `/windows10/SplashScreen.scale-125.png`,
            sizes: `775x375`,
            type: `image/png`
          },
          {
            src: `/windows10/SplashScreen.scale-150.png`,
            sizes: `930x450`,
            type: `image/png`
          },
          {
            src: `/windows10/SplashScreen.scale-200.png`,
            sizes: `1240x600`,
            type: `image/png`
          },
          {
            src: `/windows10/SplashScreen.scale-400.png`,
            sizes: `2480x1200`,
            type: `image/png`
          },
          {
            src: `/windows10/Square44x44Logo.scale-100.png`,
            sizes: `44x44`,
            type: `image/png`
          },
          {
            src: `/windows10/Square44x44Logo.scale-125.png`,
            sizes: `55x55`,
            type: `image/png`
          },
          {
            src: `/windows10/Square44x44Logo.scale-150.png`,
            sizes: `66x66`,
            type: `image/png`
          },
          {
            src: `/windows10/Square44x44Logo.scale-200.png`,
            sizes: `88x88`,
            type: `image/png`
          },
          {
            src: `/windows10/Square44x44Logo.scale-400.png`,
            sizes: `176x176`,
            type: `image/png`
          },
          {
            src: `/windows10/Square44x44Logo.targetsize-16.png`,
            sizes: `16x16`,
            type: `image/png`
          },
          {
            src: `/windows10/Square44x44Logo.targetsize-16_altform-unplated.png`,
            sizes: `16x16`,
            type: `image/png`
          },
          {
            src: `/windows10/Square44x44Logo.targetsize-24.png`,
            sizes: `24x24`,
            type: `image/png`
          },
          {
            src: `/windows10/Square44x44Logo.targetsize-24_altform-unplated.png`,
            sizes: `24x24`,
            type: `image/png`
          },
          {
            src: `/windows10/Square44x44Logo.targetsize-48.png`,
            sizes: `48x48`,
            type: `image/png`
          },
          {
            src: `/windows10/Square44x44Logo.targetsize-48_altform-unplated.png`,
            sizes: `48x48`,
            type: `image/png`
          },
          {
            src: `/windows10/Square44x44Logo.targetsize-256.png`,
            sizes: `256x256`,
            type: `image/png`
          },
          {
            src: `/windows10/Square44x44Logo.targetsize-256_altform-unplated.png`,
            sizes: `256x256`,
            type: `image/png`
          },
          {
            src: `/windows10/Square71x71Logo.scale-100.png`,
            sizes: `71x71`,
            type: `image/png`
          },
          {
            src: `/windows10/Square71x71Logo.scale-125.png`,
            sizes: `89x89`,
            type: `image/png`
          },
          {
            src: `/windows10/Square71x71Logo.scale-150.png`,
            sizes: `107x107`,
            type: `image/png`
          },
          {
            src: `/windows10/Square71x71Logo.scale-200.png`,
            sizes: `142x142`,
            type: `image/png`
          },
          {
            src: `/windows10/Square71x71Logo.scale-400.png`,
            sizes: `284x284`,
            type: `image/png`
          },
          {
            src: `/windows10/Square150x150Logo.scale-100.png`,
            sizes: `150x150`,
            type: `image/png`
          },
          {
            src: `/windows10/Square150x150Logo.scale-125.png`,
            sizes: `188x188`,
            type: `image/png`
          },
          {
            src: `/windows10/Square150x150Logo.scale-150.png`,
            sizes: `225x225`,
            type: `image/png`
          },
          {
            src: `/windows10/Square150x150Logo.scale-200.png`,
            sizes: `300x300`,
            type: `image/png`
          },
          {
            src: `/windows10/Square150x150Logo.scale-400.png`,
            sizes: `600x600`,
            type: `image/png`
          },
          {
            src: `/windows10/Square310x310Logo.scale-100.png`,
            sizes: `310x310`,
            type: `image/png`
          },
          {
            src: `/windows10/Square310x310Logo.scale-125.png`,
            sizes: `388x388`,
            type: `image/png`
          },
          {
            src: `/windows10/Square310x310Logo.scale-150.png`,
            sizes: `465x465`,
            type: `image/png`
          },
          {
            src: `/windows10/Square310x310Logo.scale-200.png`,
            sizes: `620x620`,
            type: `image/png`
          },
          {
            src: `/windows10/Square310x310Logo.scale-400.png`,
            sizes: `1240x1240`,
            type: `image/png`
          },
          {
            src: `/windows10/StoreLogo.png`,
            sizes: `50x50`,
            type: `image/png`
          },
          {
            src: `/windows10/StoreLogo.scale-100.png`,
            sizes: `50x50`,
            type: `image/png`
          },
          {
            src: `/windows10/StoreLogo.scale-125.png`,
            sizes: `63x63`,
            type: `image/png`
          },
          {
            src: `/windows10/StoreLogo.scale-150.png`,
            sizes: `75x75`,
            type: `image/png`
          },
          {
            src: `/windows10/StoreLogo.scale-200.png`,
            sizes: `100x100`,
            type: `image/png`
          },
          {
            src: `/windows10/StoreLogo.scale-400.png`,
            sizes: `200x200`,
            type: `image/png`
          },
          {
            src: `/windows10/Wide310x150Logo.scale-100.png`,
            sizes: `310x150`,
            type: `image/png`
          },
          {
            src: `/windows10/Wide310x150Logo.scale-125.png`,
            sizes: `388x188`,
            type: `image/png`
          },
          {
            src: `/windows10/Wide310x150Logo.scale-150.png`,
            sizes: `465x225`,
            type: `image/png`
          },
          {
            src: `/windows10/Wide310x150Logo.scale-200.png`,
            sizes: `620x300`,
            type: `image/png`
          },
          {
            src: `/windows10/Wide310x150Logo.scale-400.png`,
            sizes: `1240x600`,
            type: `image/png`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage(
              filter: {
                path: {
                  regex: "/^(?!/(dev-404-page|404|error|offline|packages)).*$/"
                }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        output: `/sitemap.xml`,
        serialize: ({
          site,
          allSitePage
        }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7
            }
          })
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        navigateFallback: `/offline-plugin-app-shell-fallback/index.html`,
        // Only match URLs without extensions or the query `no-cache=1`.
        // So example.com/about/ will pass but
        // example.com/about/?no-cache=1 and
        // example.com/cheeseburger.jpg will not.
        // We only want the service worker to handle our "clean"
        // URLs and not any files hosted on the site.
        //
        // Regex based on http://stackoverflow.com/a/18017805
        navigateFallbackWhitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
        navigateFallbackBlacklist: [/\?(.+&)?no-cache=1$/],
        cacheId: `gatsby-plugin-offline`,
        // Don't cache-bust JS files and anything in the static directory
        dontCacheBustUrlsMatching: /(.*js$|\/static\/)/,
        runtimeCaching: [
          {
            // Add runtime caching of various page resources.
            urlPattern: /\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`,
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      }
    }
  ]
};
