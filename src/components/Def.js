import React from "react";
import { Header, Segment, Grid } from "semantic-ui-react";
import { styleState } from "../recoil/atoms";
import { useRecoilValue } from "recoil";

const Def = ({ definitions }) => {
  const defs = definitions.map((definition) => definition.definition);
  const style = useRecoilValue(styleState);

  return (
    <>
      {defs && (
        <Grid.Column>
          <Header style={{ background: style.color.primary, border: "none" }} as="h3" attached="top">
            Definition
          </Header>
          <Segment attached>{defs[0]}</Segment>
        </Grid.Column>
      )}
    </>
  );
};

export default Def;
