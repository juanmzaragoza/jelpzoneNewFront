import { shallow } from 'enzyme';
import React from 'react';

import ListItem from '@material-ui/core/ListItem';

import { Index as ProfessionalSearch } from '../../../src/components/JelpZone/professionalSearch/routes/Index';
import { ResultsMap } from '../../../src/components/JelpZone/professionalSearch/routes/ResultsMap';
import ProfessionalsMap from '../../../src/components/JelpZone/ProfessionalsMap';
import FiltersMap, { FiltersMap as Filter} from "../../../src/components/JelpZone/professionalSearch/routes/ResultsMap/FiltersMap";

// example from https://medium.com/netscape/testing-a-react-redux-app-using-jest-and-enzyme-b349324803a9
describe('>>>JelpZone ProfessionalSearch Stateless --- Shallow Render REACT COMPONENTS',()=>{

  let wrapper;
  const professions = [
    {
      id:1,
      name: "Profession 1"
    },
    {
      id:2,
      name: "Profession 2"
    },
  ];
  describe('===ProfessionalSearch/Index Stateless',()=>{

    it('+++ render user professional search component without crashing', () => {
      expect(shallow(<ProfessionalSearch fetchProfessions={()=> true} allProfessions={professions} />).length).toEqual(1);
    });

    it('+++ render two <ListItem /> (Profession) components', () => {
      wrapper = shallow(<ProfessionalSearch fetchProfessions={()=> true} allProfessions={professions} />);
      expect(wrapper.find(ListItem).length).toEqual(2);
    });
  });

  describe('===ProfessionalSearch/ResultsMap Stateless',()=>{

    it('+++ render professional search map component without crashing', () => {
      expect(shallow(<ResultsMap />).length).toEqual(1);
    });

    it('+++ render a <FiltersMap /> and a <ProfessionalsMap /> component', () => {
      wrapper = shallow(<ResultsMap />);
      expect(wrapper.find(FiltersMap).length).toEqual(1);
      expect(wrapper.find(ProfessionalsMap).length).toEqual(1);
    });

  });

  describe('===ProfessionalSearch/FiltersMap Stateless',()=>{

    it('+++ render filter map component without crashing', () => {
      expect(shallow(<Filter fetchProfessions={()=> true} allProfessions={professions} />).length).toEqual(1);
    });

  });

    
});