import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  height: 40vh;
  background: linear-gradient(to right, #00bfff, #0066ff);
  color: #000;
  font-size: 18px;
  line-height: 24px;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 400;
  width: 100%;
`;

const HomeTitle = styled.h2`
  font-weight: 700;
  margin: 12px;
  margin-top: 10rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

const HomeText = styled.div`
  margin-top: 10px;
  margin: 12px;
  padding: 1rem;
  & > h2,
  h3 {
    padding-bottom: 0.5rem;
  }
`;

const Home = () => (
  <HomeContainer>
    <HomeTitle>Welcome to our page</HomeTitle>
    <HomeText>
      {' '}
      <h2>Fan Facts</h2>
      <h3>Zero is an even number.</h3>
      For some of us, this may be a “yes I know” fact, but for a lot of people
      this is not something they have ever thought about. For clarity, a good
      definition of an even number is as follows: a number is said to be even
      if, when divided by 2, it remains a whole number. Zero fits this perfectly
      since 0/2 = 0.
      <br />
      <h3>There is exactly 10! seconds in 6 weeks.</h3>
      For those who are unaware, for any positive integer n, n!, read as “n
      factorial”, represents the product of all positive integers less than or
      equal to n. So, for example, 5! = 5 × 4 × 3 × 2 × 1.
    </HomeText>
  </HomeContainer>
);

export default Home;
