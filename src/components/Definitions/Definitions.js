import React from "react";
import "./Definitions.css";

const Definitions = ({ meanings, word, theme }) => {
    const audioUrl = meanings && meanings[0] && meanings[0].phonetics[0] ? meanings[0].phonetics[0].audio : "";

    return (
        <div className="meanings">
            {/* audio---------------------------- */}
            {meanings[0] && word && audioUrl && (
                <audio className="audioComp"
                    style={{ backgroundColor: theme ? "#fff" : "#000" }}
                    src={audioUrl}
                    controls
                >
                    Your browser does not support the audio element.
                </audio>
            )}
            {/* audio---------------------------- */}

            {word === "" ? (
                <span className="subTitle">Start by typing a word in search</span>
            ) : (
                meanings.map((obj) =>
                    obj.meanings.map((meaning) =>
                        meaning.definitions.map((def) => (
                            <div
                                className="singleMeaning"
                                style={{
                                    backgroundColor: theme ? "#3b5360" : "white",
                                    color: theme ? "white" : "black",
                                }}
                            >
                                {def.definition}
                                <hr className="diff" />
                                {def.example && (
                                    <span>
                                        <b>Example :</b> {def.example}
                                    </span>
                                )}
                                {def.synonyms && def.synonyms.length > 0 && (
                                    <span>
                                        <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                                    </span>
                                )}
                            </div>
                        ))
                    )
                )
            )}
        </div>
    );
};

export default Definitions;