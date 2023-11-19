
const parseDate = (datum) => {
    return{
        day: Number(datum.slice (0,2)),
        month: Number (datum.slice(3,5)),
        year: Number (datum.slice(6)),
    }
    
    
  }
  
  const datum = parseDate('19.11.2023') 
  
  document.body.innerHTML+= `Den: ${datum.day}, `
  document.body.innerHTML+= `Měsíc: ${datum.month}, `
  document.body.innerHTML+= `Rok: ${datum.year}.`

