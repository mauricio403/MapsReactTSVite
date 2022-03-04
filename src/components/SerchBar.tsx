import { ChangeEvent, useRef } from "react"

export const SerchBar = () => {

  const debounceRef = useRef<NodeJS.Timeout>()

  const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
  
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);

      debounceRef.current = setTimeout(() => {
        //buscar algo
        console.log('valor', event.target.value);
      }, 0);
    }
    
  }

  return (
    <div className="search-container">
        <input type="text" 
            className="form-control"
            placeholder="Buscar lugar"
            onChange={onQueryChange}
        />
    </div>
  )
}
