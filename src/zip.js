function zip (list1, list2) {
  const zippedLength = Math.max(list1.length, list2.length)
  const zipped = []

  for (let i = 0; i < zippedLength; i++) {
    if (i < list1.length) {
      zipped.push(list1[i])
    }
    if (i < list2.length) {
      zipped.push(list2[i])
    }
  }

  return zipped
}

const list1 = ['a', 'b', 'c']
const list2 = [1, 2, 3, 4, 5]

console.log(zip(list1, list2))

describe('zip function', () => {
  test('combines two lists of equal length', () => {
    const list1 = ['a', 'b', 'c']
    const list2 = [1, 2, 3]
    const result = zip(list1, list2)
    expect(result).toEqual(['a', 1, 'b', 2, 'c', 3])
  })

  test('combines two lists where the first list is shorter', () => {
    const list1 = ['a', 'b', 'c']
    const list2 = [1, 2, 3, 4, 5]
    const result = zip(list1, list2)
    expect(result).toEqual(['a', 1, 'b', 2, 'c', 3, 4, 5])
  })

  test('combines two lists where the second list is shorter', () => {
    const list1 = ['a', 'b', 'c', 'd', 'e']
    const list2 = [1, 2, 3]
    const result = zip(list1, list2)
    expect(result).toEqual(['a', 1, 'b', 2, 'c', 3, 'd', 'e'])
  })

  test('handles two empty lists', () => {
    const list1 = []
    const list2 = []
    const result = zip(list1, list2)
    expect(result).toEqual([])
  })

  test('handles the first list being empty', () => {
    const list1 = []
    const list2 = [1, 2, 3]
    const result = zip(list1, list2)
    expect(result).toEqual([1, 2, 3])
  })

  test('handles the second list being empty', () => {
    const list1 = ['a', 'b', 'c']
    const list2 = []
    const result = zip(list1, list2)
    expect(result).toEqual(['a', 'b', 'c'])
  })
})
