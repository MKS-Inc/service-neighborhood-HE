const http = require('k6/http');

export let options = {
  vus: 200,
  // rps: 1000,
  duration: '5m',
  discardResponseBodies: true,
};

export default function() {

    // let hoodid = faker.random.number({ min: 1, max: 100000 });
    let hoodid = Math.floor(Math.random() * Math.floor(999999)) + 1;
    let houseid = Math.floor(Math.random() * Math.floor(10000000));
    let userid = Math.floor(Math.random() * Math.floor(9)) + 1;

    for (let i = 0; i < 20; i++) {
      http.get(`http://ec2-13-52-217-18.us-west-1.compute.amazonaws.com:3001/api/neighborhood/1`);
    }

    http.post(`http://ec2-13-52-217-18.us-west-1.compute.amazonaws.com:3001/${userid}/${houseid}`)

}








// import http from 'k6/http';
// import { sleep } from 'k6';

// export let options = {
//   vus: 2000,
//   rps: 500,
//   duration: '5s'
// };

// export default function() {
//   // const before = new Date().getTime();
//   // const T = 2; // time needed to complete a VU iteration
  
//   // Replace this with normal requests w/o a for-loop
//   let id = 80000 + Math.floor(Math.random() * Math.floor(20000));
//   http.get(`http://localhost:3001/api/neighborhood/${id}`);
  

//   // const after = new Date().getTime();
//   // const diff = (after - before) / 1000;
//   // const remainder = T - diff;
//   // if (remainder > 0) {
//   //   sleep(remainder);
//   // } else {
//   //   console.warn(
//   //     `Timer exhausted! The execution time of the test took longer than ${T} seconds`
//   //   );
//   // }
// }