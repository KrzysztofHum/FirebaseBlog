import type { NextPage } from "next";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 1rem;
  margin: 1.5rem 0.5rem 0;
  border: 1px solid #a9a9a9;
  border-radius: 10px;
  box-shadow: 0px 8px 15px -11px rgba(66, 68, 90, 1);
`;

const StyledSummaryContainer = styled.div`
  border-bottom: 1px solid #a9a9a9;
`;

const StyledDataRange = styled.h4`
  margin-top: 1rem;
`;

const StyledH1 = styled.h1`
  text-align: center;
`;

const StyledBox = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const StyledCategory = styled.div`
  text-align: left;
  margin: 0;
`;

const StyledScore = styled.div`
  text-align: right;
  color: red;
  margin: 0;
`;

const Home: NextPage = () => {
  const xd = 1;
  return (
    <StyledContainer>
      <StyledH1>Summary</StyledH1>
      <StyledSummaryContainer>
        <StyledDataRange>Today</StyledDataRange>
        <StyledBox>
          <div>Diagram</div>
          <StyledContent>
            <StyledMain>
              <StyledCategory>Expenses:</StyledCategory>
              <StyledScore>66,00zł</StyledScore>
            </StyledMain>
            <StyledMain>
              <StyledCategory>Investments:</StyledCategory>
              <StyledScore>55,00zł</StyledScore>
            </StyledMain>
          </StyledContent>
        </StyledBox>
      </StyledSummaryContainer>
      <StyledSummaryContainer>
        <StyledDataRange>Last 7 days</StyledDataRange>
        <StyledBox>
          <div>Diagram</div>
          <StyledContent>
            <StyledMain>
              <StyledCategory>Expenses:</StyledCategory>
              <StyledScore>66$</StyledScore>
            </StyledMain>
            <StyledMain>
              <StyledCategory>Investments:</StyledCategory>
              <StyledScore>66$</StyledScore>
            </StyledMain>
          </StyledContent>
        </StyledBox>
      </StyledSummaryContainer>
      <StyledSummaryContainer>
        <StyledDataRange>May 2022</StyledDataRange>
        <StyledBox>
          <div>Diagram</div>
          <StyledContent>
            <StyledMain>
              <StyledCategory>Expenses:</StyledCategory>
              <StyledScore>66$</StyledScore>
            </StyledMain>
            <StyledMain>
              <StyledCategory>Investments:</StyledCategory>
              <StyledScore>66$</StyledScore>
            </StyledMain>
          </StyledContent>
        </StyledBox>
      </StyledSummaryContainer>
      <div>
        <StyledDataRange>2022</StyledDataRange>
        <StyledBox>
          <div>Diagram:</div>
          <StyledContent>
            <StyledMain>
              <StyledCategory>Expenses:</StyledCategory>
              <StyledScore>66$</StyledScore>
            </StyledMain>
            <StyledMain>
              <StyledCategory>Investments</StyledCategory>
              <StyledScore>66$</StyledScore>
            </StyledMain>
          </StyledContent>
        </StyledBox>
      </div>
    </StyledContainer>
  );
};

export default Home;
