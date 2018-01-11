/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import React from 'react';
import Matches from '../src/Matches';
import renderer from 'react-test-renderer';

var match = {
  'results': [
    {
      'id': '0005157597ba8d147141b05e8fd83a66',
      'score': 1,
      'title': '<div className="description">test title<span style={Object { "backgroundColor": "#ffffb3" }}></span></div>',
      'text': '<div className="description">I had a great time<span style={Object { "backgroundColor": "#ffffb3" }}></span></div>',
      'date': '2014-11-01',
      'sentimentLabel': 'positive',
      'sentimentScore': 0.761482
    }
  ]
};
  
it('renders correctly', () => {
  const tree = renderer
    .create(
      <Matches 
        matches={ match.results } 
      />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
