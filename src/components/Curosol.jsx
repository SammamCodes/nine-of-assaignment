import 'animate.css';

const Curosol = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full animate__animated animate__slideInLeft">
                <img
                    src="https://cdn.pixabay.com/photo/2018/03/27/15/04/women-3266211_1280.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full animate__animated animate__slideInLeft">
                <img
                    src="https://cdn.pixabay.com/photo/2022/09/21/10/42/plantation-7470027_640.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full animate__animated animate__slideInLeft">
                <img
                    src="https://cdn.pixabay.com/photo/2018/01/13/13/55/landscape-3080146_640.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full animate__animated animate__slideInLeft">
                <img
                    src="https://cdn.pixabay.com/photo/2023/12/05/01/13/elks-8430545_640.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Curosol;
