export const sendMessage = async (
  sendData: any,
  callback: Function,
  makeUnvisible: Function
) => {
  // let response = await fetch('http://localhost:3000/', {
  let response = await fetch('https://server-node-jhzh.onrender.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify(sendData),
  });
  if (response.status == 200) makeUnvisible();
  let result = await response.text();
  await callback(JSON.parse(result));
};
