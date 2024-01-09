import './style.css';

const CreateAnnouncement = () => {
  return (
    <form className="container announcements">
      <div className="row">
        <div className="space">
          <label htmlFor="upload_img" className="file_uploader">
            Rasm joylash
          </label>
          <input type="file" hidden id="upload_img" />
        </div>
        <div className="between"></div>
      </div>
    </form>
  );
};

export default CreateAnnouncement;
