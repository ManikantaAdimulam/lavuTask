import React from 'react';

export const NetworkManager = {
  request: url => {
    return fetch(url)
      .then(response => response.json())
      .then(responseJSON => {
        return responseJSON;
      })
      .catch(error => {
        return error;
      });
  },
};
