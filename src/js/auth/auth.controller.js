class AuthCtrl {
    constructor(User, $state) {
        'ngInject';

        this._User = User;
        this._$state=$state;
        this.title = $state.current.title;
        this.authType = $state.current.name.replace('app.', '');
    }
    submitForm() {
        this.isSubmitting = true;
        //console.log(this.formData);
        this._User.attemptAuth(this.authType, this.formData)
            .then(
                (res) => {
                    this.isSubmitting = false;
                    this._$state.go('app.home');
                },
                (err) => {
                    //debugger;
                    //console.log(err);
                    this.isSubmitting = false;
                    console.log(err.data.errors);
                    this.errors = err.data.errors;
                }
            );
    }
}

export default AuthCtrl;