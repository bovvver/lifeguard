import styled from "styled-components";
import mq from "@assets/styles/responsiveDesign";

export const BlockContent = styled.p`
  font-size: 1.5rem;
  text-align: center;

  ${mq[1]} {
    font-size: 1.7rem;
  }

  ${mq[2]} {
    font-size: 2rem;
  }
`;

export const Wrapper = styled.div`
  ${BlockContent}:last-of-type {
    margin-bottom: 1.5em;
  }
`;
