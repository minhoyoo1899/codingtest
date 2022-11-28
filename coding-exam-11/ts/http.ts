const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

//read
const head = fs.readFileSync('../txt/head.txt', 'utf-8', (err: any) => {
  if (err) throw err;
});

const header = fs.readFileSync('../txt/header.txt', 'utf-8', (err: any) => {
  if (err) throw err;
});

const main = fs.readFileSync('../txt/body.txt', 'utf-8', (err: any) => {
  if (err) throw err;
});

const readBody = () => {
  const bodyText = fs.readFileSync('../txt/body.txt', 'utf-8', (err: any) => {
  if (err) throw err;
  });  
  
  return bodyText;
}

const footer = fs.readFileSync('../txt/footer.txt', 'utf-8', (err: any) => {
  if (err) throw err;
});

const DynamicMakeServer = (childItem1: string, childItem2: string, childItem3: string) => {
  const bodyContext = `${childItem1} ${childItem2} ${childItem3}`; 

  // const returnBody = readBody();
  
  fs.appendFile('../txt/body.txt', bodyContext, (err: any) => {
    if (err) throw err;
    const l_body = readBody();
    //console.log("a");
    //console.log(l_body);
    combine(header, l_body);
  });
  

// const l_body:any = fs.readFileSync('../txt/body.txt', 'utf-8', (err: any) => {
//       if (err) throw err;
//   }
}

// const bodyChanger = async (childItem1: string, childItem2: string, childItem3: string) => {
//   const bodyContext = `${childItem1} ${childItem2} ${childItem3}`;

//   // const returnBody = readBody();
  
//    const updatBody = await fs.appendFile('../txt/body.txt', bodyContext, (err: any) => {
//       if (err) throw err;
//    }).then(readBody()).then((res: any) => {
//      console.log(res);
//     })
  

// // const l_body:any = fs.readFileSync('../txt/body.txt', 'utf-8', (err: any) => {
// //       if (err) throw err;
// //   }    
  
//   return updatBody;
// }

// const promise = () => {
//   fs.readFileSync('../txt/body.txt', 'utf-8', (err: any) => {
//     if (err) throw err;
//   });
// }

// const bodyText = readBody();
// console.log("b");
// console.log(bodyText);

const combine = (head: string, body: string) => {
  const html = `<html> <head>${head}</head> <body> ${body} </body></html>`
  openServer(html);  
}

function openServer(html: any) {
  const server = http.createServer((req: any, res: any) => {
    let getMethod = req.method;
  switch (getMethod) {
    case 'GET':
      res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8'});
      res.write(html);
      res.end();
      break;
    default:
      res.writeHead(405, { 'Content-Type': 'text/html; charset=UTF-8'});
      res.write('Method Not Allowed');
      res.end();
      break;
  }
  });
  server.listen(5678, (error: any) => {if(error) throw error});  
}

DynamicMakeServer(header, main, footer);

// console.log(combine(,);

// const htmlFile = combine(head, body);

// console.log(htmlFile);

// function htmlMaker(head: string, body: string, ) {
//   const htmlString = `${head} + `;
//   // let htmlString = "";
//   // htmlString += `<!DOCTYPE html><html lang="en">`;
//   // htmlString += `<head>`;
//   // htmlString += `${head}`;
//   // htmlString += `</head>`;
//   // htmlString += `<body>`;
//   // htmlString += `${body}`;
//   // htmlString += `</body>`;
//   // htmlString += `</html>`;
//   return htmlString;
// }



// const server = http.createServer((request: any, response: any) => {
//   let getMethod = request.method;
//   switch (getMethod) {
//     case 'GET':
//       response.writeHead(200, { 'Content-Type': 'text/html' });
//       const htmlFile = combine(head, body);
//       response.write(htmlFile);
//       response.end();
//       break;
//     default:
//       response.writeHead(405, { 'Content-Type': 'text/html' });
//       response.write('Method Not Allowed');
//       response.end();
//       break;
//   }
// });
// server.listen(5678, (error: any) => {if(error) throw error});