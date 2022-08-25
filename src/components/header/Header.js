import { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        const { className, children } = this.props;
        return (
            <header className={className}>
                <nav>{children}</nav>
            </header>
        );
    }
}

export default Header;
