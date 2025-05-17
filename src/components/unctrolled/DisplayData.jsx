export default function DisplayData({ data }) {
    return (
      <div className="mt-6 p-4 border rounded shadow">
        <h2 className="text-lg font-bold mb-2">Submitted Data:</h2>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>File Name:</strong> {data.file?.name || "No file uploaded"}</p>
        <p><strong>File Type:</strong> {data.file?.type}</p>
        <p><strong>File Size:</strong> {data.file ? `${(data.file.size / 1024).toFixed(2)} KB` : "N/A"}</p>
      </div>
    );
  }
  