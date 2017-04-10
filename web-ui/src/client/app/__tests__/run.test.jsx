describe('run', () => {
  const mockRender = jest.fn();
  const mockFirewall = jest.fn();
  const mockGetElementById = jest.fn();

  mockFirewall.mockReturnValueOnce(Promise.resolve());

  jest.mock('../services/oauth-provider.js', () => ({}));
  jest.mock('../services/oauth-firewall.js', () => mockFirewall);
  jest.mock('react-dom', () => ({
    render: mockRender
  }));

  global.document = {
     getElementById: mockGetElementById
  }

  const {run} = require('../run');

  test('should render app', () => {
    return run().then(() => {
      expect(mockRender).toHaveBeenCalled();
      expect(mockGetElementById).toHaveBeenCalledWith('app');
    });
  });
});


