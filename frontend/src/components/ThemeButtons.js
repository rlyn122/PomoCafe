import "./ThemeButtons.css"
function ThemeButtons() {

    function changeTheme(theme) {

    }

    return (
        <div class="Center-ThemeButtons">
            <button className="RoundButton buttonText" onclick={() => { changeTheme(1) }}>Theme 1</button>
            <button className="RoundButton buttonText" onclick={() => { changeTheme(2) }}>Theme 2</button>
            <button className="RoundButton buttonText" onclick={() => { changeTheme(3) }}>Theme 3</button>
        </div>
    )
} export default ThemeButtons;