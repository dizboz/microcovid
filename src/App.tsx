import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import {
  NavLink,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'

import { PageViews } from 'components/Analytics'
import { Footer } from 'components/Footer'
import { ScrollToTop } from 'components/ScrollToTop'
import { About } from 'pages/About'
import { Calculator } from 'pages/Calculator'
import { Contact } from 'pages/Contact'
import { Paper, PaperNavDropdown, PaperTOC } from 'pages/Paper'
import { Spreadsheet } from 'pages/Spreadsheet'

import 'styles/App.scss'

export const App = (): React.ReactElement => {
  return (
    <HelmetProvider>
      <Router>
        <QueryParamProvider ReactRouterRoute={Route}>
          <PageViews />
          <Helmet>
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto+Slab:wght@500&display=swap"
              rel="stylesheet"
            />
            <meta
              name="description"
              content="A calculator for building intuition about COVID risk. We used published research to estimate the risk level of various activities in microCOVIDs. 1 microCOVID is a one-in-a-million chance of getting COVID. We hope you'll use this tool to make safer choices."
            />
            <meta property="og:title" content="microCOVID Project" />
            <meta
              property="og:description"
              content="A calculator for building intuition about COVID risk. We used published research to estimate the risk level of various activities in microCOVIDs. 1 microCOVID is a one-in-a-million chance of getting COVID. We hope you'll use this tool to make safer choices."
            />
            <meta
              property="og:image"
              content={process.env.REACT_APP_PUBLIC_URL + '/logo400.png'}
            />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="400" />
            <meta
              property="og:url"
              content={process.env.REACT_APP_PUBLIC_URL}
            />
            <meta property="fb:app_id" content="1117003835468995" />
            <meta property="og:type" content="website" />
          </Helmet>

          <ScrollToTop />

          <Container>
            <Navbar expand="md">
              <Navbar.Brand href="/">microCOVID Project</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Item>
                    <NavLink
                      to="/"
                      className="nav-link"
                      exact
                      activeClassName="active"
                    >
                      Calculator
                    </NavLink>
                  </Nav.Item>

                  <Nav.Item>
                    <NavLink
                      to="/about"
                      className="nav-link"
                      activeClassName="active"
                    >
                      About
                    </NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <PaperNavDropdown />
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink
                      to="/spreadsheet"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Spreadsheet
                    </NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink
                      to="/contact"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Contact Us
                    </NavLink>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Switch>
              <Route path="/calculator">
                <Redirect to={{ pathname: '/' }} />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/paper/:id">
                <Paper />
              </Route>
              <Route exact path="/paper">
                <PaperTOC />
              </Route>
              <Route path="/spreadsheet">
                <Spreadsheet />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Calculator />
              </Route>
            </Switch>
          </Container>

          <Footer />
        </QueryParamProvider>
      </Router>
    </HelmetProvider>
  )
}
