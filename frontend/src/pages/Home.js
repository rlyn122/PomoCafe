import "./Home.css"
import Timer from '../components/Timer.js'
import FullScreenButton from '../components/FullScreenButton.js'
import ThemeButtons from '../components/ThemeButtons.js'
import SpotifyEmbed from '../components/SpotifyEmbed.js'

function Home() {

    return (
        <div className="Home">

            <div className="FullScreenButton">
                <FullScreenButton />
            </div>

            <div className="SpotifyAndTimer">
                <div id="SpotifyEmbed">
                    <SpotifyEmbed />
                </div>
                <div className='ThemeAndTimer'>
                    <h1 className="titleText">PomoCafe</h1>
                    <div className="ThemeButtons">
                        <ThemeButtons />
                    </div>
                    <div className="Timer">
                        <Timer />
                    </div>
                </div>
            </div>
        </div>
    );

} export default Home;