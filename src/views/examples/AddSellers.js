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
import { getBase64 } from "../../utils/getBase64";

const AddSellers = () => {
  const [formData, setFormData] = useState();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function handleDropdownChange(value) {

    setFormData((prevState) => ({
      ...prevState,
      sale_type: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post("http://localhost:8080/api/seller/sellerInfo", formData);
      if (response) {
        alert("seller data added");
      }

    } catch (error) {
      console.error("Error >>", error.message);
    }
  }

  async function handleFileInput(e) {
    const { files } = e.target;
    const images = [];
    for (const file of files) {
      const base64 = await getBase64(file);
      images.push(base64);
    }
    setFormData((prevState) => ({
      ...prevState,
      images: images,
    }));
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
                    <h3 className="mb-0">Sellers</h3>
                  </Col>
                  <Col className="text-right" xs="4">

                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Seller information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Name
                          </label>

                          <Input
                            className="form-control-alternative"
                            id="input-username"
                            placeholder="Username"
                            type="text"
                            name="seller_name"
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
                            id="input-email"
                            type="email"
                            name="seller_email"
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
                            placeholder="First name"
                            type="number"
                            name="phone_number"
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
                            id="input-address"
                            placeholder="Home Address"
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
                            htmlFor="input-country"
                          >
                            State
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-country"
                            placeholder="State"
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
                            htmlFor="input-country"
                          >
                            Postal Code
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
                            name="postalcode"
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
                            square footage
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-city"
                            placeholder="square foot"
                            type="number"
                            name="square_footage"
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
                            built year
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-country"
                            placeholder="built year"
                            type="number"
                            name="year_built"
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

                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            price
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-country"
                            placeholder="price"
                            type="number"
                            name="price"
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
                            Amenities
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-country"
                            placeholder="amenities"
                            type="text"
                            name="amenities"
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
                            Certified
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-country"
                            placeholder="Certificate"
                            type="text"
                            name="certified_by"
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
                            Road Space
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-country"
                            placeholder="Road"
                            type="number"
                            name="road_space"
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
                            Direction
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-country"
                            placeholder="direct which it faces"
                            type="text"
                            name="direction"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>

                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Description
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-address"
                            placeholder="description"
                            type="text"
                            name="description"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Images
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-address"
                            placeholder="images"
                            type="file"
                            name="images"
                            onChange={handleFileInput}
                            multiple
                            accept="image/*"
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

export default AddSellers;
