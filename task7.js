const library=[{
    author:"bill gates",
    title: "the road ahead",
    readingStatus:true
},
{
    author: "steve Jobs",
    title:"walter isacsoon",
    readingStatus:true
},
{
    author:"suzanne collinst",
    title: "mokinjay ungergames",
    readingStatus:false
}
]

   
 /*const Truefilter2=(a=>{
     return {
        one: a.readingStatus==true,
        tvo:a.readingStatus!=true,
     }
 })
  const bookName= (a=>{
      return a.title
  })
const arrTrue=library.filter(a=>{
 return Truefilter2(a).tvo. a.title
}) 

const arrFalse=library.filter(a=>{
    return  Truefilter2(a).tvo
})
// filter 1 skapar 2 arrays, en med de böcker jag har läst, och en me de jag har inte läst

const bookINOTread=arrFalse.map(a=>{
    return bookName(a)
})

const BookIread=arrTrue.map(a=>{
   return bookName(a)
})
 


console.log(BookIread)
console.log(bookINOTread)

 
/*const bookiNOTreadName=bookINOTread.map(a=>{
    return bookName(a)
}) 
console.log(bookiNOTreadName)*/