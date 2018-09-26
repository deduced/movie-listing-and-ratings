// @flow

<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// $FlowFixMe
=======
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

>>>>>>> v3-10
const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
<<<<<<< HEAD
  text-decoration: none;
  color: black;
=======
  color: black; 
  text-decoration: none; 
>>>>>>> v3-10
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

<<<<<<< HEAD
class ShowCard extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  props: {
    poster: string,
    title: string,
    year: string,
    description: string,
    imdbID: string
  };
  render() {
    return (
      <Wrapper className="show-card" to={`/details/${this.props.imdbID}`}>
        <Image alt={`${this.props.title} Show Poster`} src={`/public/img/posters/${this.props.poster}`} />
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p>
        </div>
      </Wrapper>
    );
  }
}
=======
const ShowCard = (props: Show) => (
  <Wrapper to={`/details/${props.imdbID}`}>
    <Image
      alt={`${props.title} Show Poster`}
      src={`/public/img/posters/${props.poster}`}
    />
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper>
);
>>>>>>> v3-10

export default ShowCard;
