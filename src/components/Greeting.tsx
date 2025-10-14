import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Content = styled("div", {
  fontSize: "1.75vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 16,
  width: "100%",
  textAlign: "center",
});

const Celebrant = styled("p", {
  fontSize: "1.75vh",
  lineHeight: 1.75,
  opacity: 0.85,
  marginBottom: 0,
  width: "100%",
  textAlign: "center",
});

type GrettingProps = {
  data?: Data;
};

export default function Gretting({ data }: GrettingProps) {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>Cheers to 18 years</Title>
      </Divider>
      <Content>
        {data?.gretting?.split("\n")?.map((value, index) => {
          return (
            <div key={index}>
              {value}
              <br />
            </div>
          );
        })}
      </Content>
      <Celebrant>
        {data?.celebrant?.parents?.father?.name} &{" "}
        {data?.celebrant?.parents?.mother?.name}{"'s"} youngest daughter <br/>
        {data?.celebrant?.name} Ilagan
        <br/>
      </Celebrant>
    </Wrapper>
  );
}
