import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import NoteCardContainer from '../../containers/notecard-container';

class EditSubject extends Component {
    state = {
        id: parseInt(this.props.match.params.id),
        name: "",
        redirect: null
    }

    renderSubject = () => {
        return this.props.subjects.find(x => x.id === parseInt(this.props.match.params.id))
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let x = {id: this.state.id, name: this.state.name}
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
            <div>
                Currently: {this.renderSubject() ? this.renderSubject().name: null}
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    Edit Subject: <input 
                    type="text"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.name} />
                    <input type="submit" />
                </form>
                <button onClick={() => this.onDelete()}>Delete</button>
                <NoteCardContainer subjectId={this.state.id} router={this.props.match.url} />
            </div>
        )
    }
}

export default EditSubject