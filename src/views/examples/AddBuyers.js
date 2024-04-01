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
import { useParams } from 'react-router-dom';

const AddBuyers = () => {
  const [formData, setFormData] = useState();
  const { buyer_id } = useParams();
  const [buyer, setBuyer] = useState();

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

  async function getBuyerById() {
    try {
      const response = await axios.get(`http://localhost:8080/api/buyer/getBuyerById/${buyer_id}`);
      console.log(response.data);
      setFormData(response.data.result);
    } catch (error) {
      console.log("Error >>", error.message);
    }
  }

  useEffect(() => {
    if(buyer_id){
      getBuyerById();
    }
   
  }, [buyer_id])

  async function handleSubmit(e) {
    // to prevent page from refreshing
    e.preventDefault();
    console.log(formData);
    if(buyer_id){
      try {
        //post
        const response = await axios.put(`http://localhost:8080/api/buyer/buyerUpdate/${buyer_id}`, formData);
        
        if (response) {
          alert("Buyer data updated");
        }
  
      } catch (error) {
        console.error("Error >>", error.message);
      }
  }else{
    try {
      //post
      const response = await axios.post("http://localhost:8080/api/buyer/buyerInfo", formData);
      // //get
      // const response = await axios.get("http://localhost:8080/api/buyer/buyerInfo");
      // //patch
      // const response = await axios.put(`http://localhost:8080/api/buyer/buyerInfo/${buyerid}`, formData);
      // //delete
      // const response = await axios.delete(`http://localhost:8080/api/buyer/buyerInfo/${buyerid}`);
      if (response) {
        alert("Buyer data added");
      }

    } catch (error) {
      console.error("Error >>", error.message);
    }
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
                    <h3 className="mb-0">Customer</h3>
                  </Col>
                  <Col className="text-right" xs="4">

                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Customer information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                           Customer Name
                          </label>

                          <Input
                            className="form-control-alternative"
                            value={formData.buyer_name}
                            id="input-username"
                            placeholder="Customer name"
                            type="text"
                            name="buyer_name"
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
                           Father Name
                          </label>

                          <Input
                            className="form-control-alternative"
                            id="input-username"
                            value={formData.father_name}
                            placeholder="Father name"
                            type="text"
                            name="father_name"
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
                           Date Of Birth
                          </label>

                          <Input
                            className="form-control-alternative"
                            id="input-username"
                            value={formData.date_of_birth}
                            placeholder="Gender"
                            type="text"
                            name="date_of_birth"
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
                           Gender
                          </label>

                          <Input
                            className="form-control-alternative"
                            value={formData.gender}
                            id="input-username"
                            placeholder="Gender"
                            type="text"
                            name="gender"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={formData.buyer_email}
                            id="input-email"
                            type="email"
                            name="buyer_email"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Phone Number
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            value={formData.buyer_phone_number}
                            placeholder="Phone Number"
                            type="number"
                            name="buyer_phone_number"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Occupation
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            value={formData.occupation}
                            placeholder="Occupation"
                            type="text"
                            name="occupation"
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
                           Marital Status
                          </label>

                          <Input
                            className="form-control-alternative"
                            id="input-username"
                            value={formData.marriage_status}
                            placeholder="Marital Status"
                            type="text"
                            name="marriage_status"
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
                           Wedding Date
                          </label>

                          <Input
                            className="form-control-alternative"
                            id="input-username"
                            value={formData.wedding_date}
                            placeholder="Wedding Date"
                            type="text"
                            name="wedding_date"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={formData.address}
                            id="input-address"
                            placeholder="Address"
                            type="text"
                            name="address"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={formData.city}
                            id="input-city"
                            placeholder="City"
                            type="text"
                            name="city"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-state"
                          >
                            State
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={formData.state}
                            id="input-state"
                            placeholder="state"
                            type="text"
                            name="state"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-postal_code"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={formData.postalcode}
                            id="input-postal_code"
                            placeholder="Postal code"
                            type="number"
                            name="postalcode"
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
                           Annual Income
                          </label>

                          <Input
                            className="form-control-alternative"
                            value={formData.annual_income}
                            id="input-username"
                            placeholder="Annual Income"
                            type="text"
                            name="annual_income"
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
                           Net Worth
                          </label>

                          <Input
                            className="form-control-alternative"
                            value={formData.net_worth}
                            id="input-username"
                            placeholder="Net Worth"
                            type="text"
                            name="net_worth"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Budget Min
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={formData.budget_min}
                            id="input-city"
                            placeholder="Minimum Budget"
                            type="text"
                            name="budget_min"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Budget Max
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={formData.budget_max}
                            id="input-country"
                            placeholder="Maximum Budget"
                            type="text"
                            name="budget_max"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Sale Type
                          </label>
                          <br />
                          <UncontrolledDropdown>
                            <DropdownToggle caret color="primary">
                              Select Sale type
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem onClick={() => handleDropdownChange("resale")}>Resale</DropdownItem>
                              <DropdownItem onClick={() => handleDropdownChange("newsale")}>New Sale</DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
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

export default AddBuyers;
