import { shallow } from 'enzyme';
import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import Projects from '../../../src/components/JelpZone/Projects';
import Project from '../../../src/components/JelpZone/Project';

describe('>>>JelpZone Projects Stateless --- Shallow Render REACT COMPONENTS',()=>{

  let wrapper;
  const projects = [
    {
      id:1,
      name: "Project 1"
    },
    {
      id:2,
      name: "Project 2"
    },
  ];

  it('+++ render user projects component without crashing', () => {
    expect(shallow(<Projects />).length).toEqual(1);
  });

  it('+++ render user projects with list projects component without crashing', () => {
    wrapper = shallow(<Projects projects={projects} />);
    expect(wrapper.length).toEqual(1);
  });

  it('+++ render two <Project /> components', () => {
    wrapper = shallow(<Projects projects={projects} />);
    expect(wrapper.find(Project).length).toEqual(2);
  });

  it('+++ render user projects loading list component without crashing', () => {
    expect(shallow(<Projects loading={true} />).length).toEqual(1);
  });

  it('+++ render one <CircularProgress /> components', () => {
    wrapper = shallow(<Projects loading={true} />);
    expect(wrapper.find(CircularProgress).length).toEqual(1);
  });
    
});