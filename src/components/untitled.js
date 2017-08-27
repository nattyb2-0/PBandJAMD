getUserInfo(id) {
      fetch(`/api/user/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      })
      .then(result => result.json())
      .then((result) => {
        console.log(result)
        this.setState({
          userInfo: result,
        });
      })



       onSuccessfulLogIn(user) {
    this.alertInfo('Youre logged in!');
    console.log(user);
    console.log(user.id)
    this.setState({
      disabled: '',
      currentUser: user.id,
      buttonText: 'My Account',
      login: {
        username: '',
        password: '',
        loggedIn: true,
      },
    });
    this.getUserInfo(this.state.currentUser);
  }
