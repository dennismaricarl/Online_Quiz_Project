import { useEffect, useState } from "react"
import { fetchWomenCSquestions } from "../api /fetchData"

const WomenCS = () => {

  const [ques, setQues] = useState([])

  useEffect(() => {
    async function WomenInCS() {
      const APIdata = await fetchWomenCSquestions()
      setQues(APIdata[0].questions)
    }
    WomenInCS();
  }, [])



  return (
    <>
      <h1>Women In Computer Science</h1>

      {ques && ques.map((womenQ) => (

        <div>
          {womenQ.question}
          <ul style={{ listStyle: 'none' }}>

            <li>
              <input type="radio" id="womenQ1" name="womenQ" value='A'/>
              <label>{womenQ.options.A}</label>
            </li>

            <li>
              <input type="radio" id="womenQ2" name="womenQ" value='B'/>
              <label>{womenQ.options.B}</label>
            </li>

            <li>
              <input type="radio" id="womenQ3" name="womenQ" value='C'/>
              <label>{womenQ.options.C}</label>

            </li>

            <li>
              <input type="radio" id="womenQ4" name="womenQ" value='D'/>
              <label>{womenQ.options.D}</label>
            </li>
          </ul>

        </div>
      ))}

    </>
  )
}

export default WomenCS
