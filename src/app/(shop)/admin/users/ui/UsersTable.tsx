"use client"

import { changeUserRole } from '@/actions';
import { User } from '@/interface/user.interface';
import React from 'react'



interface Props {
  users: User[];
}

const UsersTable = ({users}: Props) => {
  return (
    <div>
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Email</th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Nombre completo</th>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Role</th>
            
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.email}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="flex items-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <select  className="w-full py-2   text-sm text-gray-900 font-light cursor-pointer   whitespace-nowrap"
                    value={user.role}
                    onChange={e => changeUserRole(user.id, e.target.value )}
                  
                    >
                      <option value="admin">
                        Admin
                      </option>
                      <option value="user">
                        User
                      </option>
                  </select>
                </td>
            
              </tr>
            ))}
          </tbody>
        </table>
      
    </div>
  )
}

export default UsersTable
