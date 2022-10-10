export default function getDate(timeStamp) {
  const date = new Date(timeStamp * 1000)

  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()

  return `${month}/${day}/${year}`
}
