// import {useState, useEffect} from "react"

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");

//   const onClick = () => setValue((prev) => prev+1);
//   const onChange = (event) => setKeyword(event.target.value);

//   console.log("I run all the time");
//   // 한 번 만 실행
//   useEffect(()=> {
//     console.log("CALL THE API...");
//   }, []);

//   // 키워드가 변경될 때 마다 실행
//   useEffect( () => {
//     if(keyword !== "" && keyword.length > 5) {
//       console.log("SEARCH FOR :", keyword);
//     }
//   }, [keyword]);

//   useEffect( () => {
//       console.log("counter FOR :", counter);
//   }, [counter]);

//   return (
//     <div>
//       <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from 'react';

// function Hello() {

//   useEffect( () => {
//     console.log("Created :)");
//     return () => console.log("bye :(");
//   }, []);
//   return <h1>Hello</h1>;
// }

// function App() {
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing((prev) => !prev);

//   return (
// <div>
//   <button onClick={onClick}>{showing ? "Hide":"Show"}</button>
//   {showing ? <Hello />:null}
// </div>
//   );
// }

// export default App;
