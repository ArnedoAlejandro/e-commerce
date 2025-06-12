// TODO - Primer cambio de adress.interface, adress-store, get-user-address
export interface Address {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  city: string; // ✅ reemplaza a `city`
  provinceId: string; // ✅ reemplaza a `province`
  postalCode: string;
  phone: string;
}
// export interface Address {
//   firstName: string;
//   lastName: string;
//   address: string;
//   address2?: string;
//   city: string;
//   province: string;
//   postalCode: string;
//   phone: string;
// }
