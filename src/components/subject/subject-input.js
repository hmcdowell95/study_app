import React, {Component} from 'react';

class SubjectInput extends Component {
    state = {
        name: ""
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.add(this.state)
        this.setState({name: ""})
    }

    render() {
        return(
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    New Subject: <input 
                    type="text"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.name} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default SubjectInput