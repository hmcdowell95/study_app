import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class EditNoteCard extends Component {
    state = {
        id: parseInt(this.props.match.params.id),
        term: "",
        definition: "",
        redirect: null
    }

    renderNote = () => {
        return this.props.notes.find(x => x.id === parseInt(this.props.match.params.id))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        let x = {id: this.state.id, term: this.state.term, definition: this.state.definition}
        this.props.edit(x)
        this.setState({redirect: "/subjects"})
    }

    onDelete = () => {
        this.props.delete(this.state.id)
        this.setState({redirect: "/subjects"})
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return(
        <div>Edit NoteCard: {this.renderNote() ? this.renderNote().term: null}
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    term: <input 
                    type="text"
                    name="term"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.term} /><br/>
                    definition: <input
                    type="text"
                    name="definition"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.definition} />
                    <input type="submit" />
                </form>
                <button onClick={() => this.onDelete()} >Delete</button>
            </div>
        )
    }
}

export default EditNoteCard