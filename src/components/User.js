import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditting: false
        }
    }

    showEditForm = () => {
        this.setState({ isEditting: true });
    }

    editUser = () => {
        let id = this.props.data.id;
        let name = document.querySelector('#fName').value;
        let phone = document.querySelector('#fPhone').value;
        let role = document.querySelector('#fRole').value;
        let user = { id, name, phone, role };
        this.props.edit(user);
        this.setState({ isEditting: false });
    }

    render() {
        if (this.state.isEditting) {
            return (
                <tr>
                    <th scope="row">{this.props.stt}</th>
                    <td><input id="fName" type="text" className="form-control" defaultValue={this.props.data.name} /></td>
                    <td><input id="fPhone" type="text" className="form-control" defaultValue={this.props.data.phone} /></td>
                    <td>
                        <select id="fRole" defaultValue={this.props.data.role} className="form-control">
                            <option value="">--Select role--</option>
                            <option value="goalkeeper">Goalkeeper</option>
                            <option value="defender">Defender</option>
                            <option value="attacker">Attacker</option>
                        </select>
                    </td>
                    <td>
                        <button onClick={() => this.editUser()} type="button" className="btn btn-success btn-sm ml-1"><i className="fa fa-sign-out" /> Save</button>
                    </td>
                </tr>
            );
        }
        return (
            <tr>
                <th scope="row">{this.props.stt}</th>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.phone}</td>
                <td>{this.props.data.role}</td>
                <td>
                    <button onClick={() => this.showEditForm()} type="button" className="btn btn-warning btn-sm"><i className="fa fa-pencil-square-o" /> Edit</button>
                    <button onClick={(id) => this.props.delete(this.props.data.id)} type="button" className="btn btn-danger btn-sm ml-1"><i className="fa fa-trash-o" /> Delete</button>
                </td>
            </tr>
        );
    }
}

export default User;