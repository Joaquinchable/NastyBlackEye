import React, { Component } from "react";
import { connect } from 'react-redux';
import FormField from '../utlis/Form/formfield';
import { update, generateData, isFormValid } from '../utlis/Form/formActions';
import { registerUser } from '../../actions/user_actions';
import HeaderInicio from './../Layout/HeaderInicio';


class Register extends Component {

  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      name: {
        element: 'input',
        value: '',
        config: {
          name: 'name_input',
          type: 'text',
          placeholder: 'Enter your name'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      lastname: {
        element: 'input',
        value: '',
        config: {
          name: 'lastname_input',
          type: 'text',
          placeholder: 'Enter your lastname'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your email'
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: 'Enter your password'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      confirmPassword: {
        element: 'input',
        value: '',
        config: {
          name: 'confirm_password_input',
          type: 'password',
          placeholder: 'Confirm your password'
        },
        validation: {
          required: true,
          confirm: 'password'
        },
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  }

  updateForm = (element) => {
    const newFormdata = update(element, this.state.formdata, 'register');
    this.setState({
      formError: false,
      formdata: newFormdata
    })
  }

  submitForm = (event) => {
    event.preventDefault();

    let dataToSubmit = generateData(this.state.formdata, 'register');
    let formIsValid = isFormValid(this.state.formdata, 'register')

    if (formIsValid) {
      this.props.dispatch(registerUser(dataToSubmit))
        .then(response => {
          if (response.payload.success) {
            this.setState({
              formError: false,
              formSuccess: true
            });
            setTimeout(() => {
              this.props.history.push('/RegisterLogin');
            }, 3000)
          } else {
            this.setState({ formError: true })
          }
        }).catch(e => {
          this.setState({ formError: true })
        })
    } else {
      this.setState({
        formError: true
      })
    }
  }

  render() {
    return (
      <div>
        <HeaderInicio />
        <div className="header-login">Sign Up</div>
        <section>
          <div className="box">
            <form onSubmit={(event) => this.submitForm(event)}>
              <div className="right">
                <h2>Datos Personales</h2>

                <FormField
                  id={'name'}
                  formdata={this.state.formdata.name}
                  change={(element) => this.updateForm(element)}
                />
                <FormField
                  id={'lastname'}
                  formdata={this.state.formdata.lastname}
                  change={(element) => this.updateForm(element)}
                />
                <FormField
                  id={'email'}
                  formdata={this.state.formdata.email}
                  change={(element) => this.updateForm(element)}
                />

              </div>


              <div className="left">
                <h2> Contraseña</h2>

                <FormField
                  id={'password'}
                  formdata={this.state.formdata.password}
                  change={(element) => this.updateForm(element)}
                />

                <FormField
                  id={'confirmPassword'}
                  formdata={this.state.formdata.confirmPassword}
                  change={(element) => this.updateForm(element)}
                />

                <div>
                  {this.state.formError ?
                    <div className="error_label">
                      Please check your data
                                    </div>
                    : null}
                  <button className="login-btn" onClick={(event) => this.submitForm(event)}>
                    Create an account
                                </button>
                </div>
              </div>
            </form>
          </div>
        </section >




      </div >
    );
  }
}

export default connect()(Register);



