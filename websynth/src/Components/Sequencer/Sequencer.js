import React, { useCallback, useState, useEffect } from "react";
import * as Tone from "tone";
import "./Sequencer.css";
import Square from '../Square/Square.js'
import Play from '../Play/Play.js';
import Tempo from '../Tempo/Tempo.js'
import initialPattern from "../utility/initialPattern";
import ScaleSelector from "../ScaleSelector/ScaleSelector";


function Sequencer() {
    // Use context to grab changing tempo slider state from tempo component 
    // const tempo = 120;
    const [tempo, setTempo] = useState(120);
    const [pattern, updatePattern] = useState(initialPattern);
    const [playState, setPlayState] = useState(Tone.Transport.state);
    const [activeColumn, setColumn] = useState(0);
    const [scaleOption, setScaleOption] = useState();
    const [notes, setNotes] = useState([]);
    const [scale, setScale] = useState('');


    const synth = new Tone.PolySynth().toDestination();    
    Tone.Transport.bpm.value = tempo;

    useEffect(
        () => {
        const loop = new Tone.Sequence(
            (time, col) => {
              // Update active column for animation
            setColumn(col);
              // Loop current pattern
            pattern.map((row, noteIndex) => {
                // If active
                if (row[col]) {
                    // Play based on which row
                    //trigger sample here
                    synth.triggerAttackRelease(notes[noteIndex], "8n", time);
                }  
            });
            },
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            "16n"
        ).start(0);
        return () => loop.dispose();
        }, [pattern, notes, synth] // Retrigger when pattern changes
    );
    
    const toggle = useCallback(() => {
        Tone.Transport.toggle();
        setPlayState(Tone.Transport.state);
    }, []);
      // Updates pattern via copy and invert value
    function setPattern({ y, x, value }) {
        const patternCopy = [...pattern];
        patternCopy[y][x] = +!value;
        updatePattern(patternCopy);
    }

    useEffect(() => {
        if (scaleOption) {
            setNotes(scaleOption.value);
            setScale(scaleOption.label);
        }
    }, [scaleOption]);

    return(
        <>
            <div id="seq-id-wrap">
                <div className="grid">
                    {pattern.map((row, y) => (
                        <div key={`row-wrap-${y}`} className="row">
                            <div
                                key={y}
                                style={{ display: "flex", justifyContent: "center" }}
                            >
                                {row.map((value, x) => (
                                    <Square
                                        key={x}
                                        active={activeColumn === x}
                                        selected={pattern[y][x] === 1 ? "#a8a8a8" : "white"}
                                        onClick={() => {
                                            setPattern({ y, x, value });
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div id='toggle-scale-wrap'>
                    <Play toggle={toggle} 
                        playState={playState}    
                    />
                    <ScaleSelector setScaleOption={setScaleOption}
                        scale={scale}
                    />
                </div>
                <Tempo tempo={tempo} setTempo={setTempo}/>
            </div>
        </>
    );
}
export default Sequencer;