import React from 'react';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(e) {
        this.props.userproperty(e.target.value)
    }

    render() {
        return (
            <div class="form-group">
                <label for={this.props.labelName}>{this.props.labelName}</label>
                <input type={this.props.inputType} id={this.props.id} onChange={this.changeHandler}
                    class="form-control form-control-sm" aria-describedby="emailHelp" placeholder={this.props.labelName} />
            </div>
        )
    }
}
export default RegisterForm;