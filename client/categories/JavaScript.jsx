import { useEffect, useState } from "react"
import { fetchJSquestions } from "../api /fetchData"

const JavaScript = () => {
  const [ques, setQues] = useState([])
  let [result, setResult] = useState(0)
  const solution = []


  useEffect(() => {
    async function JavaScriptQuestions() {

      const APIdata = await fetchJSquestions();
      setQues(APIdata[0].questions)
    }

    JavaScriptQuestions()
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
      {ques && ques.map((JSquestions, i) => (
        <div>
          {JSquestions.question}
          <ul style={{ listStyle: 'none' }}>

            <li>
              <input
                onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="JSquestion1"
                name={`JSquestion${i}`}
                value='A' />
              <label>{JSquestions.options.A}</label>
            </li>

            <li>
              <input
                onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="JSquestion2"
                name={`JSquestion${i}`}
                value='B' />
              <label>{JSquestions.options.B}</label>
            </li>

            <li>
              <input
                onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="JSquestion3"
                name={`JSquestion${i}`}
                value='C' />
              <label>{JSquestions.options.C}</label>

            </li>

            <li>
              <input
                onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="JSquestion4"
                name={`JSquestion${i}`}
                value='D' />
              <label>{JSquestions.options.D}</label>
            </li>
          </ul>


        </div>
      ))}
      <button type='submit' onClick={handleSubmit}>SUBMIT</button>
    </>
  )

}

export default JavaScript 