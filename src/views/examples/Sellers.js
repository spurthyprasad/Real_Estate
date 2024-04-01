
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
import ImageGallery from "react-image-gallery";
import { Modal } from "antd";
import "react-image-gallery/styles/scss/image-gallery.scss";

const Sellers = () => {
  const [sellers, setSellers] = useState();
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState(null);

  async function getSellers() {
    try {
      const response = await axios.get("http://localhost:8080/api/seller/getSeller");
      console.log(response.data);
      setSellers(response.data.result);
    } catch (error) {
      console.log("Error >>", error.message);
    }
  }

  const [error, setError] = useState(null);
  const handleDelete = async (seller_id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/seller/deleteSeller/${seller_id}`);

      if (response.status === 200) {
        // Update buyers state based on the successful deletion
        setSellers(sellers.filter((seller) => seller.id !== seller_id));
        alert("seller data deleted  ");
      } else {
        setError("Failed to delete seller");
      }
    } catch (error) {
      console.error("Error deleting seller:", error);
      setError("An error occurred while deleting the buyer");
    }
  };

  useEffect(() => {
    getSellers();
  }, [])


  async function getAllImages(seller_id) {
    try {
      const response = await axios.get(`http://localhost:8080/api/seller/getImages/${seller_id}`);
      console.log(response.data);
      const images = response.data.result.map((image) => {
        const img = {
          original: image.image,
          thumbnail: image.image,
        }
        return img;
      })
      console.log(images)
      setImages(images);
      setOpen(true);
    } catch (error) {
      console.error("Error getting images:", error);
      setError("An error occurred while deleting the buyer");
    }
  }

  // const images = [
  //   {
  //     original: "https://picsum.photos/id/1018/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1018/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1015/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1015/250/150/",
  //   },
  //   {
  //     original: "https://picsum.photos/id/1019/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1019/250/150/",
  //   },
  // ];

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
                    <h3 className="mb-0">Sellers</h3>
                  </Col>
                  <Col lg="2">
                    <Link to="/admin/add-sellers">
                      <Button
                        className="mr-4"
                        color="info"
                        href="#pablo"
                        size="sm">
                        Add Seller
                      </Button>
                    </Link>
                  </Col>

                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Seller Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Postal Code</th>
                    <th scope="col">square foot</th>
                    <th scope="col">Built year</th>
                    <th scope="col">Sale Type</th>
                    <th scope="col">price</th>
                    <th scope="col">description</th>
                    <th scope="col">amenities</th>
                    <th scope="col">certified by</th>
                    <th scope="col">road</th>
                    <th scope="col">direction</th>
                    <th scope="col">Action</th>
                    <th>View images</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {sellers?.map((seller) => (
                    <tr>
                      <td>{seller.seller_id}</td>
                      <td>{seller.seller_name}</td>
                      <td>{seller.phone_number}</td>
                      <td>{seller.seller_email}</td>
                      <td>{seller.address}</td>
                      <td>{seller.city}</td>
                      <td>{seller.state}</td>
                      <td>{seller.postalcode}</td>
                      <td>{seller.square_footage}</td>
                      <td>{seller.year_built}</td>
                      <td>{seller.sale_type}</td>
                      <td>{seller.price}</td>
                      <td>{seller.description}</td>
                      <td>{seller.amenities}</td>
                      <td>{seller.certified_by}</td>
                      <td>{seller.road_space}</td>
                      <td>{seller.direction}</td>
                      <td><Button className="mr-4"
                        color="info"
                        href="#pablo"
                        size="sm"
                        onClick={() => getAllImages(seller.seller_id)}>
                        View
                      </Button></td>
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
                              onClick={(e) => handleDelete(seller.seller_id)}
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
      <Modal
        title="Images"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        cancelText={"Close"}

      >
        <ImageGallery items={images} />
      </Modal>

    </>
  );
};

export default Sellers;
