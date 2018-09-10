import { shallow } from 'enzyme';
import React from 'react';

import UserProfile from '../../../src/components/JelpZone/userProfile/components/UserProfile';

// example from https://medium.com/netscape/testing-a-react-redux-app-using-jest-and-enzyme-b349324803a9
describe('>>>JelpZone UserProfile Stateless --- Shallow Render REACT COMPONENTS',()=>{

    let wrapper;
    const information = {
    	"firstName": "Diego",
			"lastName": "Gutierrez",
			"address": "",
			"birthday": "1979-01-07T03:00:00.000Z",
			"urgent-mode": false,
			"professional": false,
			"username": "Diego Gutierrez",
			"email": "diego.gutierrez@evolutions-it.net",
			"emailVerified": true,
			"id": "5a8dc8640f3483066fd3b6f5",
			"city": "",
			"country": "",
			"phoneNumber": "",
			"profileImages": "",
			"frontDNIFiles": "",
			"backDNIFiles": "",
    }

    beforeEach(()=>{
      wrapper = shallow(<UserProfile information={information} populateUserInfo={()=> true} />);
    })

    it('+++ render user profile component', () => {
      expect(wrapper.length).toEqual(1);
    });

    it('+++ render my user profile component', () => {
    	wrapper = shallow(<UserProfile isMyProfile={true} information={information} populateUserInfo={()=> console.log("nothing")} />);
      expect(wrapper.length).toEqual(1);
    });
      
    /*it('+++ contains output', () => {
      expect(wrapper.find('input[placeholder="Output"]').prop('value')).toEqual(output)
    });*/
    
});