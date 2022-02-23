import React from 'react';
import './Definitions.css'

const Definitions = ({ word, meanings }) => {
    return (
        <div className='meanings'>
            {word === "" ?
                <span className='subTitle'>Start by typing a word in search</span> :
                (
                    meanings.map((obj) => (
                        obj.meanings.map((meaning) => (
                            meaning.definitions.map((def) => (
                                <div className='singleMeaning' style={{ backgroundColor: "white", color: "black" }}>
                                    <b>{def.definition}</b>
                                    {
                                        def.example && (<span><b>Example: </b>{def.example}</span>)
                                    }
                                    {
                                        def.synonyms && (
                                            <span>
                                                <b>Synonyms: </b>
                                                {def.synonyms.map((synonym) => `${synonym}, `)}
                                            </span>
                                        )
                                    }
                                </div>
                            ))
                        ))
                    ))
                )
            }
        </div>
    )
}

export default Definitions;