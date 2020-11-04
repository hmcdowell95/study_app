import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class EditNoteCard extends Component {
    state = {
        id: parseInt(this.props.match.params.id),
        name: "",
        redirect: null
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        // let x = {id: this.state.id, name: this.state.name}
        // this.props.edit(x)
        // this.setState({redirect: "/subjects"})
    }

    // onDelete = () => {
    //     this.props.delete(this.state.id)
    //     this.setState({redirect: "/subjects"})
    // }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    Edit NoteCard: <input 
                    type="text"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.name} />
                    <input type="submit" />
                </form>
                <button onClick={() => this.onDelete()}>Delete</button>
            </div>
        )
    }
}

export default EditNoteCard