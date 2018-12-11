import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i style={{lineHeight:0,marginLeft:127}} className="pe-7s-graph"></i>
            <p style={{lineHeight:0}}>Dashboard</p>
          </Link>
        </li>
        <li className={this.isPathActive('/components') || this.state.componentMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ componentMenuOpen: !this.state.componentMenuOpen })}
            data-toggle="collapse">
            <i style={{lineHeight:0,marginLeft:127}} className="pe-7s-plugin"></i>
            <p style={{lineHeight:0}}>
              Injuries
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.componentMenuOpen}>
            <div>
              <ul className="nav">

                <li className={this.isPathActive('/components/notifications') ? 'active' : null}>
                  <Link to="/components/notifications">Injury report form</Link>
                </li>



              </ul>
            </div>
          </Collapse>
        </li>




        <li className={this.isPathActive('/calendar') ? 'active' : null}>
          <Link to="/calendar">
            <i style={{lineHeight:0,marginLeft:127}} className="pe-7s-date"></i>
            <p style={{lineHeight:0}}>Event Calendar</p>
          </Link>
        </li>

          <li className={this.isPathActive('/session') ? 'active' : null}>
              <Link to="/session">
                  <i style={{lineHeight:0,marginLeft:127}} className="pe-7s-date"></i>
                  <p style={{lineHeight:0}}>Session analytics</p>
              </Link>
          </li>
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);