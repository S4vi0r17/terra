import { useEffect, useState } from 'react';
import { tesloApi } from '../../../api/teslo.api';

const RequestInfo = () => {
  const [info, setInfo] = useState<unknown>();

  useEffect(() => {
    tesloApi
      .get('/auth/private')
      .then((response) => setInfo(response.data))
      .catch((error) => setInfo(error.response.data));
  }, []);

  return (
    <>
      <h2>Información</h2>
      <pre>{JSON.stringify(info, null, 2)}</pre>
    </>
  );
};

export default RequestInfo;
