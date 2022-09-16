import fs from 'fs';
import path from 'path';



const dataDir2 = path.join(process.cwd(), 'JSON');


 // selectuje id z id.json file
 // getStaticPaths()
export function getAllIds() {

  const filePath = path.join(dataDir2, 'id.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj = JSON.parse(jsonString);

  return jsonObj.map(item => {
    return {
      params: {
        id: item.id.toString()
      }
    }
  }); 
} 



  // dava info do link
 export function entryCards() {

  const filePath = path.join(dataDir2, 'content.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj = JSON.parse(jsonString);


  return jsonObj.map(item => {
    return {
      id: item.id.toString(),
      title: item.title,
      img: item.img

    }
  });
} 



// dava data novej / stranke getStaticProps()
export async function getData(id) {

  const filePath = path.join(dataDir2, 'content.json');
  const filePath2 = path.join(dataDir2, 'relatives.json');
  

  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonString2 = fs.readFileSync(filePath2, 'utf8');
 

  const jsonObj = JSON.parse(jsonString);
  const jsonObj2 = JSON.parse(jsonString2);

  // find object value in array that has matching id
  const objMatch = jsonObj.filter(obj => {  
     return obj.id.toString() === id;
  });

  
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];

   const objMatch2 = jsonObj2.filter( obj => {
    return obj.mainID.toString() === id
  })

  if(objMatch2.length > 0) {
    const objMatch3 = jsonObj.filter(item => {
      return objMatch2[0].relatedID.includes(item.id)
    })

    if(objMatch3.length > 0) {
      objReturned.related = objMatch3
    }
  }

  } else {
    objReturned = {};
  }

  console.log(objReturned)

  return objReturned;
}