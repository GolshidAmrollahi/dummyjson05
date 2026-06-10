// const  HEXToVBColor = (rrggbb: string) => {
//     let bbggrr = rrggbb.substr(4, 2) + rrggbb.substr(2, 2) + rrggbb.substr(0, 2);
//     return parseInt(bbggrr, 16);
// }
export const stringToColor = (inputString: string)  => {
    
    const color = {
      backgroundColor: "",
      textColor: ""
    }
    let hash = 0;

    
    if (inputString.length === 0) {
      color.backgroundColor = "000000";
      color.textColor = "black";
      return color;
    };
    for (let i = 0; i < inputString.length; i++) {
        hash = inputString.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    color.backgroundColor = '#';
    for (let i = 0; i < 3; i++) {
        let value = (hash >> (i * 8)) & 255;
        color.backgroundColor += ('00' + value.toString(16)).substr(-2);
    }
    if (color.backgroundColor > "#4FFFFFC"){
      color.textColor = "black"
      return color;
    }
    
    color.textColor = "white"
    return color;
};
