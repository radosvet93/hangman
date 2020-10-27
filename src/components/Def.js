import React from "react";
import { Header, Segment, Grid, Image } from "semantic-ui-react";
import { styleState } from "../recoil/atoms";
import { useRecoilValue } from "recoil";

const Def = ({ definitions }) => {
  const images = definitions.map((definition) => definition.image_url);
  const examples = definitions.map((definition) => definition.example);
  const defs = definitions.map((definition) => definition.definition);
  const style = useRecoilValue(styleState);

  return (
    <>
      <Grid columns="equal">
        {defs.some((def) => def) && (
          <Grid.Column>
            <Header style={{ background: style.color.primary, border: "none" }} as="h3" attached="top">
              Definitions
            </Header>
            {defs.map(
              (def) =>
                def && (
                  <Segment key={def} attached>
                    {def}
                  </Segment>
                )
            )}
          </Grid.Column>
        )}
        {examples.some((example) => example) && (
          <Grid.Column>
            <Header style={{ background: style.color.primary, border: "none" }} as="h3" attached="top">
              Examples
            </Header>
            {examples.map(
              (example) =>
                example && (
                  <Segment key={example} attached>
                    {example}
                  </Segment>
                )
            )}
          </Grid.Column>
        )}
        {images.some((image) => image) && (
          <Grid.Column>
            <Header style={{ background: style.color.primary, border: "none" }} as="h3" attached="top">
              Images
            </Header>
            <Segment attached>
              {images.map((image) => (
                <Image key={image} src={image} size="medium" />
              ))}
            </Segment>
          </Grid.Column>
        )}
      </Grid>
    </>
  );
};

export default Def;
