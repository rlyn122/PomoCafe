import "./ThemeButtons.css"
function ThemeButtons() {

    function changeTheme(theme) {
        console.log("Theme changed to ", theme)
        const App = document.querySelector(".App")
        const theme1path = "url('/backgroundImg/loficafe.jpg')"
        const theme2path = "url('/backgroundImg/coffeshop.jpeg')"
        const theme3path = "url('/backgroundImg/studydog.webp')"

        if (theme === 1) {
            App.style.backgroundImage = theme1path
        }
        else if (theme === 2) {
            App.style.backgroundImage = theme2path
        }
        else if (theme === 3) {
            App.style.backgroundImage = theme3path
        }
    }

    return (
        <div className="Center-ThemeButtons">
            <button className="RoundButton buttonText" onClick={() => { changeTheme(1) }}>loficafe</button>
            <button className="RoundButton buttonText" onClick={() => { changeTheme(2) }}>gamecafe</button>
            <button className="RoundButton buttonText" onClick={() => { changeTheme(3) }}>studydog</button>
        </div>
    )
} export default ThemeButtons;