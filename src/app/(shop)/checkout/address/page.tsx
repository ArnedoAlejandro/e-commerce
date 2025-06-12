

import TitleMenu from '@/components/ui/top-menu/title/TitleMenu';

import { getProvinces, getUserAddress } from '@/actions';
import { auth } from '@/auth.config';
import AdressForm from './ui/AdressForm';

export default async  function  AddressPage () {

  const provinces =  (await getProvinces()) ?? [];
  // const cities = await getCities();  

  const user = await auth();

  if(!user?.user?.id) {
    return <p>El usuario no esta logueado</p>;
  }


  const userAddress = await  getUserAddress(user.user.id);

  if(userAddress) {
    console.log(userAddress)
  }

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 min-h-screen">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-6 sm:p-10">

        <TitleMenu title="Dirección" subtitle="Dirección de entrega" />

        <AdressForm  provinces={provinces}  useStoredAddress={userAddress ?? undefined} />
      </div>
    </div>
  );
}
