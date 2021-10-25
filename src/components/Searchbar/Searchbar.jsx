import { Component } from "react";
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends (Component) {

    state = {
        pictureName: "",
    }

    handlChange = e => {
        this.setState({ pictureName: e.currentTarget.value.toLowerCase() });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.pictureName);
        this.setState({ pictureName: "" });
    }

    render() {
        return (
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                    <button className={s.SearchForm_button} type="submit" >
                        <span className={s.SearchForm_button_label}>
                        Search
                    </span>
                </button>

                <input
                className={s.SearchForm_input}
                type="text"
                name="pictureName"
                value={this.state.pictureName}
                onChange={this.handlChange}
            
                placeholder="Search images and photos"
                />
            </form>
        </header>
        );
    }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;