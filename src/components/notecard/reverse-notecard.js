import React, {Component} from 'react';
import { Redirect} from "react-router-dom";

class ReverseCard extends Component {

    state = {term: "", redirect: null}

    handleChange = () => {if (this.state.term === "")
        {this.setState({...this.state, term: this.props.note.term})} 
        else {this.setState({...this.state, term: ""})}
    }

    onEdit = () => this.setState({redirect: `/subjects/notecards/${this.props.note.id}/edit`})

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return(
            <div style={{backgroundColor: "orange", margin: "auto", width: "400px"}}>
                <h3 onClick={() => this.handleChange()}>{this.props.note.definition}</h3>
                <p>{this.state.term}</p>
                <button onClick={() => this.onEdit()}>EDIT</button>
            </div>
        )
    }
}

export default ReverseCard