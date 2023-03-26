export const sendMessage: Function = async (
  sendData: object,
  callback: Function,
  makeUnvisible: Function
) => {
  // let response = await fetch('http://localhost:3000/', {
  let response: Response = await fetch(
    'https://server-node-jhzh.onrender.com/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
        // 'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(sendData),
    }
  );
  if (response.status == 200) makeUnvisible();
  let result: string = await response.text();
  await callback(JSON.parse(result));
};
