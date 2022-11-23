test('test', () => {})

test('Truth is universal', () => {
  const simpleTruth = true;
  expect(simpleTruth).toBeTruthy();
})

test('Falsy is !true', () => {
  const simpleTruth = true;
  expect(!simpleTruth).toBeFalsy();
})

/* test('renders headline', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to multicontainer fibonaccci sequence/i);
  expect(linkElement).toBeInTheDocument();
});
 */