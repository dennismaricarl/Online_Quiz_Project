import { useEffect, useState } from "react"
import { fetchJSquestions } from "../api /fetchData"

const JavaScript = () => {
  const [ques, setQues] = useState([])


  useEffect(() => {
    async function JavaScriptQuestions() {

      const APIdata = await fetchJSquestions();
      setQues(APIdata[0].questions)
    }

    JavaScriptQuestions()
  }, [])

  return (
    <>
      <h1>JavaScript PAGE</h1>
      {ques && ques.map((JSquestions) => (
        <div>
          {JSquestions.question}
          <ul style={{ listStyle: 'none' }}>

            <li>
              <input type="radio" id="JSquestion1" name="JSquestion" value='A'/>
              <label>{JSquestions.options.A}</label>
            </li>

            <li>
              <input type="radio" id="JSquestion2" name="JSquestion" value='B'/>
              <label>{JSquestions.options.B}</label>
            </li>

            <li>
              <input type="radio" id="JSquestion3" name="JSquestion" value='C'/>
              <label>{JSquestions.options.C}</label>

            </li>

            <li>
              <input type="radio" id="JSquestion4" name="JSquestion" value='D' />
              <label>{JSquestions.options.D}</label>
            </li>
          </ul>


        </div>
      ))}
    </>
  )

}

export default JavaScript 