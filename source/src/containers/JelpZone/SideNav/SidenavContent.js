import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import Button from 'material-ui/Button';
import 'jquery-slimscroll/jquery.slimscroll.min';
import IntlMessages from 'util/IntlMessages';


class SidenavContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      env: process.env.NODE_ENV
    };
  }

  componentDidMount() {
      const {history} = this.props;
      const $nav = $(this.nav);
      const slideDuration = 250;

      $nav.slimscroll({
          height: '100%'
      });

      const pathname = `#${history.location.pathname}`;// get current path

      $('ul.nav-menu > li.menu').click(function () {
          const menuLi = this;
          $('ul.nav-menu > li.menu').not(menuLi).removeClass('open');
          $('ul.nav-menu > li.menu ul').not($('ul', menuLi)).slideUp(slideDuration);
          $('> ul', menuLi).slideToggle(slideDuration);
          $(menuLi).toggleClass('open');
      });

      $('ul.sub-menu li').click(function (e) {
          let superSubMenu = $(this).parent();
          if (superSubMenu.parent().hasClass('active')) {
              $('li', superSubMenu).not($(this)).removeClass('active');
          }
          else {
              $('ul.sub-menu li').not($(this)).removeClass('active');
          }

          $(this).toggleClass('active');
          e.stopPropagation();
      });

      const activeLi = $('a[href="' + pathname + '"]');// select current a element
      const activeNav = activeLi.closest('ul'); // select closest ul
      if (activeNav.hasClass('sub-menu')) {
          activeNav.slideDown(slideDuration);
          activeNav.parent().addClass('open');
          activeLi.parent().addClass('active');
      } else {
          activeLi.parent().addClass('open');
      }
  }


  render() {
      return (
          <ul className="nav-menu" ref={(c) => {
              this.nav = c;
          }}>

              <li className="nav-header"><IntlMessages id="sidebar.jelpzone"/></li>

              <li className="menu no-arrow">
                  <NavLink to="/app/search">
                      <i className="zmdi zmdi-search zmdi-hc-fw"/>
                      <span className="nav-text"><IntlMessages id="sidebar.jelpzone.search"/></span>
                  </NavLink>
              </li>

              <li className="menu no-arrow">
                  <NavLink to="/app/newProject">
                      <i className="zmdi zmdi-plus-square zmdi-hc-fw"/>
                      <span className="nav-text"><IntlMessages id="sidebar.appModule.newProject"/></span>
                  </NavLink>
              </li>

              <li className="menu no-arrow">
                  <NavLink to="#">
                      <i className="zmdi zmdi-assignment zmdi-hc-fw"/>
                      <span className="nav-text"><IntlMessages id="sidebar.appModule.myProjects"/></span>
                  </NavLink>
              </li>

              <li className="menu no-arrow">
                  <NavLink to="#">
                      <i className="zmdi zmdi-receipt zmdi-hc-fw"/>
                      <span className="nav-text"><IntlMessages id="sidebar.appModule.myServiceProposals"/></span>
                  </NavLink>
              </li>

              <li className="menu no-arrow">
                  <NavLink to="#">
                      <i className="zmdi zmdi-money-box zmdi-hc-fw"/>
                      <span className="nav-text"><IntlMessages id="sidebar.appModule.myPayments"/></span>
                  </NavLink>
              </li>

              <li className="menu no-arrow">
                  <NavLink to="/app/chat">
                      <i className="zmdi zmdi-comment zmdi-hc-fw"/>
                      <span className="nav-text"><IntlMessages id="sidebar.appModule.chat"/></span>
                  </NavLink>
              </li>

          </ul>

      );
  }
}

export default withRouter(SidenavContent);
