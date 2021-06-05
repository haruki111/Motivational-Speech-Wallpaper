function motivationalSpeechWallpaper(speechObject) {
    const verticalPoint = {
        "top": "flex-start",
        "center": "center",
        "bottom": "flex-end"
    }

    const horizontalPoint = {
        "left": "flex-start",
        "center": "center",
        "right": "flex-end"
    }

    let div = document.createElement("div");
    div.classList.add("motivationWrapper");
    div.style.backgroundImage = "url(" + speechObject.imgUrl + ")";
    div.style.alignItems = verticalPoint[speechObject.vertical];
    div.style.justifyContent = horizontalPoint[speechObject.horizontal];

    let text = document.createElement("h2");
    text.classList.add("motivationText");
    text.innerHTML = speechObject.text;
    text.style.color = "#" + speechObject.color;

    div.append(text);
    speechObject.domObj.append(div);
    return speechObject.domObj;
}

class Speech{
    constructor(text, color, imgUrl, vertical, horizontal, domObj) {
        this.text = text;
        this.color = color;
        this.imgUrl = imgUrl;
        this.vertical = vertical;
        this.horizontal = horizontal;
        this.domObj = domObj;
    }
}
let domObj = document.getElementById("inner");

let speech1 = new Speech("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "2c3e50", "https://recursionist.io/img/different-job.png", "center", "center", domObj);
let speech2 = new Speech("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "2c3e50", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "bottom", "left", domObj);
let speech3 = new Speech("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "top", "right", domObj);

let speeches = [speech1, speech2, speech3];
speeches.map(speech => motivationalSpeechWallpaper(speech));