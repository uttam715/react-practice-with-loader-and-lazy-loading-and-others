// import { useRef, useState } from "react";

// export default function RefUse() {
//   const inputRef = useRef(null);
//   const fileRef = useRef(null);

//   function handleOnChange() {
//     console.log("Input value: " + inputRef.current.value);
//     console.log("file value", fileRef.current.value);

//   }
//   return (
//     <div>
//       <input type="file" fileRef={fileRef}></input>
//       <input type="text" defaultValue="Initial value" ref={inputRef} />
//       <button
//         className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
//         onClick={handleOnChange}
//       >
//         Click
//       </button>

//     </div>
//   );
// }

import { useRef, useState } from "react";
import DisplayData from "./DisplayData";

export default function RefUse() {
  const [formData, setFormData] = useState(null);

  // Controlled input
  const [email, setEmail] = useState("");

  // Uncontrolled inputs
  const nameRef = useRef(null);
  const fileRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameRef || !fileRef.current.files[0] || !email) return;

    const name = nameRef.current.value;
    const file = fileRef.current.files[0];
    const emailCopy = email;

    setFormData({
      name,
      email: emailCopy,
      file,
    });
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Name (Uncontrolled)</label>
          <input
            type="text"
            ref={nameRef}
            dfaultValue="Uttam"
            className="border px-2 py-1 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Email (Controlled)</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-2 py-1 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Upload File</label>
          <input
            type="file"
            ref={fileRef}
            className="border px-2 py-1 rounded w-full"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* 👇 Send formData to child component */}
      {formData && <DisplayData data={formData} />}
    </div>
  );
}
