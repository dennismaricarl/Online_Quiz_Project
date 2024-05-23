import { useEffect, useState } from "react"
import { fetchCSSquestions } from "../api /fetchData";

const CSSquiz = () => {

  const [ques, setQues] = useState([])

  //recall: useEffect is synchronous, this is why we create an async function inside it and call it. 
  //keep useEffect synchronous so the React component behaves predictably. 
  //this is best practice for handling side-effects! 

  useEffect(() => {
    async function CSSquestions() {

      const APIdata = await fetchCSSquestions();
      console.log(APIdata[0].questions)
      setQues(APIdata[0].questions);

    }

    CSSquestions();
  }, []);

  return (
    <>
      <h1>CSS Questions</h1>
      {ques && ques.map((cssQ) => (
        <div>
          <h2>{cssQ.question}</h2>

          <ul style={{ listStyle: 'none' }}>

            <li>
              <input type="checkbox" id="cssQ" value='A' />
              <label>{cssQ.options.A}</label>
            </li>

            <li>
              <input type="checkbox" id="cssQ" value='B' />
              <label>{cssQ.options.B}</label>
            </li>

            <li>
              <input type="checkbox" id="cssQ" value='C' />
              <label>{cssQ.options.C}</label>

            </li>

            <li>
              <input type="checkbox" id="cssQ" value='D' />
              <label>{cssQ.options.D}</label>
            </li>
          </ul>

        </div>




      ))}

      <button>Submit</button>
    </>
  )

}

export default CSSquiz 