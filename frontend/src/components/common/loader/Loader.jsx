import React from 'react'
import { BeatLoader } from "react-spinners";

export default function Loader() {
  return (
    <>
        <div className="p-5">
            <td>
            <BeatLoader color="#454B1B" size={15} />
            </td>
        </div>
    </>
  )
}
