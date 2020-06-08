import React from 'react';
import './Search.css';
import { StandaloneSearchBox } from '@react-google-maps/api';

export default function Search() {

  return (
      <StandaloneSearchBox>
        <input
          type="text"
          placeholder="Customized your placeholder"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`
          }}
        />
      </StandaloneSearchBox>
  )
}