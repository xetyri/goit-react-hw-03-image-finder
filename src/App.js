import { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Loader from "./components/Loader";
import s from "./App.module.css";

class App extends Component {
  state = {
    pictureName: "",
    page: 1,
    pictures: [],
    status: "idle",
    showModal: false,
    error: null,
    largeImageURL: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.pictureName;
    const nextName = this.state.pictureName;

    if (prevName !== nextName) {
      this.setState({ status: "pending", pictures: [], page: 1 });
      setTimeout(() => {
        this.pictureAPI();
      }, 1000);
    }
  }

  pictureAPI = () => {
    const { pictureName, page } = this.state;
    const key = "23947692-766c5aa41098b9126601621b0";
    const perPage = 12;

    fetch(
      `https://pixabay.com/api/?q=${pictureName}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
      .then((res) => res.json())
      .then((images) => {
        this.setState((prevState) => ({
          pictures: [...prevState.pictures, ...images.hits],
          status: "resolved",
          page: prevState.page + 1,
        }));
        if (page > 1) {
          this.scroll();
        }
      });
  };

  searchPictures = (picture) => {
    this.setState({ pictureName: picture });
  };

  modalControl = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  getLargeIMG = ({ largeImageURL }) => {
    this.setState({ largeImageURL });
    this.modalControl();
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  getMore = () => {
    this.pictureAPI();
  };

  render() {
    const { showModal, largeImageURL, status, pictures } = this.state;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.searchPictures} />
        {status === "pending" && <Loader />}
        {status === "rejected" && <p>Error</p>}
        {status === "resolved" && (
          <ImageGallery pictures={pictures} getLargeIMG={this.getLargeIMG} />
        )}
        {pictures.length > 0 && <Button getMore={this.getMore} />}
        {showModal && (
          <Modal onClose={this.modalControl}>
            <img
              src={largeImageURL}
              width="800"
              height="600"
              alt="Large_Image"
            />
            {/* {console.log(largeImageURL)} */}
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
