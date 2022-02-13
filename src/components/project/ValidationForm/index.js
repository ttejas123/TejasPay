import React, {useState} from 'react';
import './style.css'
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardBody } from 'reactstrap';
import ReactFlagsSelect from 'react-flags-select';
import 'react-phone-input-2/lib/material.css'
import PhoneInput from 'react-phone-input-2'
const ValidationSchemaExample = () => {
    const [value, setValue] = useState()
  return(
    <>
    <CardBody className="w-100">
            <Form>
              <PhoneInput
                className='mb-4'
                country={'us'}
                value={value}
                placeholder="Enter mobile Number"
                specialLabel="Phone no"
                inputStyle={{
                  padding : "0.9rem 0 0.9rem 5rem",
                  width : "100%"
                }}
                
                onChange={phone => setValue(phone)}
              />
              <FormGroup className="pb-4">
                <Label className='lableClass' for="exampleEmail">Enter Name</Label>
                <Input className='p-3 inputBox rounded' type="email" name="email" id="exampleEmail" placeholder="Enter Your Name" />
              </FormGroup>
              <FormGroup className="pb-4">
                <Label className='lableClass' for="exampleEmail">Email Address</Label>
                <Input className='p-3 inputBox' type="email" name="email" id="exampleEmail" placeholder="Enter Your Email" />
              </FormGroup>
              <FormGroup>
                <Input className='p-4 textBoxStyle' rows="4" cols="50" type="textarea" placeholder="Message" name="text" id="exampleText" />
              </FormGroup>
              <Button size="lg" className="ButtonStyle">Submit</Button>
            </Form>
    </CardBody>
   </>
 )};

 export  default ValidationSchemaExample