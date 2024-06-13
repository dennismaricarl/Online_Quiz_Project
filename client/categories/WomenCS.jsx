import { useEffect, useState } from "react"
import { fetchWomenCSquestions } from "../api /fetchData"

const WomenCS = () => {

  const [ques, setQues] = useState([])
  let [result, setResult] = useState(0)
  const solution = []

  useEffect(() => {
    async function WomenInCS() {
      const APIdata = await fetchWomenCSquestions()
      setQues(APIdata[0].questions)
    }
    WomenInCS();
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
      <h1>Women In Computer Science</h1>

      {ques && ques.map((womenQ, i) => (

        <div>
          {womenQ.question}
          <ul style={{ listStyle: 'none' }}>

            <li>
              <input
                onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="womenQ1"
                name={`womenQ${i}`}
                value='A' />
              <label>{womenQ.options.A}</label>
            </li>

            <li>
              <input
                onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="womenQ2"
                name={`womenQ${i}`}
                value='B' />
              <label>{womenQ.options.B}</label>
            </li>

            <li>
              <input
                onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="womenQ3"
                name={`womenQ${i}`}
                value='C' />
              <label>{womenQ.options.C}</label>

            </li>

            <li>
              <input
                onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="womenQ4"
                name={`womenQ${i}`}
                value='D' />
              <label>{womenQ.options.D}</label>
            </li>
          </ul>

        </div>
      ))}

      <button type='submit' onClick={handleSubmit}>SUBMIT</button>
    </>
  )
}

export default WomenCS

