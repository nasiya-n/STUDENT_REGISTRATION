import React,{Component} from 'react';
import {Card,Form,Col,Button} from 'react-bootstrap';
import { render } from 'react-dom';

function SimpleForm(props)
{
return(
    <form>
   
  <div class="container register">
      <div class="form-group">
                     <div class="col-md-6 register-right">
      <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <h1 class="register-heading"><u><font color="blue">STUDENT<br/>INFORMATION FORM</font></u></h1>
              <div class="row register-form">
                  <div class="col-md-6">
                      <div class="form-group">
                      <label for="firstName" class="col-sm-3 control-label"><h2>STUDENT NAME :</h2></label>
                          <input type="text" class="form-control" placeholder="Studentname"  pattern="[a-zA-Z\s]+" required />
                      </div>
                      <div class="form-group">
                    <label for="birthDate" class="col-sm-3 control-label"><h2>DATE OF BIRTH :</h2></label> 
                    <div class="col-sm-9">
                        <input type="date" id="birthDate" class="form-control"/>
                    </div>
                </div>
                 </div>      
                  
                      <div class="form-group">
                      <label for="Class" class="col-sm-3 control-label"><h2>CLASS :</h2></label>
                          <select class="form-control">
                          <option class="hidden"  selected disabled>Please select your Class</option>
                              <option class="hidden"  selected disabled>Class</option>
                                                <option >I</option>
                                                <option> II</option>                                  
                                                <option> III</option>
                                                <option >IV </option>
                                                <option> V </option>
                                                <option >VI </option>
                                                <option >VII </option>
                                                <option >VIII</option>
                                                <option >IX</option>
                                                <option> X</option>
                                                <option >XI</option>
                                                <option >XII</option>   
          </select>
                      </div>
                      <div class="form-group">
                      <label for="Division" class="col-sm-3 control-label"><h2>DIVISION :</h2></label>
                      <select class="form-control">
                          <option class="hidden"  selected disabled>Please select your Divisionn</option>
                              <option class="hidden"  selected disabled>Division</option>
                                                <option >A</option>
                                                <option> B</option>                                  
                                                <option> C</option>
                                            </select>
                      </div>
                      <div class="form-group">
                          <div class="maxl">
                          <label for="gender" class="col-sm-3 control-label"><h2>GENDER :</h2></label>
                              <label class="radio inline"> 
                                  <input type="radio" name="gender" value="male" checked/>
                                  <span> Male </span> 
                              </label>
                              <label class="radio inline"> 
                                  <input type="radio" name="gender" value="female"/>
                                  <span>Female </span> 
                              </label>
                          </div>
                      </div>
                      <input type="submit" class="btnRegister"  value="View"/>
                      <input type="submit" class="btnRegister"  value="Register"  />
                  </div>
              </div>
          </div>
         </div>
     </div>
     </div>
     </form>
      );
    }

export default SimpleForm;