import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api"
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

function App() {

  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home);
  console.log("data"+url);
  useEffect(()=>{
   apiTesting();
  },[]);

  const apiTesting = ()=> {
    fetchDataFromApi('/movie/popular').then((res)=>{
     // console.log(res);
      dispatch(getApiConfiguration(res));
    })
  }
  return (
    <div className='App'>
   {console.log(url?.total_pages)}
   {url?.total_pages}
    </div>
  )
}

export default App
