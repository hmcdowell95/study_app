import React, {Component} from 'react';

class NoteCardInput extends Component {
    state = {
        term: "",
        definition: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let note = {
            term: this.state.term,
            definition: this.state.definition,
            subjectId: this.props.subjectId
        }
        this.props.add(note)
        this.setState({
            term: "",
            definition: ""
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    Term: <input 
                    type="text"
                    name="term"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.term} /><br/>
                    Definition: <input
                    type="text"
                    name="definition"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.definition} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default NoteCardInput