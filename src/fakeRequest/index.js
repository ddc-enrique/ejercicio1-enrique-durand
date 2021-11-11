import { v4 as uuidv4 } from 'uuid';

const ids = []
for (let index = 0; index < 50; index++) {
  ids.push(uuidv4())
}

const data1 = []
for (let index = 0; index < 100; index++) {
  data1.push({
    id:  index < 50 ? ids[index] : uuidv4(),
    firstName: `John${index}`
  })
}

const data2 = []
for (let index = 0; index < 100; index++) {
  data2.push({
    id:  index < 50 ? ids[index] : uuidv4(),
    lastName: `Doe${index}`
  })
}

export const getFakeData1 = () => {
  return Promise.resolve().then(() => shuffle(data1))
}

export const getFakeData2 = () => {
  return Promise.resolve().then(() => shuffle(data2))
}

const shuffle = array => {
  let currentIndex = array.length
  let randomIndex

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }

  return array
}
