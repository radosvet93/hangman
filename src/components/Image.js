import React, { useState, useEffect } from "react";
import { Header, Segment, Grid, Image as SImage } from "semantic-ui-react";
import { styleState } from "../recoil/atoms";
import { useRecoilValue } from "recoil";
import axios from "axios";

const PIXABAY_URL = "https://pixabay.com/api";
const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
const statusOK = (status) => status === 200;
const errorText = "Sorry, image not available";

const Image = ({ word }) => {
  const [responseImage, setResponseImage] = useState();
  const [status, setStatus] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const style = useRecoilValue(styleState);
  const segmentStyle = {
    padding: "0px",
    margin: "0",
    maxWidth: "100%",
    border: "0",
  };

  useEffect(() => {
    setIsLoading(true);
    const pixabayImages = {
      method: "GET",
      url: PIXABAY_URL,
      params: { q: word, key: API_KEY, per_page: 3 },
    };

    axios.request(pixabayImages).then(({ status, data: { hits } }) => {
      setStatus(status);
      if (statusOK(status) && hits.length) {
        setResponseImage(hits[0].webformatURL);
        setIsLoading(false);
      }
    });
  }, [word]);

  return (
    <>
      <Grid.Column>
        <Header style={{ background: style.color.primary, border: "none" }} as="h3" attached="top">
          Image
        </Header>
        <Segment style={responseImage && segmentStyle} attached loading={isLoading}>
          {statusOK(status) && responseImage ? <SImage src={responseImage} fluid /> : errorText}
        </Segment>
      </Grid.Column>
    </>
  );
};

export default Image;
