import React, { Fragment, useEffect } from "react";

import FirstAndSecond from "./components/FirstAndSecond";
import Header from "./components/Header";
import { Main, Section, Sticky } from "./styles";
import GlobalStyles from "./styles/global";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Main>
        <Section style={{ height: "72.7%" }}>
          <FirstAndSecond />
        </Section>
        <Section>
          <Sticky className="third"></Sticky>
        </Section>
        <Section>
          <Sticky className="fourth"></Sticky>
        </Section>
      </Main>
    </Fragment>
  );
}

export default App;
