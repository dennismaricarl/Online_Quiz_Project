import { useEffect, useState } from "react"
import { fetchCSSquestions } from "../api /fetchData";

const CSSquiz = () => {

  const [ques, setQues] = useState([])
const solution = []

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


  const handleSubmit = () => {

   console.log("hello")
    // console.log(solution)

  }


  return (
    <>
      <h1>CSS Questions</h1>
      {ques && ques.map((cssQ, i) => (
        <div>
          <h2>{cssQ.question}</h2>

          <ul style={{ listStyle: 'none' }}>

            <li>
              <input
                onChange={(e) => solution[i] = e.target.value }
                type="radio"
                id="cssQ1"
                name={`cssQ${i}`}
                value='A' />
              <label>{cssQ.options.A}</label>
            </li>

            <li>
              <input
                onChange={(e) =>  solution[i] = e.target.value }
                type="radio"
                id="cssQ2"
                name={`cssQ${i}`}
                value='B' />
              <label>{cssQ.options.B}</label>
            </li>

            <li>
              <input onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="cssQ3"
                name={`cssQ${i}`}
                value='C' />
              <label>{cssQ.options.C}</label>

            </li>

            {/* <li>
              <input onChange={(e) => solution[i] = e.target.value }
                type="radio"
                id="cssQ4"
                name={`cssQ${i}`}
                value='D' />
              <label>{cssQ.options.D}</label>
            </li> */}
          </ul>

        </div>


      ))}

      {/* <button type='submit' onClick={handleSubmit}>Submit</button> */}
    </>
  )

}

export default CSSquiz 