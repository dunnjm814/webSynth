import './Tempo.css';


function Tempo({tempo, setTempo}){

    return(
        <div id='tempo-wrap'>
            <label>
                {tempo}
            </label>
            <input
                type='range' 
                id='tempo-range'
                min={60}
                max={240}
                value={tempo}
                onChange={(e)=>{setTempo(e.target.value)}}
            />
        </div>
    );
};

export default Tempo;