import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './FullScreenButton.css';

class FullScreenButton extends React.Component {
    enterFullscreen = () => {
        const elem = document.documentElement;

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE/Edge
            elem.msRequestFullscreen();
        }
    }

    exitFullscreen = () => {
        if (document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }   
    }


    render() {
        const iconStyle = {
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
        };

        return (
            <div class="button-container">

                <button onClick={this.enterFullscreen} class="Icon" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <i className="fas fa-expand" style={iconStyle}></i>
                </button>
                <button onClick={this.exitFullscreen} class="Icon" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <i className="fas fa-compress" style={iconStyle}></i>
                </button>
            </div>
        );
    }
};

export default FullScreenButton;