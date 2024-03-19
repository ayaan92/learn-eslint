import React from 'react';
import axios from 'axios';
import lodash from 'lodash';
import moment from 'moment';

/**
 * Example function
 *
 * @example
 *   exampleFunction();
 *
 * @returns {void}
 */
const exampleFunction = () => {
  const data = [1, 2, 3, 4, 5];
  const doubledData = lodash.map(data, (num) => num * 2);
  console.log(doubledData);

  axios
    .get('https://api.example.com/data')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  const formattedDate = moment().format('YYYY-MM-DD');
  console.log(formattedDate);
};

export { exampleFunction };
