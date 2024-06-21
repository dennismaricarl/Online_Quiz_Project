import { useState } from "react";

const MakeAQuiz = () => {
    const [category, setCategory] = useState("")
    const [data, setData] = useState(Array(10).fill({ question: "", option1: "", option2: "", option3: "", option4: "", answer: "" }));

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedData = data.map((item, i) => (
            i === index ? { ...item, [name]: value } : item
        ));
        setData(updatedData);

    };

    const display = (e) => {
        e.preventDefault(); // Prevent form submission
        console.log(category, data);
    };



    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/makeAquiz', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    category: category,
                    data: data
                })

            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <h1>FORM HERE!</h1>
            <form >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input
                        placeholder="Category"
                        type="text"
                        value={category}
                        name="category"
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    {data.map((item, index) => (
                        <div key={index}>
                            <input
                                placeholder="Question"
                                type="text"
                                value={item.question}
                                name="question"
                                onChange={(e) => handleChange(e, index)}
                            /><br />
                            <input
                                placeholder="Option 1"
                                type="text"
                                value={item.option1}
                                name="option1"
                                onChange={(e) => handleChange(e, index)}
                            /><br />
                            <input
                                placeholder="Option 2"
                                type="text"
                                value={item.option2}
                                name="option2"
                                onChange={(e) => handleChange(e, index)}
                            /><br />
                            <input
                                placeholder="Option 3"
                                type="text"
                                value={item.option3}
                                name="option3"
                                onChange={(e) => handleChange(e, index)}
                            /><br />
                            <input
                                className="input"
                                placeholder="Option 4"
                                type="text"
                                value={item.option4}
                                name="option4"
                                onChange={(e) => handleChange(e, index)}
                            /><br />
                            <input
                                className="input"
                                placeholder="Answer"
                                type="text"
                                value={item.answer}
                                name="answer"
                                onChange={(e) => handleChange(e, index)}
                            /><br />
                        </div>
                    ))}
                    <button style={{ width: '20%', height: '40px' }} onClick={handleSubmit}>SUBMIT</button>
                </div>
            </form>
        </>
    );
};

export default MakeAQuiz;
