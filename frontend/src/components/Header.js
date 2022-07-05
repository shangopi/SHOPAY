import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, Button, Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
  Toolbar,
  Box,
  Divider,
  IconButton,
  makeStyles,
  Drawer,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import axios from "axios";
import config from '../config/config.json';

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#262626",
    height: "100%",
  },
  avatar: {
    margin: "0.5rem auto",
    padding: "1rem",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [subCatList, setSubCatList] = useState([]);

  useEffect(() => {
    axios.get(`${config.REACT_APP_API}category/getAllCategory`).then(
      (response) => {
        setListItems(response.data);
      }
    );

    axios.get(`${config.REACT_APP_API}category/getAllSubCategory`).then(
      (response) => {
        setSubCatList(response.data);
      }
    );
  }, []);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <h1 className="text-center text-white pt-4">SHOPAY</h1>
      <h4 className="text-center text-white pb-4">Categories</h4>
      <Divider />

      <div className="accordion accordion-flush" id="accordionFlushExample">
        {listItems.map((listItem) => (
          <div key={listItem.category_id} className="accordion-item p-0 ">
            <h2
              className="accordion-header bg-primary p-0 "
              id={listItem.category_id}
            >
              <Button
                className="accordion-button collapsed text-white col-12 text-left border-0"
                variant="outline-dark"
                data-bs-toggle="collapse"
                data-bs-target={`#flush${listItem.category_id}`}
                aria-expanded="false"
                aria-controls={`flush${listItem.category_id}`}
              >
                <div className="row justify-content-between">
                  {`${listItem.name}   `}
                  <FontAwesomeIcon
                    className=" pt-1"
                    icon={faSquareCaretDown}
                  ></FontAwesomeIcon>
                </div>
              </Button>
            </h2>
            <div
              id={`flush${listItem.category_id}`}
              className="accordion-collapse collapse"
              aria-labelledby={listItem.category_id}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                {subCatList
                  .filter((sub) => sub.category_id === listItem.category_id)
                  .map((subCat) => (
                    <Button
                    key={subCat.sub_category_name}
                      className="accordion-button collapsed text-white col-12 text-left border-0"
                      variant="outline-dark"
                    >
                      {subCat.sub_category_name}
                    </Button>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <Menu />
            </IconButton>
            <Drawer open={open} anchor="left" onClose={toggleSlider}>
              {sideList()}
            </Drawer>
          </Toolbar>
          <LinkContainer to="/">
            <Navbar.Brand>ShoPay</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
