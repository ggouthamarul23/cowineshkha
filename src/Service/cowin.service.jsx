import axios from 'axios';

export const getGitHubUserWithFetch = () => {    
  return  fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states', {
        method: "POST",
        headers: {"Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiI4MGNmZWViMS1mZTQwLTQ4YmItOGI3MS1jYWMwOTJlODVjYWQiLCJ1c2VyX3R5cGUiOiJCRU5FRklDSUFSWSIsInVzZXJfaWQiOiI4MGNmZWViMS1mZTQwLTQ4YmItOGI3MS1jYWMwOTJlODVjYWQiLCJtb2JpbGVfbnVtYmVyIjo4NzU0MDcyNzcxLCJiZW5lZmljaWFyeV9yZWZlcmVuY2VfaWQiOjY4ODc2MjY5Mjc2NzgwLCJ0eG5JZCI6ImY0NGIyNjkwLThhMGEtNDNlYy05OWRkLTFkNGE1YTE2YmY1NCIsImlhdCI6MTYyMDk4MzU0NiwiZXhwIjoxNjIwOTg0NDQ2fQ.RLkG61Z1quzA16EUtfesIHQAIS5I1TcbsC5gfg-A4VI `}
      }).then(res => res.json()).then(json => json);
  };