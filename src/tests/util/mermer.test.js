const mermer = require('../../util/mermer');

describe('mermer', () => {
  it('converts number mojo to mermer', () => {
    const result = mermer.mojo_to_mermer(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to mermer', () => {
    const result = mermer.mojo_to_mermer('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to mermer string', () => {
    const result = mermer.mojo_to_mermer_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to mermer string', () => {
    const result = mermer.mojo_to_mermer_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number mermer to mojo', () => {
    const result = mermer.mermer_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string mermer to mojo', () => {
    const result = mermer.mermer_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = mermer.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = mermer.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = mermer.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = mermer.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = mermer.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = mermer.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
