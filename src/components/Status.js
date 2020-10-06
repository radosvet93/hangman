import React from "react";
import { useRecoilState } from "recoil";
import { Button } from "semantic-ui-react";
import { statusState } from "../recoil/atoms";

const Status = () => {
  const [status, setStatus] = useRecoilState(statusState);

  return (
    <>
      <p>{status}</p>
      {status !== "" && <Button onClick={() => setStatus("Restart")}>Restart</Button>}
    </>
  );
};

export default Status;
