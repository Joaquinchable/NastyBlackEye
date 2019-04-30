import React, { Component } from "react";
import { connect } from 'react-redux';
import FormField from '../utlis/Form/formfield';
import { update, generateData, isFormValid } from '../utlis/Form/formActions';
import {loginUser} from'../../actions/user_actions';
import {withRouter} from 'react-router-dom';
 
class LoginBox extends Component {
  state = {
    formError: false,
    formSucces: '',
    formdata: {
      email: {

        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: ' email'
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
          placeholder: 'password'
        },
        validation: {
          required: true,

        },
        valid: false,
        touched: false,
        validationMessage: ''
      }


    }
  }



  updateForm = (element) => {
    const newFormdata = update(element, this.state.formdata, 'login');
    this.setState({
      formError: false,
      formdata: newFormdata
    })
 
  }


  submitForm = (event) => {

    event.preventDefault();
    
    let dataToSubmit = generateData(this.state.formdata, 'login');
    let  formIsValid = isFormValid(this.state.formdata, 'login');

    if(formIsValid){
      this.props.dispatch(loginUser(dataToSubmit)).then(response =>{
        if(response.payload.loginSuccess){
          console.log(response.payload);
          this.props.history.push('./home')

        }else{
          this.setState({
            formError: true
          })
        }
      })

    }else{
      this.setState({
        formError: true
      })
    }
     

  }

  render() {
    return (



      <div>
        <form onSubmit={(event) => this.submitForm(event)}>
          <FormField

            id={'email'}
            formdata={this.state.formdata.email}
            change={(element) => this.updateForm(element)}

          />
          <FormField

            id={'password'}
            formdata={this.state.formdata.password}
            change={(element) => this.updateForm(element)}

          />
            {this.state.formError ?
                   <div>
                 checa la data
                     </div>
                         :null}
         
          <button className="login-btn" onClick={(event) => this.updateForm(event)}>

          LOG IN
          
          </button>

        </form>
      </div>




    );
  }
}

export default connect()(withRouter(LoginBox));
