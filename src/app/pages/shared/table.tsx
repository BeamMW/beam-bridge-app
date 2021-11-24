import React, { useState } from 'react';
import { styled } from '@linaria/react';
import { receive } from '@state/init';
import { isNil } from '@core/utils.js';
import { Transaction } from '@app/core/types';
import { $isInProgress } from '@state/shared';
import { useStore } from 'effector-react';

interface CellConfig {
  name: string;
  title: string;
  fn?: (value: any, source: any) => string;
}

interface TableProps {
  keyBy: string;
  data: any[];
  config: CellConfig[];
}

const StyledTable = styled.table`
  width: 600px;
`;

const StyledThead = styled.thead`
  height: 40px;
  border-radius: 10px;
  background-color: rgba(15, 77, 130, .6);
`;

const isPositive = (value: number) => 1 / value > 0;

const Header = styled.th<{ active: boolean }>`
  text-align: left;
  color: ${({ active }) => {
    if (isNil(active)) {
      return '#8da1ad';
    }
    return active ? '#ffffff' : '#8da1ad';
  }};
  padding: 15px 30px;
`;

const Column = styled.td`
  padding: 20px 30px;
  background-color: rgba(13, 77, 118, .9);
`;

const ConfirmReceive = styled.div<{disabled: boolean}>`
  width: 167px;
  height: 32px;
  padding: 8px 16px;
  border-radius: 17.5px;
  border: solid 1px #0bccf7;
  background-color: rgba(11, 204, 247, 0.1);
  color: #0bccf7;
  text-align: center;
  font-size: 14px;
  cursor: ${({ disabled }) => {console.log(disabled); return disabled ? "not-allowed" : "pointer"}};
  opacity: ${({ disabled }) => disabled ? "0.5" : ""};
  display: flex;
  flex-direction: row;

  &:hover,
  &:active {
    box-shadow: ${({ disabled }) => disabled ? "none" : "0 0 8px white"};
  }
`;

const ConfirmIcon = styled.object`
  display: block;
  margin-right: 15px;
`;

const Table: React.FC<TableProps> = ({ keyBy, data, config }) => {
  const [filterBy, setFilterBy] = useState(0);
  const isInProgress = useStore($isInProgress);
  console.log(isInProgress)

  const sortFn = (objectA, objectB) => {
    const name = config[Math.abs(filterBy)].name;
    const a = objectA[name];
    const b = objectB[name];

    if (a === b) {
      return 0;
    }

    const sign = isPositive(filterBy) ? 1 : -1;
    return a > b ? sign : -sign;
  };

  const handleSortClick: React.MouseEventHandler<HTMLElement> = event => {
    const index = parseInt(event.currentTarget.dataset.index);
    setFilterBy(index === filterBy ? -filterBy : index);
  };

  const handleReceiveClick = (tr: Transaction) => {
    if (!isInProgress) {
      receive(tr);
    }
  };

  console.log(data);
  return data.length > 0 ? (
    <StyledTable>
      <StyledThead>
        <tr>
          {config.map(({ title }, index) => (
            <Header
              key={index}
              data-index={index}
              active={
                index !== Math.abs(filterBy) ? null : isPositive(filterBy)
              }
              onClick={handleSortClick}>
                {title}
            </Header>
          ))}
        </tr>
      </StyledThead>
      <tbody>
        {data.sort(sortFn).map((item, index) => (
          <tr key={index}>
            {config.map(({ name, fn }, index) => {
              const value = item[name];
              return name === 'status' 
                ? (
                <Column key={index}>
                  <ConfirmReceive disabled={isInProgress} onClick={() => handleReceiveClick(item)}>
                    <ConfirmIcon
                      type="image/svg+xml"
                      data={'./assets/icon-send-blue.svg'}
                      width="16"
                      height="16"></ConfirmIcon>
                    Confirm receive
                  </ConfirmReceive>
                </Column>) 
                : (<Column key={index}>{isNil(fn) ? value : fn(value, item)}</Column>);
            })}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  ) : (<></>);
};

export default Table;
