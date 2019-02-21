import React, { Component } from 'react';

export default class Application extends Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submitApplicationForm = this.submitApplicationForm.bind(this);
  
    };
  
	handleChange(element) {
		let target = element.target
		this.setState((state) => {
			let fields = state.fields;
			fields[target.name] = target.value;
			return { fields }
		});

	}
  
    submitApplicationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["title"] = "";
            fields["firstname"] = "";
            fields["lastname"] = "";
            fields["email"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
    }
  
    validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["title"]) {
            formIsValid = false;
            errors["title"] = "*Please enter the title.";
        }

        if (!fields["firstname"]) {
            formIsValid = false;
            errors["firstname"] = "*Please enter your firstname.";
        }
  
        if (!fields["lastname"]) {
            formIsValid = false;
            errors["lastname"] = "*Please enter your lastname.";
        }
        
        if (!fields["email"]) {
			console.log(this.state.fields.email);
            formIsValid = false;
            errors["email"] = "*Please enter your email-ID.";
        }
  
        if (typeof fields["email"] !== "undefined") {
          //regular expression for email validation
        	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        	if (!pattern.test(fields["email"])) {
        		formIsValid = false;
    			errors["email"] = "*Please enter valid email-ID.";
        	}
        }
  
        if (!fields["password"]) {
        	formIsValid = false;
        	errors["password"] = "*Please enter your password.";
        }
  
        if (typeof fields["password"] !== "undefined") {
        	if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            	formIsValid = false;
            	errors["password"] = "*Please enter secure and strong password.";
        	}
        }
  
        this.setState({
        	errors: errors
		});
		
        return formIsValid;
    }
  
    render() {
        return (
            <div className="form_wrap">
                <h3>Application Page</h3>
                <form method="post"  onSubmit= {this.submitApplicationForm} >
                    <label>Title</label>
					<select id="title" name="title" onChange={this.handleChange} >
						<option value="">Select Title</option>
						<option value="mr">Mr</option>
						<option value="mrs">Mrs</option>
						<option value="miss">Miss</option>
					</select>
                    {/* <input type="text" name="title" value={this.state.fields.title} onChange={this.handleChange} /> */}
                    <div className="errorMsg"> { this.state.errors.title } </div>
                    <label>First Name</label>
                    <input type="text" name="firstname" value={this.state.fields.firstname} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.firstname}</div>
                    <label>Last Name</label>
                    <input type="text" name="lastname" value={this.state.fields.lastname} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.lastname}</div>
                    <label>Email ID:</label>
                    <input type="text" name="email" value={this.state.fields.email} onChange={this.handleChange}  />
                    <div className="errorMsg">{this.state.errors.email}</div>
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.password}</div>
                    <input type="submit" className="button"  value="Apply Now"/>
                </form>
            </div>
        );
    }
}  