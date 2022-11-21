import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody, Col, Label, Modal, ModalHeader, ModalBody, ModalFooter, Row } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
/* import MapboxTest from './MapboxTest'; */
/* import RibbonPlot from './RibbonPlot'; */
import SurfacePlot2 from './SurfacePlot2';
/* import GeojsonPolygon from './GeojsonPolygon'; */
import GeojsonPolygon2 from './GeojsonPolygon2';
/* import './css/TemplateBasic.css '; */
/* import es from "date-fns/locale/es"; */

const TemplateBasic = () => {

    useEffect(() => {
        document.title = 'Pilas'
      }, [])

    const [date, setDate] = useState(new Date());

    const handleCalendarClose = () => console.log("Calendar closed");
    const handleCalendarOpen = () => console.log("Calendar opened");

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.90)'
            }}
        >
            <Row>
                <Col>
                    <Card className="text-white"
                        style={{
                            display: 'flex',
                            backgroundColor: '#000',
                            border: '1px solid #FF0000 !important',
                            borderRadius: '0.25rem',
                            fontSize: '11px',
                        }}
                    >
                        <CardBody className="body-header"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: '#333',
                                backgroundClip: 'border-box',
                                border: '1px solid #FF0000 !important',
                            }}
                        >
                            <Row
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    minWidth: 0,
                                    wordWrap: 'break-word',
                                    backgroundColor: '#333',
                                    backgroundClip: 'border-box',
                                    border: '1px solid #FF0000 !important',
                                    borderRadius: '0.25rem',
                                    fontSize: '11px',
                                    color: '#FFFFFF',
                                }}
                            >
                                <Row
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        borderRadius: '20px',
                                        /* border: '1px solid #FF0000' */
                                    }}
                                >
                                    <Col
                                    /* sm={{ size: 1, offset: 5 }}  */
                                    >
                                        <Label style={{ marginTop: '12px' }}>FECHA INICIO</Label>
                                        <DatePicker
                                            selected={date}
                                            onChange={(date) => setDate(date)}
                                            onCalendarClose={handleCalendarClose}
                                            onCalendarOpen={handleCalendarOpen}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText="Fecha Inicio"
                                            showDisabledMonthNavigation
                                            showMonthDropdown
                                            locale="es"
                                        />
                                    </Col>
                                </Row>
                            </Row>
                            <Row
                                style={{
                                    marginTop: '10px',
                                    color: 'transparent'
                                }}
                            >
                                <Col sm={{ size: 2, offset: 5 }}>
                                    <Button onClick={toggle}
                                        style={{
                                            width: '100%',
                                            backgroundColor: '#ef3937',
                                            /* border: '#ef3937', */
                                            color: 'white',
                                            boxShadow: '2px 3px rgba(0, 0, 0, 1)',
                                        }}
                                    >
                                        Ver Gráfico
                                    </Button>
                                    <Modal isOpen={modal} toggle={toggle} size="xl" className='modal'
                                        style={{
                                            display: 'flex',
                                            textAlign: 'center',
                                            overflowY: 'hidden',
                                        }}
                                    >
                                        <ModalHeader
                                            toggle={toggle}
                                            /* close={closeBtn} */
                                            close={false}
                                            style={{
                                                display: 'flex',
                                                textAlign: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            Gráfico de Superficie Pilas
                                        </ModalHeader>
                                        <ModalBody>
                                            {/* <MapboxTest/> */}
                                            <SurfacePlot2 />
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button onClick={toggle}
                                                style={{
                                                    backgroundColor: '#ef3937',
                                                    color: 'white',
                                                    boxShadow: '2px 3px rgba(0, 0, 0, 1)',
                                                }}
                                            >
                                                Aceptar
                                            </Button>{' '}
                                            <Button color="secondary" onClick={toggle}>
                                                Cerrar
                                            </Button>
                                        </ModalFooter>
                                    </Modal>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

           {/*  <Container className="bg-light border"
                fluid>*/}
           <div>
                {/*  <Row> */}
                {/* <Col className="bg-light border" fluid> */}
                    {/* <GeojsonPolygon /> */}
                    <GeojsonPolygon2 />
                {/* </Col> */}
                {/* </Row> */}
            {/* </Container> */}
            </div>
        </div>


    );
}

export default TemplateBasic;