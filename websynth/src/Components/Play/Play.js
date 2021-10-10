import { CgPlayButtonR } from "react-icons/cg";
import { CgPlayStopR } from "react-icons/cg";

function Play({toggle, playState}) {
    const iconStyle = {
        display: 'flex',
        alignContent: 'center',
        textDecoration: 'none',
        fontSize: '50px',
        color: '#818181',
        marginTop: '15px',
        transition: '0.5s',
        cursor: 'pointer'
    }
    return(
        <div className="play-key">
            <div
                id="play-state"
                onClick={() => {
                    toggle();
                }}
            >
                {playState === "started" ? (
                        <CgPlayStopR style={iconStyle}/>
                ) : (
                        <CgPlayButtonR style={iconStyle}/>
                )}
            </div>
        </div>    
    );
};
export default Play;