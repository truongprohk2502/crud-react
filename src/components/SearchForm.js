import React, { Component } from 'react';

class SearchForm extends Component {
    
    searchText = () => {
        this.props.search(document.querySelector('#fSearch').value);
    }

    displayButton = () => {
        if(this.props.isShowingAddForm) {
            return <button onClick={() => this.props.toggleShowingFormStatus()} className="btn btn-block btn-secondary mb-2">Close add form</button>;
        } else{
            return <button onClick={() => this.props.toggleShowingFormStatus()} className="btn btn-block btn-success mb-2">Add new user</button>;
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-8">
                    <div className="form-inline">
                        <input type="text" className="form-control w-50" id="fSearch" aria-describedby="helpId" placeholder="Enter name need to search..." />
                        <button onClick={() => this.searchText()} type="submit" className="btn btn-info ml-2">Search</button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                {this.displayButton()}
                </div>
            </div>
        );
    }
}

export default SearchForm;