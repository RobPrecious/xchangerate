import React from "react";
import styled from "styled-components";
import { Dropdown } from "../Dropdown";
import { DropdownOption } from "../../shared/interfaces/dropdown.interface";
import { CurrencyOption } from "../CurrencyOption";
import currencyCodeToName from "../../shared/reference/currencyCodeToName";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 600px;
  margin: 32px auto;
  gap: 24px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StyledConvertButton = styled.button`
  background: #3b5799;
  width: 100%;
  border: none;
  padding: 8px;
  color: #fff;
  border-radius: 16px;
  font-size: 16px;
`;

export const CurrencyConverter = () => {
  const [amount, setAmount] = React.useState<number>();
  const [currencyFrom, setCurrencyFrom] = React.useState<string>("GBP");
  const [currencyTo, setCurrencyTo] = React.useState<string>("EUR");

  const currencyOptions: DropdownOption[] = Object.keys(currencyCodeToName).map(
    (currencyCode) => {
      return {
        value: currencyCode,
        searchValue: currencyCode + currencyCodeToName[currencyCode],
        content: (
          <CurrencyOption
            currencyCode={currencyCode}
            currencyName={currencyCodeToName[currencyCode]}
          />
        ),
      };
    }
  );

  return (
    <StyledContainer>
      <label>
        Amount
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setAmount(Number(event.target.value))
          }
        />
      </label>
      <Dropdown
        label="Search Currency"
        options={currencyOptions}
        selectedValue={currencyFrom}
        onChange={(value: string) => setCurrencyFrom(value)}
      />
      <Dropdown
        label="Search Currency"
        options={currencyOptions}
        selectedValue={currencyTo}
        onChange={(value: string) => setCurrencyTo(value)}
      />
      <StyledConvertButton>Convert</StyledConvertButton>
    </StyledContainer>
  );
};
