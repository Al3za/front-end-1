
/* skriv ut vilen bock jag har läst och inte läst. jag har inte läst bills book men hár läst steve jobbs book, so nr1
 1) skapa en funcion som ta fram readstatus properti fron array obj*/
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
  /*  const getName=(a=>{
      return  a .author
    })
    const getBook=(a=>{
        return a.title
    })
     
    const read=library.filter(a=>{
        return a.readingStatus==true
    })

    const notRead=library.filter(a=>{
        return a.readingStatus==false
    })

  //console.log(notRead)
   const AuthorName=read.map(a=>{
       return   getName(a)
   })
   const BookName=read.map(a=>{
       return getBook(a)
   })

   const NotreadAuthorName=notRead.map(a=>{
       return    getName(a)
     })

     const NotreadBOOKName=notRead.map(a=>{
         return getBook(a)
     })
  //console.log(NotreadBOOKName)

   console.log(`jag har läst ${AuthorName[0]} bocken ${BookName[0]} 
   men har inte läst ${NotreadAuthorName} bocken ${NotreadBOOKName}`)*/

   library.forEach(item=>{
       console.log(`boken ${item.title} har du 
       ${item.readingStatus ? "":"inte"} läst `)
   })
    
     