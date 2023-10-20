const colors = {
    grey: (opacity = 1) => `rgba(109, 125, 154, ${opacity})`,
    bluea: (opacity = 1) => `rgb(145, 200, 228), ${opacity})`,
    blueb: (opacity = 1) => `rgb(206, 230, 243), ${opacity})`,
    bluec: (opacity = 1) => `rgb(70, 130, 169), ${opacity})`,
    cream: (opacity = 1) => `rgb(246, 244, 235), ${opacity})`,
    beige: (opacity = 1) => `rgb(216, 196, 182), ${opacity})`,
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    darkModeBlack: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
}
export default colors