export const fetchCSSquestions = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/css');
    const result = await response.json();
    return result;

  } catch (error) {
    console.log(error)
  }
};


export const fetchHTMLquestions = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/html')
    const result = await response.json()
    return result

  } catch (error) {
    console.log(error)
  }
}


export const fetchJSquestions = async () => {
  try{
    const response = await fetch('http://localhost:8080/api/javascript')
    const result = await response.json()
    return result

  }catch(error){
    console.log(error)
  }
}

export const fetchAdvancedJSquestions = async () => {
  try{
    const response = await fetch('http://localhost:8080/api/advancedjs')
    const result = response.json()
    return result

  }catch(error){
    console.log(error)
  }
}

export const fetchWomenCSquestions = async () => {
  try{
    const response = await fetch('http://localhost:8080/api/womenincs')
    const result = response.json()
    return result

  }catch(error){
    console.log(error)
  }
}