import React, { Component } from 'react';

class AddNewForm extends Component {

    submitAddUser = (e) => {
        e.preventDefault();
        const name = document.querySelector('#fUser').value.trim();
        const phone = document.querySelector('#fPhone').value.trim();
        const role = document.querySelector('#fRole').value.trim();
        if (name !== '' && phone !== '' && role !== '') {
            document.querySelector('#addForm').reset();
            this.props.add({ name, phone, role });
        }
    }

    displayAddForm = () => {
        if (this.props.isShowingAddForm) {
            return (
                <div className="col">
                    <div className="card">
                        <h5 className="card-header">Add new user to system</h5>
                        <form id="addForm" className="card-body">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Username" id="fUser" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Phone" id="fPhone" />
                            </div>
                            <div className="form-group">
                                <select className="form-control" id="fRole">
                                    <option value="">--Select role--</option>
                                    <option value="goalkeeper">Goalkeeper</option>
                                    <option value="defender">Defender</option>
                                    <option value="attacker">Attacker</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button onClick={(e) => this.submitAddUser(e)} className="btn btn-block btn-primary">Add new</button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.displayAddForm()}
            </div>
        );
    }
}

export default AddNewForm;