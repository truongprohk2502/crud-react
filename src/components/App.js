import React, { Component } from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddNewForm from './AddNewForm';
import users from '../data/users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingAddForm: false,
      dataUsers: users,
      editingIndex: 1
    }
  }

  toggleShowingFormStatus = () => {
    this.setState({ isShowingAddForm: !this.state.isShowingAddForm });
  }

  search = (text) => {
    let arr = [];
    if (text !== '') {
      this.state.dataUsers.forEach(item => {
        if (item.name.toLowerCase().indexOf(text) !== -1) {
          arr.push(item);
        }
      });
    } else {
      arr = [...JSON.parse(localStorage.getItem('users'))];
      console.log(arr);
    }
    this.setState({ dataUsers: arr });
  }

  add = (user) => {
    let arr = [...this.state.dataUsers];

    let id = arr[arr.length - 1].id + 1;
    while (true) {
      let f = true;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
          f = false;
          id++;
          break;
        }
      }
      if (f) {
        break;
      }
    }

    user.id = id;
    arr.push(user);

    localStorage.removeItem('users');
    localStorage.setItem('users', JSON.stringify(arr));

    this.setState({ dataUsers: arr });
  }

  edit = (user) => {
    let arr = [...this.state.dataUsers];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === user.id) {
        arr[i].name = user.name;
        arr[i].phone = user.phone;
        arr[i].role = user.role;
        break;
      }
    }

    localStorage.removeItem('users');
    localStorage.setItem('users', JSON.stringify(arr));

    this.setState({ dataUsers: arr });
  }

  delete = (id) => {
    let arr = [...this.state.dataUsers];
    arr = arr.filter(item => item.id !== id);

    localStorage.removeItem('users');
    localStorage.setItem('users', JSON.stringify(arr));

    this.setState({ dataUsers: arr });
  }

  setUserLocalStorage = () => {
    if (localStorage.getItem('users') === null) {
      localStorage.setItem('users', JSON.stringify(this.state.dataUsers));
    }
  }


  componentDidMount() {
    if (localStorage.getItem('users') !== null) {
      this.setState({ dataUsers: JSON.parse(localStorage.getItem('users')) });
    }
  }


  render() {
    this.setUserLocalStorage();
    return (
      <div>
        <Header />
        <div className="container">
          <SearchForm search={(text) => this.search(text)} isShowingAddForm={this.state.isShowingAddForm} toggleShowingFormStatus={this.toggleShowingFormStatus} />
          <hr className="w-100" />
          <div className="row">
            <TableData delete={(id) => this.delete(id)} edit={(user) => this.edit(user)} users={this.state.dataUsers} />
            <AddNewForm add={(user) => this.add(user)} isShowingAddForm={this.state.isShowingAddForm} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
