import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown,
  } from "reactstrap";
  // core components
  import UserHeader from "components/Headers/UserHeader.js";
  import { useState } from "react";
  import axios from "axios";
  
  const AddPurchased = () => {
    const [formData, setFormData] = useState();
  
    function handleInputChange(e) {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
        //username : value
      }));
    }
    function handleDropdownChange(value) {
     
      setFormData((prevState) => ({
        ...prevState,
        sale_type: value,
      }));
    }
    async function handleSubmit(e) {
      // to prevent page from refreshing
      e.preventDefault();
      console.log(formData);
      try {
        //post
        const response = await axios.post("http://localhost:8080/api/purchased/purchasedInfo", formData);
        // //get
        // const response = await axios.get("http://localhost:8080/api/buyer/buyerInfo");
        // //patch
        // const response = await axios.put(`http://localhost:8080/api/buyer/buyerInfo/${buyerid}`, formData);
        // //delete
        // const response = await axios.delete(`http://localhost:8080/api/buyer/buyerInfo/${buyerid}`);
        if (response) {
          alert("Purchased  data added");
        }
  
      } catch (error) {
        console.error("Error >>", error.message);
      }
    }
  
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Buyers</h3>
                    </Col>
                    <Col className="text-right" xs="4">
  
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Purchased information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Seller Id
                            </label>
  
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Seller Id"
                              type="number"
                              name="seller_id"
                              onChange={handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Buyer Id
                            </label>
  
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Buyer Id"
                              type="number"
                              name="buyer_id"
                              onChange={handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Purchased Date
                            </label>
  
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder="Purchased Date"
                              type="text"
                              name="purchased_date"
                              onChange={handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        
                      </Row>
                     
                    </div>
  
                    
                    <hr className="my-4" />
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => handleSubmit(e)}
                    // size="sm"
                    >
                      Save
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default AddPurchased;
  