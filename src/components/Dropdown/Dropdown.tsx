import React from "react";
import styled from "styled-components";
import { BsSearch, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { DropdownOption } from "../../shared/interfaces/dropdown.interface";

const StyledDropdownContainer = styled.div<{ open: boolean }>`
  ${(props) => props.open && `box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px`};
`;

const StyledDropdownTrigger = styled.button<{ open: boolean }>`
  display: flex;
  border: none;
  background: none;
  padding: 8px;
  width: 100%;
  justify-content: space-between;
`;

const StyledDropdown = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  gap: 8px;

  padding: 8px;
`;

const StyledDropdownInputContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-bottom: 1px solid #757575;

  svg {
    fill: #757575;
  }
`;

const StyledDropdownInput = styled.input`
  width: 100%;
  border: none;
  font-size: 18px;
  padding: 4px;
`;

const StyledDropdownOptionGroup = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding: 0;
  max-height: 200px;
  overflow: auto;

  li {
    width: 100%;
  }
`;

const StyledDropdownOption = styled.button`
  border: none;
  border-radius: 4px;
  background: none;
  width: 100%;
  padding: 4px;
  color: #3b5799;

  &[aria-selected="true"] {
    background-color: #3b5799;
    color: white;
  }
`;

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  selectedValue: string;
}

export const Dropdown = (props: DropdownProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [filter, setFilter] = React.useState<string>("");

  const handleOptionClick = (value: string) => {
    props.onChange(value);
    setOpen(false);
    setFilter("");
  };

  const selectedOption = props.options.find(
    (option) => option.value === props.selectedValue
  );

  return (
    <StyledDropdownContainer open={open}>
      <StyledDropdownTrigger
        open={open}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {selectedOption?.content}
        {open ? <BsChevronUp size="1.25em" /> : <BsChevronDown size="1.25em" />}
      </StyledDropdownTrigger>
      <StyledDropdown open={open}>
        <StyledDropdownInputContainer>
          <BsSearch size="1.25em" />
          <StyledDropdownInput
            type="text"
            value={filter || ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFilter(event.target.value)
            }
            placeholder={props.label}
            aria-label={props.label}
          />
        </StyledDropdownInputContainer>

        <StyledDropdownOptionGroup>
          {selectedOption && (
            <li key={selectedOption.value}>
              <StyledDropdownOption
                onClick={() => handleOptionClick(selectedOption.value)}
                aria-selected="true"
              >
                {selectedOption.content}
              </StyledDropdownOption>
            </li>
          )}
          {props.options
            .filter((option) => option.value !== props.selectedValue)
            .filter((option) =>
              filter.length > 0
                ? option.value.toLowerCase().indexOf(filter.toLowerCase()) !==
                  -1
                : true
            )
            .map((option) => (
              <li key={option.value}>
                <StyledDropdownOption
                  onClick={() => handleOptionClick(option.value)}
                >
                  {option.content}
                </StyledDropdownOption>
              </li>
            ))}
        </StyledDropdownOptionGroup>
      </StyledDropdown>
    </StyledDropdownContainer>
  );
};
