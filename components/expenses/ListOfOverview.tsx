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

const StyledH2 = styled.h2`
  text-align: center;
`;

const StyledBox = styled.div`
  display: flex;
  margin-bottom: 1rem;
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

const StyledExpensesScore = styled.div`
  text-align: right;
  color: red;
  margin: 0;
`;

const StyledCircle = styled.div`
  background: #3eb489;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledWhiteCircle = styled.div`
  background: white;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
`;

const ListOfOverview: NextPage = () => {
  return (
    <StyledContainer>
      <StyledH2>Summary</StyledH2>
      <StyledSummaryContainer>
        <StyledDataRange>Today</StyledDataRange>
        <StyledBox>
          <StyledCircle>
            <StyledWhiteCircle />
          </StyledCircle>
          <StyledContent>
            <StyledMain>
              <StyledCategory>Expenses:</StyledCategory>
              <StyledExpensesScore>66$</StyledExpensesScore>
            </StyledMain>
          </StyledContent>
        </StyledBox>
      </StyledSummaryContainer>
      <StyledSummaryContainer>
        <StyledDataRange>Last 7 days</StyledDataRange>
        <StyledBox>
          <StyledCircle>
            <StyledWhiteCircle />
          </StyledCircle>
          <StyledContent>
            <StyledMain>
              <StyledCategory>Expenses:</StyledCategory>
              <StyledExpensesScore>66$</StyledExpensesScore>
            </StyledMain>
          </StyledContent>
        </StyledBox>
      </StyledSummaryContainer>
      <StyledSummaryContainer>
        <StyledDataRange>May 2022</StyledDataRange>
        <StyledBox>
          <StyledCircle>
            <StyledWhiteCircle />
          </StyledCircle>
          <StyledContent>
            <StyledMain>
              <StyledCategory>Expenses:</StyledCategory>
              <StyledExpensesScore>66$</StyledExpensesScore>
            </StyledMain>
          </StyledContent>
        </StyledBox>
      </StyledSummaryContainer>
      <div>
        <StyledDataRange>2022</StyledDataRange>
        <StyledBox>
          <StyledCircle>
            <StyledWhiteCircle />
          </StyledCircle>
          <StyledContent>
            <StyledMain>
              <StyledCategory>Expenses:</StyledCategory>
              <StyledExpensesScore>66$</StyledExpensesScore>
            </StyledMain>
          </StyledContent>
        </StyledBox>
      </div>
    </StyledContainer>
  );
};

export default ListOfOverview;
