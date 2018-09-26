// @flow
<<<<<<< HEAD
import React from 'react';
import styled, { keyframes } from 'styled-components';
=======

import React from "react";
import styled, { keyframes } from "styled-components";
>>>>>>> v3-10

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
<<<<<<< HEAD
    transform: rotate(360deg);
=======
    transform: rotate(360deg); 
>>>>>>> v3-10
  }
`;

const Image = styled.img`
<<<<<<< HEAD
  animation: ${spin} 4s infinite linear;
  background-image: url(/public/img/loading.png);
  background-repeact: no-repeat;
  max-width: 250px;
`;

const Spinner = () => <Image src="/public/img/loading.png" alt="loading indicator" />;
=======
  animation: ${spin} 4s infinite linear;     
`;

const Spinner = () => (
  <Image src="/public/img/loading.png" alt="loading indicator" />
);
>>>>>>> v3-10

export default Spinner;
