import React from "react";
import { Header, Segment, Grid } from "semantic-ui-react";
import { styleState } from "../recoil/atoms";
import { useRecoilValue } from "recoil";

const Example = ({ definitions }) => {
  const examples = definitions.map((definition) => definition.example);
  const style = useRecoilValue(styleState);

  return (
    <>
      {examples && (
        <Grid.Column>
          <Header style={{ background: style.color.primary, border: "none" }} as="h3" attached="top">
            Examples
          </Header>
          <Segment attached>{examples[0]}</Segment>
        </Grid.Column>
      )}
    </>
  );
};

export default Example;
