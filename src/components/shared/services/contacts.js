import instance from './auth';

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};
export const addContact = async data => {
  // console.log(data);
  // console.log('data:', data);
  const { data: result } = await instance.post('/contacts', data);
  // console.log(result);
  // console.log('result:', result);
  return result;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
export const editContact = async data => {
  const { name, number, id } = data;
  // console.log(data);
  const { data: result } = await instance.patch(`/contacts/${id}`, {
    name,
    number,
  });
  // console.log(id);
  // console.log(result);
  return result;
};
