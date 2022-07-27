import styled from "styled-components";

const StyledCurrencyOption = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const StyledCurrencyFlag = styled.img`
  width: 32px;
`;

const StyledCurrencyCode = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const StyledCurrencyName = styled.span`
  font-size: 14px;
`;

export interface CurrencyOptionProps {
  currencyCode: string;
  currencyName: string;
}

export const CurrencyOption = ({
  currencyCode,
  currencyName,
}: CurrencyOptionProps) => {
  return (
    <StyledCurrencyOption>
      <StyledCurrencyFlag
        src={`https://flagcdn.com/h40/${currencyCode
          .substring(0, 2)
          .toLowerCase()}.png`}
        alt=""
      />
      <StyledCurrencyCode>{currencyCode}</StyledCurrencyCode>/
      <StyledCurrencyName>{currencyName}</StyledCurrencyName>
    </StyledCurrencyOption>
  );
};
