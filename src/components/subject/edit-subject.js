import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class EditSubject extends Component {
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
        let x = {id: this.state.id, name: this.state.name}
        this.props.edit(x)
        this.setState({redirect: "/subjects"})
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    Edit Subject: <input 
                    type="text"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.name} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default EditSubject