import { useFetcher } from "@remix-run/react";
import { useState } from "react";

export default function CreateUser() {
  const fetcher = useFetcher();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: ""
  });

  const handleSubmit = async () => {
    try {
      await fetcher.submit(formData, {
        method: "POST",
        action: "/create"
      });
    } catch (error) {
      console.error("Failed to submit data", error);
    }
  };

  return (
    <div>
      <h1>Nhập Thông Tin</h1>
      <form>
        <label>Tên:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label>Địa chỉ:</label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
        <button
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
