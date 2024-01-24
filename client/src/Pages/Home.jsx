import Banner from "../Components/Banner"
import {useEffect, useState} from "react";
import Card from "../Components/Card";
import Jobs from "./Jobs"
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
    
   const [selectedCategory,setSelectedCategory]=useState(null);
   const[jobs,setJobs] = useState([])
   const[isLoading,setIsLoading] = useState(true);
   const[currentPage,setCurrentPage] = useState(1);
   const itemsPerPage = 6;

   useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/all-jobs").then(res =>res.json()).then(data =>{
      //console.log(data)
      setJobs(data)
      setIsLoading(false)
        })
   },[])
  // console.log(jobs)
  
    const [query,setQuery] = useState("");
    const handleInputChange = (event) =>{
        setQuery(event.target.value)
    
    }
    //filter jobs by title
    const filteredItems=jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    //..........radio filtering............
    const handleChange=(event) =>{
      setSelectedCategory(event.target.value)
    }
    //.........button based filtering.........

    const handleClick=(event) =>{
      setSelectedCategory(event.target.value)
    }

    //.....calculate index page
    const calculatePageRange = () =>{
      const startIndex =(currentPage -1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return {startIndex,endIndex};
    }

    //functions for next page
    const nextPage = () =>{
      if  (currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
        setCurrentPage(currentPage+1);} 

      }
    //function for previous page
    const prevPage = () => {
      if (currentPage >1){
        setCurrentPage(currentPage-1)}
      }
    

    //main function
    const filteredData =(jobs,selected,query) =>{
      let filteredJobs= jobs;
      if(query){
        filteredJobs = filteredItems;
      }

      if(selected){
        filteredJobs = filteredJobs.filter(({jobLocation,maxPrice,experienceLevel,salaryType,employmentType,postingDate}) =>(
          jobLocation === selected ||
          parseInt(maxPrice) === parseInt(selected)||
          postingDate >= selected||
          experienceLevel === selected||
          salaryType === selected ||
          employmentType === selected
        ));
        console.log(filteredJobs);
      }

      //slice the data based on current page
      const {startIndex,endIndex} = calculatePageRange();
      filteredJobs = filteredJobs.slice(startIndex,endIndex)

      return filteredJobs.map((data,i) => <Card key={i} data={data}/>)
    }

    const result =filteredData(jobs,selectedCategory,query)
  
  return (

    <div >
        <Banner query={query} handleInputChange={handleInputChange}/>

        <div className="bg-[#10101E] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
          {/*left side */}
            <div className="bg-white p-4 rounded"><Sidebar handleChange={handleChange} handleClick={handleClick}/></div>
              {/*job cards */}
              <div className="col-span-3 bg-white p-4 rounded-sm">
                {
                  isLoading ? (<p className="font-medium">Loading....</p>): result.length > 0 ? <Jobs result={result}/>: <>
                  <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
                  <p>No Data Found on this Page!</p></>}
                  
                  {/*pagination here */}

                  {
                    result.length > 0 ? (
                      <div className="flex justify-center mt-4 space-x-8">
                        <button onClick={prevPage} disabled ={currentPage === 1} className="hover:underline">Previous</button>
                        <span className="mx-2"> Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                         <button onClick={nextPage} disabled = {currentPage === Math.ceil(filteredItems.length /itemsPerPage)} className="hover:underline">Next</button>
                        </div>

                    ) : ""
                  }
                  
                  </div>



          
        
        </div>
        
        </div>
  )
                }

export default Home