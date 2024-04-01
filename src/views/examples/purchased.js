
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    Button,
    Col,
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  import { Link } from "react-router-dom";
  import { useEffect, useState } from "react";
  import axios from "axios";
  
  const Purchases = () => {
  
    const [purchases, setPurchases] = useState();
  
    async function getPurchases() {
      try {
        const response = await axios.get("http://localhost:8080/api/purchased/getPurchased");
        console.log(response.data);
        setPurchases(response.data.result);
      } catch (error) {
        console.log("Error >>", error.message);
      }
    }

    const [error, setError] = useState(null);
    const handleDelete = async (purchased_id) => {
      try {
        const response = await axios.delete(`http://localhost:8080/api/purchased/deletePurchased/${purchased_id}`);
  
        if (response.status === 200) {
          // Update buyers state based on the successful deletion
          setPurchases(purchases.filter((purchased) => purchased.id !== purchased_id));
          alert("Purchased  data deleted ");
        } else {
          setError("Failed to delete ");
        }
      } catch (error) {
        console.error("Error deleting ", error);
        setError("An error occurred while deleting ");
      }
    };



  
    useEffect(() => {
      getPurchases();
    }, [])
  
  
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row>
                    <Col >
                      <h3 className="mb-0">Finish Deals</h3>
                    </Col>
                    <Col lg="2">
                      <Link to="/admin/add-purchased">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          size="sm">
                          Add Purchased Details
                        </Button>
                      </Link>
                    </Col>
  
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Purchased Id</th>
                      <th scope="col">Seller Id</th>
                      <th scope="col">Seller Name</th>
                      <th scope="col">Seller phone Number</th>
                      <th scope="col">Seller Email</th>
                      <th scope="col">Buyer Id</th>
                      <th scope="col">Buyer Name</th>
                      <th scope="col">Buyer Phone Number</th>
                      <th scope="col">Buyer Email</th>
                      <th scope="col">Purchased Date</th>
                      <th scope="col">Action</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {purchases?.map((purchased) => (
                      <tr>
                        <td>{purchased.purchased_id}</td>
                        <td>{purchased.seller_id}</td>
                        <td>{purchased.seller_name}</td>
                        <td>{purchased.phone_number}</td>
                        <td>{purchased.seller_email}</td>
                        <td>{purchased.buyer_id}</td>
                        <td>{purchased.buyer_name}</td>
                        <td>{purchased.buyer_phone_number}</td>
                        <td>{purchased.buyer_email}</td>
                        <td>{purchased.purchased_date}</td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              href="#pablo"
                              role="button"
                              size="sm"
                              color=""
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Edit
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => handleDelete(purchased.purchased_id)}
                              >
                                Delete
                              </DropdownItem>
  
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    ))}
  
  
  
  
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
          {/* Dark table */}
  
        </Container >
      </>
    );
  };
  
  export default Purchases;