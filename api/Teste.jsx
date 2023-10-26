// import React, { useState, useEffect } from 'react';

// const Teste = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://20.88.41.42/api/categoria/v1', {
//           headers: {
//             'Accept': 'application/json'
//           }
//         });
//         if (!response.ok) {
//           throw new Error('Erro ao carregar os dados');
//         }
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);


//   fetch('http://20.88.41.42/api/categoria/v1', { headers: { "Content-Type": "application/json; charset=utf-8" }})
//     .then(_json => _json.json()) 
//     .then(objeto => {
//         console.log ()
//     })
//     .catch(err => {
//         console.log("Erro na requisicao");
//     });

//   return (
//     <div>
//       {data && (
//         <div>
//           <h1>{data.title}</h1>
//           <p>{data.description}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Teste;


import React, { useState, useEffect } from 'react';
import jsonp from 'jsonp';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    jsonp('http://20.88.41.42/api/categoria/v1', null, (err, response) => {
      if (err) {
        console.error('Erro ao fazer a requisição:', err);
      } else {
        console.log('resposta', response)
        setData(response);
      }
    });
  }, []);

  return (
    <div>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default MyComponent;
