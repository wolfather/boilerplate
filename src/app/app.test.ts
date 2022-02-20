import { getFullName } from './app'

describe('App', () => {
  test('should test app function getFullName', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const result = getFullName(firstName, lastName);

    expect(result).toBe(firstName +' '+ lastName)
  })
})
