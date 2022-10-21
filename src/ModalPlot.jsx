import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Label,
    Form,
    FormGroup,
  } from 'reactstrap';


  const ModalPlot = () => {

  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);

  const changeBackdrop = (e) => {
    let { value } = e.target;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  };

  const changeKeyboard = (e) => {
    setKeyboard(e.currentTarget.checked);
  };

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <Label for="backdrop">Backdrop value</Label>{' '}
          <Input
            type="select"
            name="backdrop"
            id="backdrop"
            onChange={changeBackdrop}
          >
            <option value="true">true</option>
            <option value="false">false</option>
            <option value="static">&ldquo;static&ldquo;</option>
          </Input>
        </FormGroup>
        <FormGroup className="mx-2" check>
          <Label check>
            <Input
              type="checkbox"
              checked={keyboard}
              onChange={changeKeyboard}
            />{' '}
            Keyboard
          </Label>
        </FormGroup>{' '}
        <Button color="dark" onClick={toggle}>
          Ver Gráfico
        </Button>
      </Form>
      <Modal
        isOpen={modal}
        toggle={toggle}
        
        backdrop={backdrop}
        keyboard={keyboard}
      >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          aca va el cuerpo de la modal
        </ModalBody>
        <ModalFooter>
          <Button color="dark" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="dark" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    )
}

export default ModalPlot;