import React, { Component } from 'react';
import Navbar from './Navbar'

class NavbarAffix extends Component {
  static defaultProps = {
    offset: 0,
  };

  constructor() {
    super();
    this.state = {
      affix: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const affix = this.state.affix;
    const offset = this.props.offset;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (!affix && scrollTop >= offset) {
      this.setState({
        affix: true,
      });
    }

    if (affix && scrollTop < offset) {
      this.setState({
        affix: false,
      });
    }
  };

  render() {
    const affix = this.state.affix ? 'navbar-affixed' : '';
    const { className, ...props } = this.props;

    return (
      <Navbar affix={affix} {...props} className={`${className || 'navbar-affix'} ${affix}`} />
    );
  }
}





export default NavbarAffix;