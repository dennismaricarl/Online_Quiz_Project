import { useEffect, useState } from "react"
import { fetchHTMLquestions } from "../api /fetchData"


const HTML = () => {

  const [ques, setQues] = useState([])
  let [result, setResult] = useState(0)
  const solution = []

  useEffect(() => {
    async function HTMLquestions() {
      const APIdata = await fetchHTMLquestions();
      setQues(APIdata[0].questions)

    }
    HTMLquestions()
  }, [])

  const handleSubmit = () => {

    let count = 0
    for (let i = 0; i < ques.length; i++) {
      if (ques[i].answer === solution[i]) {
        count++

      }
    }
    setResult(count)

  }

  return (
    <>
      {result && <h1>Your total point is: {result}</h1>}
      {ques && ques.map((htmlQues, i) => (
        <div>
          {htmlQues.question}


          <ul style={{ listStyle: 'none' }}>

            <li>
              <input
                onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="htmlQues1"
                name={`htmlQues${i}`}
                value='A' />
              <label>{htmlQues.options.A}</label>
            </li>

            <li>
              <input
                onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="htmlQues2"
                name={`htmlQues${i}`}
                value='B' />
              <label>{htmlQues.options.B}</label>
            </li>

            <li>
              <input
                onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="htmlQues3"
                name={`htmlQues${i}`}
                value='C' />
              <label>{htmlQues.options.C}</label>

            </li>

            <li>
              <input
                onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="htmlQues4"
                name={`htmlQues${i}`}
                value='D' />
              <label>{htmlQues.options.D}</label>
            </li>
          </ul>

        </div>
      ))}
      <button type='submit' onClick={handleSubmit}>SUBMIT</button>
    </>
  )

}

export default HTML 