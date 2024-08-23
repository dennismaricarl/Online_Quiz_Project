import { useEffect, useState } from "react"
import { fetchHTMLquestions } from "../api /fetchData"


const HTML = () => {

  const [ques, setQues] = useState([])
  let [result, setResult] = useState(null)
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
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });


  }

  let mainContainer = "flex flex-col bg-gray-500 items-center justify-center"
  let questionCard = "text-white rounded-md bg-gray-400 py-6 px-10 w-1/2 h-80 m-10"
  let question = "text-3xl pb-10 text-yellow-100"
  let listOfQuestionsContainer = "space-y-4"
  let listItem = "space-x-2"
  let answers = "text-xl"

  return (
    <div className={mainContainer}>

      {result && <h1 className="text-5xl text-white mt-10">Your score is: {result}/10</h1>}
      {ques && ques.map((htmlQues, i) => (

        <div className={questionCard}>

            <div className={question}> {htmlQues.question}</div>

            <ul className={listOfQuestionsContainer} style={{ listStyle: 'none' }}>

              <li className={listItem}>
                <input 
                  onChange={(e) => solution[i] = e.target.value}
                  type="radio"
                  id="htmlQues1"
                  name={`htmlQues${i}`}
                  value='A' />
                <label className={answers}>{htmlQues.options.A}</label>
              </li>

              <li  className={listItem}>
                <input
                  onChange={(e) => solution[i] = e.target.value}
                  type="radio"
                  id="htmlQues2"
                  name={`htmlQues${i}`}
                  value='B' />
                <label className={answers}>{htmlQues.options.B}</label>
              </li>

              <li  className={listItem}>
                <input
                  onChange={(e) => solution[i] = e.target.value}
                  type="radio"
                  id="htmlQues3"
                  name={`htmlQues${i}`}
                  value='C' />
                <label className={answers} >{htmlQues.options.C}</label>

              </li>

              <li  className={listItem}>
                <input
                  onChange={(e) => solution[i] = e.target.value}
                  type="radio"
                  id="htmlQues4"
                  name={`htmlQues${i}`}
                  value='D' />
                <label  className={answers} >{htmlQues.options.D}</label>
              </li>

            </ul>

          </div>
      ))}

      <button className="bg-gray-400 py-6 px-10 m-10 mb-20 rounded-md text-white text-4xl hover:bg-gray-200" type='submit' onClick={handleSubmit}>SUBMIT</button>

    </div>
  )

}

export default HTML 