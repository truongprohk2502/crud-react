import React, { Component } from 'react';
import User from './User';

class TableData extends Component {
    mapUsers = () => {
        let c = 0;
        return this.props.users.map((value, key) =>{
            c++;
            return <User delete={(id) => this.props.delete(id)} edit={(user) => this.props.edit(user)} stt={c} key={key} data={value} />
        });
    }

    render() {
        return (
            <div className="col">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Role</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mapUsers()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;