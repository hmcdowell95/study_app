import React from 'react';

const Instructions = () => 
<div style={{textAlign: "left"}}>
    <h2>Instructions</h2>
    <ul>From the Subject page you can:
        <li>Create a new Subject</li>
        <li>Click on an existing subject</li>
    </ul>
    <ul>From a Subject Page you can:
        <li>Create a new NoteCard for that Subject</li>
        <li>Start using NoteCards for that Subject. You only see the term. When you click on the term it shows the definition. Then click again to hide it.</li>
        <li>Side note: I plan on putting a reverse option in where you see the definition then the term.</li>
        <li>Click the edit subject link on the subject to change the name or delete the subject</li>
        <li>Click on the edit buttons on each NoteCard to edit or delete that specific NoteCard</li>
    </ul>
    <ul>From the All NoteCards link to the notecards page:
        <li>It shows ALL NoteCards. Just a fun feature. The NoteCards all work the same.</li>
    </ul>
</div>

export default Instructions