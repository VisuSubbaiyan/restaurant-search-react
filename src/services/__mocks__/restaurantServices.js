import { sampleData } from '../../utils/testUtils';

const mockData = {
  ...sampleData,
  business: sampleData.restaurants,
};

export default async () => await new Promise(resolve => resolve(mockData));
