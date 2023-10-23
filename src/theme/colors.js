const colors = {
    grey: (opacity = 1) => `rgba(109, 125, 154, ${opacity})`,
    blue: (opacity = 1) => `rgb(89, 115, 242), ${opacity})`,
    green: (opacity = 1) => `rgb(48, 193, 99), ${opacity})`,
    red: (opacity = 1) => `rgb(218, 55, 85), ${opacity})`,
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    darkModeBlack: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
}
export default colors