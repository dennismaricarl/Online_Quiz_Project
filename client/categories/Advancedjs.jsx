import { useEffect, useState } from "react"
import { fetchAdvancedJSquestions } from "../api /fetchData"

const Advancedjs = () => {

    const [ques, setQues] = useState([])
    let [result, setResult] = useState(null)
    const solution = []

    useEffect(() => {
        async function AdvancedJS() {
            const APIdata = await fetchAdvancedJSquestions();
            console.log(APIdata[0].questions)
            setQues(APIdata[0].questions)
        }

        AdvancedJS()
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
           {result && <h1>Your total point is: {result}/10</h1>}
            {ques && ques.map((advancedJS, i) => (
                <div>
                    <h1>{advancedJS.question}</h1>
                    <ul style={{ listStyle: 'none' }}>

                        <li>

                            <input
                                onChange={(e) => solution[i] = e.target.value}
                                type="radio"
                                id="advancedJS1"
                                name={`advancedJS${i}`}
                                value='A' />
                            <label>{advancedJS.options[0]}</label>
                        </li>

                        <li>
                            <input
                                onChange={(e) => solution[i] = e.target.value}
                                type="radio"
                                id="advancedJS2"
                                name={`advancedJS${i}`}
                                value='B' />
                            <label>{advancedJS.options[1]}</label>
                        </li>

                        <li>
                            <input
                                onChange={(e) => solution[i] = e.target.value}
                                type="radio"
                                id="advancedJS3"
                                name={`advancedJS${i}`}
                                value='C' />
                            <label>{advancedJS.options[2]}</label>

                        </li>

                        <li>
                            <input
                                onChange={(e) => solution[i] = e.target.value}
                                type="radio"
                                id="advancedJS4"
                                name={`advancedJS${i}`}
                                value='D' />
                            <label>{advancedJS.options[3]}</label>
                        </li>
                    </ul>

                </div>
            ))}
             <button type='submit' onClick={handleSubmit}>SUBMIT</button>

        </>
    )
}

export default Advancedjs

