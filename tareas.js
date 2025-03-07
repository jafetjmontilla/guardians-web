

const miFuntion = (myArray) => {
  const resultFilter = myArray.filter((elem, indice) => {
    return myArray.indexOf(elem) == indice
  })
  const resultCopiado = [...resultFilter]

  const result = resultCopiado.sort((a, b) => a - b)
  return result
}

const myArray = [1, 3, "4", 2, 2, 2, "2", "2", "7", 3, 7, "4", 5, 6, 7]


const arrayNames = ["jhoana", "jafet", "ivan", "krishna"]

const asd = arrayNames.map((elem) => {
  return {
    name: elem,
    size: elem.length
  }
})

const asdOrdenado = asd.sort((b, a) => a.size - b.size)
const maxSize = asd[0].size

let borde = ""
for (let i = 0; i < maxSize + 4; i = i + 1) {
  borde = borde + "*"
}

const asdConString = asd.map((elem) => {
  const size = maxSize - elem.size
  let espaciosEnBlanco = ""
  for (let i = 0; i < size; i = i + 1) {
    espaciosEnBlanco = espaciosEnBlanco + " "
  }
  const string = "* " + elem.name + espaciosEnBlanco + " *"
  return {
    name: elem.name,
    size: elem.size,
    string: string
  }
})


let aqui = ""
for (let i = 0; i < asdConString.length; i = i + 1) {
  aqui = aqui + asdConString[i].string + "\n"
}

console.log(asdConString)


const resp = borde + "\n" + aqui + borde

console.log(resp)