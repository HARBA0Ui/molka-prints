import { useContext, useState } from "react";
import Title from "../../components/Title";
import { AuthContext } from "../../context/AuthContext";

function Settings() {
  const {admin}= useContext(AuthContext)
  const [username, setUsername]= useState(admin.username)
  console.log(admin)
  return (
    <div className="p-4 mx-auto">
      <Title title="Settings" />
      <form className="-mt-2">
        <table>
          <tbody>
            <tr>
              <td className="p-2 mb-1">
                <label htmlFor="username">Username: </label>
              </td>
              <td className="p-2 mb-1">
                <input
                  type="text"
                  className="h-12 text-sm w-64 px-4"
                  name="username"
                  id="username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="p-2 mb-1">
                <label htmlFor="pass">Old Password: </label>
              </td>
              <td className="p-2 mb-1">
                <input
                  type="text"
                  className="h-12 text-sm w-64 px-4"
                  name="pass"
                  id="pass"
                  required
                />
              </td>
            </tr>
            <tr>
              <td className="p-2 mb-1">
                <label htmlFor="pass">New Password: </label>
              </td>
              <td className="p-2 mb-1">
                <input
                  type="text"
                  className="h-12 text-sm w-64 px-4"
                  name="pass"
                  id="pass"
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <td className="w-[calc(350px)] flex mt-4">
          <button
            type="submit"
            className="bg-darkPruple px-4 py-3 mx-auto rounded-full text-white hover:bg-pinky transition-all"
          >
            Update Credentials
          </button>
        </td>
      </form>
    </div>
  );
}

export default Settings;
