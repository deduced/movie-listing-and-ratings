// @flow

<<<<<<< HEAD
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Spinner from './Spinner';
import { getAPIDetails } from './actionCreators';

class Details extends React.Component {
  componentDidMount() {
    if (!this.props.rating) {
      this.props.getAPIData();
    }
  }
  props: {
    rating: string,
    getAPIData: Function,
    show: Show
  };
  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    let rating;
    if (this.props.rating) {
      rating = <h3>{this.props.rating}</h3>;
    } else {
      rating = <Spinner />;
    }
=======
import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import { render } from "preact";
import Spinner from "./Spinner";

class Details extends Component {
  state = {
    apiData: { rating: "" }
  };

  componentDidMount() {
    axios
      .get(`http://localhost:3000/${this.props.show.imdbID}`)
      .then((response: { data: { rating: string } }) => {
        this.setState({ apiData: response.data });
      });
  }

  props: {
    show: Show
  };

  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    let ratingComponent;
    if (this.state.apiData.rating) {
      ratingComponent = <h3>{this.state.apiData.rating}</h3>;
    } else {
      ratingComponent = <Spinner />;
    }

>>>>>>> v3-10
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
<<<<<<< HEAD
          {rating}
          <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
=======
          {ratingComponent}
          <img
            src={`/public/img/posters/${poster}`}
            alt={`Poster for ${title}`}
          />
>>>>>>> v3-10
          <p>{description}</p>
        </section>
        <div>
          <iframe
<<<<<<< HEAD
            title="YouTube Video Frame"
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
=======
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>

>>>>>>> v3-10
      </div>
    );
  }
}

<<<<<<< HEAD
const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {};
  return {
    rating: apiData.rating
  };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getAPIData() {
    dispatch(getAPIDetails(ownProps.show.imdbID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
=======
export default Details;
>>>>>>> v3-10
