const backgroundColor = '#27292C'
const foregroundColor = '#C2C7CE'
const tabBackgroundColor = '#393939'
const cursorColor = '#6E7278'
const borderColor = '#121212'
const lightBorderColor = '#222325'


const colors = {
	lightBlack: "#6E7278",
	black: "#333333",
	lightGreen: "#57D57F",
	green: "#00C642",
	lightYellow: "#FFCD3A",
	yellow: "#9E7800",
	white: "#eee8d5",
	lightWhite: "#fdf6e3",
	lightRed: "#CB3837",
	red: "#CB3837",
	magenta: "#782176",
	lightMagenta: "#C836C3",
	lightBlue: "#8A56FF",
	blue: "#4810D1",
	lightCyan: "#2AA198",
	cyan: "#2AA198"
};

const colorHints = {
	yellow: "#3F3923",
	lightRed: "#482C2E",
	lightMagenta: "#472C4A",
	lightBlue: "#3B3256",
}

exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor:lightBorderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      * {
      	text-rendering: optimizeLegibility;
        font-weight: 500;
      }
      .tabs_list {
      	border: 0;
      }
      .tabs_nav {
        background-color: ${backgroundColor};
        color: ${foregroundColor};
      }
      .tabs_title{
        color: ${colors.yellow};
      }
      .tab_tab:nth-child(4n+1) {
        color: ${colors.yellow};
      }
      .tab_tab:nth-child(4n+2) {
        color: ${colors.red};
      }
      .tab_tab:nth-child(4n+3) {
        color: ${colors.magenta};
      }
      .tab_tab:nth-child(4n+4) {
        color: ${colors.blue};
      }
      .tab_tab:nth-child(4n+1).tab_active {
        color: ${colors.yellow};
        background-color:${colorHints.yellow};
        border-bottom: 2px solid ${colors.yellow} !important;
      }
      .tab_tab:nth-child(4n+2).tab_active{
        font-weight: 700;
        color: ${colors.red};
        background-color: ${colorHints.lightRed};
        border-bottom: 2px solid ${colors.lightRed} !important;
      }
      .tab_tab:nth-child(4n+3).tab_active {
        font-weight: 700;
        color: ${colors.magenta};
        background-color: ${colorHints.lightMagenta};
        border-bottom: 2px solid ${colors.lightMagenta} !important;
      }
      .tab_tab:nth-child(4n+4).tab_active {
        color: ${colors.blue};
        background-color: ${colorHints.lightBlue}
        border-bottom: 2px solid ${colors.lightBlue} !important;
      }
      .tab_tab:before {
      	border: 0;
      }
      .splitpane_divider {
      	background-color: ${colors.red};
      }
    `
  })
}
