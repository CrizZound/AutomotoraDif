export const getAutos = async()=> {
    try{
        const response = await fetch("https://api-render-f1bl.onrender.com/");
        console.log(response);
        const data = await response.json();

        return data.autos;
        
    }catch(error){
        console.log(`El error es: ${error}`);  
    }

}