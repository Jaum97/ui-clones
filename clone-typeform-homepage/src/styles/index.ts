import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled.main`
  height: 1610vh;
  .first {
    background: red;
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a {
      background: #f5f1ea;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        background: #7dbb91;
      }
      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
          background: #7dbb91;
          width: 100%;
          height: 100%;
        }
      }
    }
    .b {
      background: #582534;
    }
    .c {
      background: #0a7397;
      width: 100%;
      height: 100%;
    }
  }

  .second {
    background: green;
  }

  .third {
    background: blue;
  }
  .fourth {
    background: yellow;
  }
`;

export const Section = styled.div`
  position: relative;
`;

export const Sticky = styled(motion.div)`
  position: sticky;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
`;
