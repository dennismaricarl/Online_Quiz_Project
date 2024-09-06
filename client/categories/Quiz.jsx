import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Quiz = () => {

  const [ques, setQues] = useState([])
  let [result, setResult] = useState(null)

  const { category:category } = useParams();
  const solution = []


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/${category}`);
        const data = await response.json();
        console.log("fetched data:", data);
        setQues(data[0].questions);
      } catch (e) {
        console.error("Error fetching quiz data:", e.message);
      }
    };
  
    fetchData();
  }, [category]);




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
  let theQuestion = "text-3xl pb-10 text-yellow-100"
  let listOfQuestionsContainer = "space-y-4"
  let listItem = "space-x-2"
  let answers = "text-xl"

  return (
    <div className={mainContainer}>

      {result && <h1 className="text-5xl text-white mt-10">Your score is: {result}/10</h1>}
      {ques && ques.map((ques, i) => (

        <div className={questionCard}>

          <div className={theQuestion}> {ques.question}</div>

          <ul className={listOfQuestionsContainer} style={{ listStyle: 'none' }}>

            <li className={listItem}>
              <input
                onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="question1"
                name={`ques${i}`}
                value='A' />
              <label className={answers}>{ques.options.A}</label>
            </li>

            <li className={listItem}>
              <input
                onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="question2"
                name={`ques${i}`}
                value='B' />
              <label className={answers}>{ques.options.B}</label>
            </li>

            <li className={listItem}>
              <input
                onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="question3"
                name={`ques${i}`}
                value='C' />
              <label className={answers} >{ques.options.C}</label>

            </li>

            <li className={listItem}>
              <input
                onChange={(e) => solution[i] = e.target.value}
                type="radio"
                id="question4"
                name={`ques${i}`}
                value='D' />
              <label className={answers} >{ques.options.D}</label>
            </li>

          </ul>

        </div>

      ))}

      <button className="bg-gray-400 py-6 px-10 m-10 mb-20 rounded-md text-white text-4xl hover:bg-gray-200" type='submit' onClick={handleSubmit}>SUBMIT</button>

    </div>
  )

}


export default Quiz;