import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Section from "./components/Section";
import TopMenu from "./components/TopMenu";

function App() {
  let year = new Date().getFullYear();
  return (
    <div id="home">
      <TopMenu></TopMenu>

      <Header title="React-Grayscale" buttonLabel="Get Started"></Header>

      <Section
        name="about"
        classList="text-center"
        html={
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-white mb-4">About</h2>
                <p className="text-white-50">
                  My name is Esse Woods and I work as a Software Developer in
                  Stockholm, Sweden. When not at work, I spend time with my
                  family, gardening, tinkering, and run a never-ending stream of
                  hobby projects.
                  <br />
                  <br /> Some of these are&nbsp;
                  <a href="https://github.com/OakNinja/MakeMeFish">
                    MakeMeFish
                  </a>{" "}
                  - a world first terminal tool to provide easy navigation and
                  execution of make targets, and&nbsp;
                  <a href="https://www.microsoft.com/sv-se/store/apps/visa-vecka/9wzdncrdqz1x">
                    Visa Vecka
                  </a>{" "}
                  - a week number application for Windows 10, Windows 8.1 and
                  Windows Phone (Swedish).
                </p>

                <ul class="list-inline banner-social-buttons">
                  <li>
                    <a
                      href="mailto:oakninja@gmail.com"
                      className="btn btn-default btn-lg"
                      title="oakninja@gmail.com"
                    >
                      <i className="fa fa-envelope fa-fw"></i>{" "}
                      <span className="network-name"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/OakNinja"
                      className="btn btn-default btn-lg"
                      title="Github"
                    >
                      <i className="fa fa-github fa-fw"></i>{" "}
                      <span className="network-name"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://stackoverflow.com/users/1502563/oakninja"
                      className="btn btn-default btn-lg"
                      title="Stack Overflow"
                    >
                      <i className="fa fa-stack-overflow fa-fw"></i>{" "}
                      <span className="network-name"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/OakNinja"
                      className="btn btn-default btn-lg"
                      title="Twitter"
                    >
                      <i className="fa fa-twitter fa-fw"></i>{" "}
                      <span className="network-name"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        }
      ></Section>

      <footer className="bg-black small text-center text-white-50">
        <div class="footer-image"></div>
        <div className="container">Copyright &copy; Esse Woods {year}</div>
      </footer>
    </div>
  );
}

export default App;
