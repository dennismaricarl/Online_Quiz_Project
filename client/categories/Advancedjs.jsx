import { useEffect, useState } from "react"
import { fetchAdvancedJSquestions } from "../api /fetchData"

const Advancedjs = () => {

    const [ques, setQues] = useState([])

    useEffect(() => {
        async function AdvancedJS() {
            const APIdata = await fetchAdvancedJSquestions();
            console.log(APIdata[0].questions)
            setQues(APIdata[0].questions)
        }

        AdvancedJS()
    }, [])


    return (
        <>
            <h1>Advanced JS</h1>
            {ques && ques.map((advancedJS) => (
                <div>
                    <h1>{advancedJS.question}</h1>
                    <ul style={{ listStyle: 'none' }}>

                        <li>
                            <input type="radio" id="advancedJS1" name="advancedJS" value='A'/>
                            <label>{advancedJS.options[0]}</label>
                        </li>

                        <li>
                            <input type="radio" id="advancedJS2" name="advancedJS" value='B'/>
                            <label>{advancedJS.options[1]}</label>
                        </li>

                        <li>
                            <input type="radio" id="advancedJS3" name="advancedJS" value='C'/>
                            <label>{advancedJS.options[2]}</label>

                        </li>

                        <li>
                            <input type="radio" id="advancedJS4" name="advancedJS" value='D'/>
                            <label>{advancedJS.options[3]}</label>
                        </li>
                    </ul>

                </div>
            ))}
               
        </>
    )
}

export default Advancedjs

