import { useEffect, useState } from "react"
import { fetchHTMLquestions } from "../api /fetchData"


const HTML = () => {

  const [ques, setQues] = useState([])

  useEffect(() => {
    async function HTMLquestions() {
      const APIdata = await fetchHTMLquestions();
      setQues(APIdata[0].questions)

    }
    HTMLquestions()
  }, [])


  return (
    <>
      <h1>HTML PAGE</h1>
      {ques && ques.map((htmlQues) => (
        <div>
          {htmlQues.question}


          <ul style={{ listStyle: 'none' }}>

            <li>
              <input type="checkbox" id="htmlQues" value='A'/>
              <label>{htmlQues.options.A}</label>
            </li>

            <li>
              <input type="checkbox" id="htmlQues" value='B'/>
              <label>{htmlQues.options.B}</label>
            </li>

            <li>
              <input type="checkbox" id="htmlQues" value='C' />
              <label>{htmlQues.options.C}</label>

            </li>

            <li>
              <input type="checkbox" id="htmlQues" value='D'/>
              <label>{htmlQues.options.D}</label>
            </li>
          </ul>

        </div>
      ))}
    </>
  )

}

export default HTML 