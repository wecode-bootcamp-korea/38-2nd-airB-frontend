import styled, { keyframes } from 'styled-components';

const Skeleton = ({ width, height, number }) => {
  return number
    ? [...Array(number)].map((skeleton, idx) => {
        return (
          <StyledSkeleton width={width} height={height} key={idx}>
            <ImageBox />
            <TextBox />
            <TextBox />
            <TextBox />
          </StyledSkeleton>
        );
      })
    : null;
};

export default Skeleton;

const loading = keyframes`
from {
  left: -200px;
}
to {
  left: 100%;
}
`;

const StyledSkeleton = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 20px 22px 20px 22px;

  ::before {
    content: '';
    display: block;
    position: absolute;
    left: -200px;
    top: 0;
    height: 100%;
    width: 200px;
    background: linear-gradient(to right, red 0%, blue 50% red 100%);
    animation: ${loading} 1000ms ease-in-out infinite;
  }
`;

const ImageBox = styled.div`
  width: 315px;
  height: 295px;
  background-color: white;
  border-radius: 15px;
`;

const TextBox = styled.div`
  width: 200px;
  height: 15px;
  margin: 10px 0 0 5px;
  background-color: white;
`;
