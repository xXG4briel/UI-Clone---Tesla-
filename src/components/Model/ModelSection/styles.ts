import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    scroll-snap-align: start;
`;

export const Image = styled.div`
    img {
        height: 100vh;
        width: 100%;
        object-fit: cover;
    }
`;
