import React, {Component} from 'react';

class NoteCardInput extends Component {
    state = {
        term: "",
        definition: ""
    }

    render() {
        return(
            <div>
                <form>
                    <input 
                    type="text"

                    value={this.state.term} />
                    <input
                    type="text"

                    value={this.state.definition} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default NoteCardInput