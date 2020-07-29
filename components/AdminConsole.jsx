const AdminConsole = () => {
  async function uploadImage(e) {
    console.log("uploading...");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "kgphoto");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dchopcxko/image/upload/",
      {
        method: "POST",
        body: data,
      }
    ).then((res) => res.json());

    console.log(res);

    // const file = res;
    // return file.url
  }

  return (
    <div>
      <form>
        <input
          type="file"
          id="file"
          name="file"
          placeholder="Upload an image"
          required
          onChange={uploadImage}
        />
      </form>
    </div>
  );
};
export default AdminConsole;
