import React, { useContext, useRef, useState } from "react";
import "../share/Share.css";
import ImageIcon from "@mui/icons-material/Image";
import GifBoxIcon from "@mui/icons-material/GifBox";
import FaceIcon from "@mui/icons-material/Face";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { AuthContext } from "../../state/AuthContext";
import axios from "axios";

const Share = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const shareDesc = useRef();
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: shareDesc.current.value,
    };

    if (file) {
      // FormDataオブジェクトとは、サーバーにデータを送信する際に使用するオブジェクト。ユーザーが入力するフォームデータや、任意のデータをサーバーに送信できる。実際の値はキーと値のペア。
      // FormData オブジェクトの使い方=> newキーワードでインスタンスを作成し、appendメソッドでキーと値を追加。
      // var formData = new FormData();
      // formData.append("キー", "値");
      const data = new FormData(); //keyとvalueを持つ
      const fileName = Date.now() + file.name; //file名が重複しないようにDate.now()を付けて差別化図る
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post(`/upload`, data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post(`/posts`, newPost);
      window.location.reload();
    } catch (err) {
      console.loog(err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? PUBLIC_FOLDER + user.profilePicture
                : PUBLIC_FOLDER + "/person/noAvatar.png"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="What are you doing now?"
            ref={shareDesc}
          />
        </div>
        <hr className="shareHr" />

        <form className="shareButtons" onSubmit={(e) => handleSubmit(e)}>
          <div className="shareOptions">
            <label className="shareOptions" htmlFor="file">
              <ImageIcon className="shareIcon" htmlColor="blue" />
              <span className="shareOptionText">Picture</span>
              <input
                type="file"
                id="file"
                accept=".png, .jpg, .jpeg, .JPG"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOptions">
              <GifBoxIcon className="shareIcon" htmlColor="hotpink" />
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOptions">
              <FaceIcon className="shareIcon" htmlColor="green" />
              <span className="shareOptionText">Feelings</span>
            </div>
            <div className="shareOptions">
              <AnalyticsIcon className="shareIcon" htmlColor="red" />
              <span className="shareOptionText">Analytics</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
