import React from 'react';
import NoteCard from './notecard';
import NavBar from '../../containers/NavBar';

const NoteCards = (props) => 
<div>
    <NavBar/>
    <div class="grid">{props.notes.map(n => <NoteCard key={n.id} note={n} />)}</div>
</div>

export default NoteCards