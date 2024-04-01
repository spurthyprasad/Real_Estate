
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


import { useNavigate } from "react-router-dom";

// import AddBuyers from './AddBuyers.js';
const Buyers = () => {

      const navigate = useNavigate();
  const [buyers, setBuyers] = useState();

  async function getBuyers() {
    try {
      const response = await axios.get("http://localhost:8080/api/buyer/getBuyer");
      console.log(response.data);
      setBuyers(response.data.result);
    } catch (error) {
      console.log("Error >>", error.message);
    }
  }
    const [error, setError] = useState(null);

    const handleDelete = async (buyer_id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/buyer/deleteBuyer/${buyer_id}`);

      if (response.status === 200) {
        // Update buyers state based on the successful deletion
        setBuyers(buyers.filter((buyer) => buyer.id !== buyer_id));
        alert("Buyer data deleted ");
      } else {
        setError("Failed to delete buyer");
      }
    } catch (error) {
      console.error("Error deleting buyer:", error);
      setError("An error occurred while deleting the buyer");
    }
  };


  // const handleUpdate = async (buyer_id,updateBuyerData) => {
  //   try {
  //     const response = await axios.put(`http://localhost:8080/api/buyer/putBuyer/${buyer_id}`,updateBuyerData);

  //     if (response.status === 200) {
  //       // Update buyers state based on the successful deletion
  //       setBuyers(buyers.map((buyer) => buyer.id !== buyer_id));
  //       alert("Buyer data deleted ");
  //     } else {
  //       setError("Failed to delete buyer");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting buyer:", error);
  //     setError("An error occurred while deleting the buyer");
  //   }
  // };


  const handleUpdate = async (buyer_id, updatedBuyerData) => {


    console.log("buyer_id", buyer_id)
    // try {
      // Use PUT method for updating a resource
    //   const response = await axios.put(`http://localhost:8080/api/buyer/putBuyer/${buyer_id}`, updatedBuyerData);
  
    //   if (response.status === 200) {
    //     // Update buyer state based on successful update
    //     setBuyers(buyers.map((buyer) => buyer.id === buyer_id ? updatedBuyerData : buyer));
    //     alert("Buyer data updated successfully");
    //   } else {
    //     setError("Failed to update buyer");
    //   }
    // } catch (error) {
    //   console.error("Error updating buyer:", error);
    //   setError("An error occurred while updating the buyer");
    // }

    // navigate(`/admin/add-buyers/${buyer_id}`);
    navigate(`/admin/add-buyers?buyer_id=${buyer_id}`);


  };

  

  useEffect(() => {
    getBuyers();
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
                    <h3 className="mb-0">Buyers</h3>
                  </Col>
                  <Col lg="2">
                    <Link to="/admin/add-buyers">
                      <Button
                        className="mr-4"
                        color="info"
                        href="#pablo"
                        size="sm">
                        Add Buyer
                      </Button>
                    </Link>
                  </Col>

                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date Of Birth</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Father Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Postal Code</th>
                    <th scope="col">Occupation</th>
                    <th scope="col">Marital Status</th>
                    <th scope="col">Wedding Date</th>
                    <th scope="col">Annual Income</th>
                    <th scope="col">Net Worth</th>
                    <th scope="col">Budget Min</th>
                    <th scope="col">Budget Max</th>
                    <th scope="col">Sale Type</th>
                    <th scope="col">Action</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {buyers?.map((buyer) => (
                    <tr>
                      <td>{buyer.buyer_id}</td>
                      <td>{buyer.buyer_name}</td>
                      <td>{buyer.buyer_phone_number}</td>
                      <td>{buyer.buyer_email}</td>
                      <td>{buyer.date_of_birth}</td>
                      <td>{buyer.gender}</td>
                      <td>{buyer.father_name}</td>
                      <td>{buyer.address}</td>
                      <td>{buyer.city}</td>
                      <td>{buyer.state}</td>
                      <td>{buyer.postalcode}</td>
                      <td>{buyer.occupation}</td>
                      <td>{buyer.marriage_status}</td>
                      <td>{buyer.wedding_date}</td>
                      <td>{buyer.annual_income}</td>
                      <td>{buyer.net_worth}</td>
                      <td>{buyer.budget_min}</td>
                      <td>{buyer.budget_max}</td>
                      <td>{buyer.sale_type}</td>
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
                              onClick={(e) => handleUpdate(buyer.buyer_id)}
                            >
                              Edit
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => handleDelete(buyer.buyer_id)}
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

export default Buyers;
