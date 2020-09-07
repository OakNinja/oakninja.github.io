import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import * as Scroll from "react-scroll";

class TopMenu extends React.Component {
  state = { isTopOfPage: true };

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(e) {
    const currentYScroll = window.scrollY;

    if (this.state.isTopOfPage && currentYScroll < 10) {
      return;
    }
    if (currentYScroll < 10) {
      this.setState({ isTopOfPage: true });
    } else {
      this.setState({ isTopOfPage: false });
    }
  }

  render() {
    return (
      <Navbar
        fixed="top"
        className={
          "topmenu-navbar navbar-custom " +
          (this.state.isTopOfPage ? "" : "top-nav-collapse")
        }
        expand="sm"
      >
        {" "}
        {/* missing id mainNav */}
        <Container>
          <Scroll.Link
            className="navbar-brand custom-brand"
            smooth={true}
            duration={500}
            spy={true}
            href="#scroll-to-top"
            to="scroll-to-top"
          >
            <span className="light">Oak</span>.Ninja
          </Scroll.Link>
          <Navbar.Toggle
            className="navbar-toggler-right"
            aria-controls="responsive-navbar-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ml-auto">
              <Scroll.Link
                smooth={true}
                duration={500}
                spy={true}
                className="nav-link"
                href="#about"
                to="about"
              >
                About
              </Scroll.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default TopMenu;
