import { mount, shallow } from 'enzyme';
import { prettyPrint } from 'html';

export const sampleData = {
  total: 34,
  selectedId: 'g3jk6ppJc_NdKKhv1JGa7w',
  restaurants: [
    {
      name: "Billy The Butcher",
      id: "g3jk6ppJc_NdKKhv1JGa7w",
      url: "https://www.yelp.com/biz/billy-the-butcher-hamburg-2?adjust_creative=nMAD8ywU1QBl_RMSM215Bg&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=nMAD8ywU1QBl_RMSM215Bg",
      phone: "+494057283299",
      display_phone: "+49 40 57283299",
      rating: 4,
      photos: [
        "https://s3-media2.fl.yelpcdn.com/bphoto/RDKmsxZZczP4EiTCB9AYOw/o.jpg"
      ],
      location: {
        address1: "Jungfernstieg 16 - 20",
        city: "Hamburg",
        postal_code: "20354",
        formatted_address: "Jungfernstieg 16 - 20\n4. OG\n20354 Hamburg\nGermany"
      },
      reviews: [
        {
          text: "I've had decent lunches at Billy The Butcher a couple of times now. It's what I would describe as a trendy burger joint on the 4th floor of the Alsterhaus...",
          rating: 4
        },
        {
          text: "We arrived Hamburg at noon and decide to get some burgers before going to the office. This place is pretty close to the city hall and rated well.\n\nI ordered...",
          rating: 4
        },
        {
          text: "Nice place to have good burger for lunch. Most of personnel speak English which is good. Prices are decent, also I would recommend to share fries with a...",
          rating: 4
        }
      ]
    }]
};

export const mockFunction = jest.fn(value => value);

export const createMountedComponent = ({ children, isShallow }) => {
  const mountedComponent = isShallow ? shallow(children) : mount(children);
  mountedComponent.htmlRender = () => prettyPrint(mountedComponent.html(), { indent_size: 2 });

  return mountedComponent;
};

