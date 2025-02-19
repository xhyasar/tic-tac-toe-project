import {useState} from 'react';

export default function Player({initialName='Player', symbol='X : O', isActive='false'}){
    console.log(initialName, symbol, isActive);


    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    function handleEditClick(){
        setIsEditing((editing) => !editing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName= <span className="player-name" >{playerName}</span>;
    // let btnCaption = 'Edit';

    if (isEditing){
        editablePlayerName=<input type="text" required value ={playerName} onChange={handleChange}/>;
        //btnCaption='Save';
    }
    return( <li className={isActive ? 'active' : undefined}>
          <span className="player">
              {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
          </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
    );
}