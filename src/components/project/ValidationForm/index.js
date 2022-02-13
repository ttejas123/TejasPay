import React, {useState} from 'react';
import './style.css'
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardBody } from 'reactstrap';
import ReactFlagsSelect from 'react-flags-select';
import 'react-phone-input-2/lib/material.css'
import PhoneInput from 'react-phone-input-2'
const ValidationSchemaExample = () => {
    const [value, setValue] = useState('')
    const [selected, setSelected] = useState('IN')
    const [phoneNum, setPhoneNum] = useState(true)
    const [name, setName]= useState('');
    const [Errors, setError] = useState({
      phone: false,
      name: false
    })

    function containsSpecialChars(str) {
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      return specialChars.test(str);
    }
  return(
    <CardBody className="col-12 col-lg-11" style = {{display: "flex",
    flexDirection: "column",
    justifyContent: "center"}}>
            <Form>
              <div id="errorPho" className='mb-4'>
              <PhoneInput
                
                country={'in'}
                value={value}
                isValid={phoneNum}
                placeholder="Enter mobile Number"
                specialLabel="Phone no"
                inputStyle={{
                  padding : "0.9rem 0 0.9rem 5rem",
                  width : "100%"
                }}
                
                onChange={phone => setValue(phone)}
              />
              <div className={Errors.phone ? ("text-danger ErrorMsg") : ("d-none")}>Phone Number Should not be empty</div>
              </div>
              <ReactFlagsSelect
                className='mb-4'
                selected={selected}
                onSelect={code => {
                  setSelected(code)}}
              />
              <FormGroup className="pb-4">
                <Label className='lableClass' for="exampleEmail">Enter Name</Label>
                <Input onChange={(e) => {

                  setError({
                    ...Errors,
                    name: containsSpecialChars(e.target.value)
                  })
                }} className='p-3 inputBox rounded' type="email" name="email" id="exampleEmail" placeholder="Enter Your Name" />
                <div className={Errors.name ? ("text-danger ErrorMsg") : ("d-none")}>Special Charector Not Allowed & Not Empty</div>
              </FormGroup>
              <FormGroup className="pb-4">
                <Label className='lableClass' for="exampleEmail">Email Address</Label>
                <Input className='p-3 inputBox' type="email" name="email" id="exampleEmail" placeholder="Enter Your Email" />
              </FormGroup>
              <FormGroup>
                <Input className='p-4 textBoxStyle' rows="4" cols="50" type="textarea" placeholder="Message" name="text" id="exampleText" />
              </FormGroup>
              <Button size="lg" className="ButtonStyle" block color="primary" onClick={() => { 
                if(value.length < 12 && name.length < 2){
                    setError({
                      ...Errors,
                      name: true,
                      phone: true
                    })
                }

                if(value.length < 12){

                    setError({
                      ...Errors,
                      phone: true
                    })

                    setPhoneNum(false)
                }

                if(name.length < 2){
                   setError({
                      ...Errors,
                      name: true
                    })
                }

               
              }}>Submit</Button>
            </Form>
    </CardBody>
 )};

 export  default ValidationSchemaExample