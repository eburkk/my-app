/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Menu } from 'fundamental-react/Menu';
import { Dropdown } from 'fundamental-react/Dropdown';
import { Link } from 'wouter';
import { Popover } from 'fundamental-react/Popover';
import { Button } from 'fundamental-react/Button';
import '../App.css';


export const SearchDropdown = ( { params } ) => {
  const [isPopHidden, updatePopHidden] = useState(false);
  const [selection, updateSelection] = useState('Select');
  const [initialState, updateInitialState] = useState(true);
  
  const options = [
    { key: 'cardName', searchLink: '/cardName', name: 'Card Name' },
    { key: 'set', searchLink: 'set', name: 'Set Name' },
    { key: 'artist', searchLink: '/artist', name: 'Artist' },
    { key: 'all', searchLink: '/all', name: 'All' }
  ];

  if (params !== null && initialState) {
    options.forEach(element => {
      if (element.key === (params.selectedSearch)) {
        updateSelection(element.name);
      }
    });
    updateInitialState(false);
  }

  return (
    <Dropdown standard>
      <Popover
        id="jhqD0559"
        noArrow
        disabled={isPopHidden}
        body={
          <Menu key="menu">
            <Menu.List key="menuList">
              {options.map(option => {
                return (
                  <Menu.Item
                    key={option.key}
                    onClick={() => {
                      updatePopHidden(true);
                      updateSelection(option.name);
                    }}
                  >
                    <Link className="link" href={option.searchLink}>
                      {option.name}
                    </Link>
                  </Menu.Item>
                );
              })}
            </Menu.List>
          </Menu>
        }
        control={
          <Button
            key="selectButton"
            dropdown="true"
            type="standard"
            onClick={() => {
              updatePopHidden(false);
            }}
          >
            {selection}
          </Button>
        }
      />
    </Dropdown>
  );
};
