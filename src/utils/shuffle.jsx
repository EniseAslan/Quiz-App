import { questions } from '../data/questions'

// 1. YOL: rastgele seç, yeni diziden çıkar
// export function shuffle(array) {
//   const copy = [...array]
//   const result = []

//   while (copy.length > 0) {
//     const i = Math.floor(Math.random() * copy.length)
//     result.push(copy[i])
//     copy.splice(i, 1)
//   }

//   return result
// }


//2.YOL: sona at aralığı daraltarak ilerle
export function shuffle(array) {
  const copy = [...array]
  let last = copy.length - 1

  while (last > 0) {
    const i = Math.floor(Math.random() * (last+1))

    const temp = copy[i]
    copy[i] = copy[last]
    copy[last] = temp

    last = last-1
  }

  return copy
}

export function prepareQuestions() {
  return shuffle(questions).map((q) => ({
    ...q,
    options: shuffle(q.options),
  }))
}