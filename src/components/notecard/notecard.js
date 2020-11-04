import React, {Component} from 'react';
import { Redirect} from "react-router-dom";

class NoteCard extends Component {

    state = {definition: "", redirect: null}

    handleChange = () => {if (this.state.definition === "")
        {this.setState({...this.state, definition: this.props.note.definition})} 
        else {this.setState({...this.state, definition: ""})}
    }

    onEdit = () => this.setState({redirect: `/notecards/${this.props.note.id}`})

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return(
            <div style={{backgroundColor: "orange", margin: "auto", width: "400px"}}>
                <h3 onClick={() => this.handleChange()}>{this.props.note.term}</h3>
                <p>{this.state.definition}</p>
                <button onClick={() => this.onEdit()}>EDIT</button>
            </div>
        )
    }
}

export default NoteCard