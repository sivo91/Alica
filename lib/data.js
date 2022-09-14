import fs from 'fs';
import path from 'path';



const dataDir2 = path.join(process.cwd(), 'JSON');


 // selectuje id z id.json file
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



// dava data novej stranke
export async function getData(id) {

  const filePath = path.join(dataDir2, 'content.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  const jsonObj = JSON.parse(jsonString);
  // find object value in array that has matching id
  const objMatch = jsonObj.filter(obj => {
    return obj.id.toString() === id;
  });


  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }

  return objReturned;
}