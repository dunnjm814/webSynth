
import './ScaleSelector.css';
import  keyOptions  from '../utility/Scales.js'

function ScaleSelector({setScaleOption, scale}){

    return(
        <div id='key-select-wrap'>
            <label htmlFor="chooseKey" className="key-select-label">
                {`Pick a Key: `}
            <select
                className="key-select"
                name="chooseKey"
                id="chooseKey"
                value={scale}
                onChange={(e) => {
                    setScaleOption(JSON.parse(e.target.value));
                }}
            >
                {keyOptions.map((keyOpt, i) => (
                <>
                    <option
                        key={`key-${i}`}
                        className="key-option"
                        value={JSON.stringify(keyOpt)}
                    >
                        {keyOpt.label}
                    </option>
                </>
                ))}
            </select>
            </label>
        </div>
    );
};
export default ScaleSelector;